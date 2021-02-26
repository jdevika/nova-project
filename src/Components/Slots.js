import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Slots extends Component {
   constructor(props) {
        super(props)
        this.state = {datevalue: '',timevalue: ''};
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
      }
  state = {
    isOpen: false,
  };

  handleDateChange(event) {
    this.setState({datevalue: event.target.value});
  }
  handleTimeChange(event) {
    this.setState({timevalue: event.target.value});
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  createSlot=()=> {    
          var time1 =this.state.timevalue;
          var date1 =this.state.datevalue;
                    
          if(time1!="" && date1 !=""){
            fetch('http://localhost:8000/createslots', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({date:date1,time:time1}), 
            })
            .then(res => res.json())
            .then(res => this.setState({ requestCount: res.length }));  
            this.closeModal();
            window.location.reload();
          }
          this.closeModal();
          
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">         
            <Button variant="danger" className="font-weight-bold px-6 py-3" onClick={this.openModal}>
            Get Started
            </Button>         
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title style={{margin:'20px'}}>New Slot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label style={{margin:'20px',fontWeight:'bolder'}}>Date:</label>
            <input type="date" id="dt" onChange={this.handleDateChange}/><br/>
            <label style={{margin:'20px',fontWeight:'bolder'}}>Time:</label>
            <input type="time" id="tm" onChange={this.handleTimeChange}/><br/>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.createSlot}>Create</Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Slots;