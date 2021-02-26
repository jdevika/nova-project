import React,{Component} from 'react';
import {Container,Table} from 'react-bootstrap';

export default class Appointments extends Component{
  constructor(props) {
		super(props);
		this.state = { data: [] };	 
	}
	callAPI() {
		fetch("http://localhost:8000/appointments")
			.then(res => res.json())
			.then(res => this.setState({ data: res}));
	}
	componentWillMount() {
		this.callAPI();
	}
    render(){
        return(
            <div className="d-flex flex-column-fluid">
            <Container style={{backgroundColor:'white',marginTop:'25px',textAlign:'left',padding:'2%'}}>
                <h1>Appointments</h1>
                <Table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Appointment ID#</th>
                        <th scope="col">Customer Name</th>                        
                        <th scope="col">Customer ID</th>
                        <th scope="col">Date </th>
                        <th scope="col">Time</th>                        
                      </tr>
                    </thead>
                    <tbody>                    
                      {this.state.data.map((obj,key) => 
						           (<tr>
                                <th scope="row">{obj._id}</th>
                                <td>{obj.customername}</td>
                                <td>{obj.customerid}</td>                           
                                <td>{obj.date}</td> 
                                <td>{obj.time}</td>                               
                            </tr>)
                        ) }                                             
                    </tbody>
                  </Table>
            </Container>
            </div>
        )
    
    }
}