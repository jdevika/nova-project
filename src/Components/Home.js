import React,{Component}  from 'react';
import DataCard from './DataCard';
import Calendar from './Calendar';
import Slots from './Slots';
import '../calendar.css'; 
import {Container,Card} from 'react-bootstrap';

export default class Home extends Component{
    constructor(props) {
      super(props);
      this.state = { 
                     requestCount:"0", 
                     customerCount:"0",
                     slotCount:"0", 
                     appointmentCount:"0",
                   };
  }
  callAPI() {
    fetch("http://localhost:8000/pendingrequests")
          .then(res => res.json())
          .then(res => this.setState({ requestCount: res.length }));
    fetch("http://localhost:8000/customerscount")
          .then(res => res.json())
          .then(res => this.setState({ customerCount: res.length }));
    fetch("http://localhost:8000/appointments")
          .then(res => res.json())
          .then(res => this.setState({ appointmentCount: res.length }));    
    fetch("http://localhost:8000/slots")
          .then(res => res.json())
          .then(res => this.setState({ slotCount: res.length }));    
  }
  componentWillMount() {
      this.callAPI();
  }
  render(){
    return(
        <div className="d-flex flex-column-fluid">
        <Container style={{marginTop:'25px'}}>
            <div className="row">               
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-xl-6">  
                            <DataCard color='#f64e60' name='Users' num={this.state.customerCount} icon='1'/>
                            <DataCard color='#32c5d2' name='Appointments' num={this.state.appointmentCount}icon='2'/>
                        </div>
                        <div className="col-xl-6">
                            <DataCard color='#8950fc' name='Pending Requests' num={this.state.requestCount} icon='3'/>
                            <DataCard color='#3598dc' name='Vacant slots' num={this.state.slotCount} icon='4'/>
                        </div>
                    </div>
                    <Card style={{backgroundColor:'#1b283f'}}>
                        <Card.Body>
                        <div className="p-4">
                            <h3 className="text-white font-weight-bolder my-7">Create New Slots	</h3>                
                            <Slots/>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-6">
                        <div className="card card-custom gutter-b card-stretch" style={{padding:'5%',border:'0px'}}>
                            <Calendar/>
                        </div>							
                    </div>
            </div>
        </Container>
    </div>
    );

  }
    
}