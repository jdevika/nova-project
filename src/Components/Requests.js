import React,{Component} from 'react';
import {Container,Table,Button} from 'react-bootstrap';

export default class Requests extends Component{
	constructor(props) {
		super(props);
		this.state = { data: [] };	 
	}
	callAPI() {
		fetch("http://localhost:8000/pendingrequests")
			.then(res => res.json())
			.then(res => this.setState({ data: res}));
	}

	handleReject(id){
		fetch('http://localhost:8000/rejectrequests/'+id)
			.then(res => res.json())
			.then(this.callAPI());
		
	}
	removeRequest(id){
		fetch('http://localhost:8000/removerequest/'+id,{
			method: 'DELETE', 
			headers: {
				'Content-Type': 'application/json'},
		})
		.then(res => res.json())
		.then(this.callAPI());

	}
	handleAccept(obj){
		let appointment ={
			customerid : obj.customerid,
			customername : obj.customername,
			slotid : obj.slotid,
			date : obj.date,
			time : obj.time,
		}
		fetch('http://localhost:8000/addappointments',{
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(appointment), 
		}).then(res => res.json())
		.then(
			this.removeRequest(obj._id)
		);
			
	}
	componentWillMount() {
		this.callAPI();
	}
	
    render(){
        return(
            <div className="d-flex flex-column-fluid">
            <Container style={{backgroundColor:'white',marginTop:'25px',padding:'2%',textAlign:'left'}}>
                <h1>Requests</h1>
                <Table className="table">
                <thead>
						  <tr>
							<th scope="col">Request ID#</th>
							<th scope="col">Customer Name</th>
							<th scope="col">Customer ID</th>
							<th scope="col">Slot Date</th>
							<th scope="col">Time</th>
							<th scope="col"></th>
						  </tr>
						</thead>
						<tbody>
							{this.state.data.map((obj) => 
							{return (<tr>
							<th scope="row">{obj._id}</th>
							<td>{obj.customername}</td>
							<td>{obj.customerid}</td>
							<td>{obj.date}</td>
							<td>{obj.time}</td>			
							<td>
								<Button variant="success" title="Accept" onClick={() => this.handleAccept(obj)} style={{marginRight:'10px'}}>Accept</Button>
								<Button variant="danger" title="Reject" onClick={() => this.handleReject(obj._id)}>Reject</Button>
								
							</td>
							</tr>)}
							)}				 			 
						</tbody>
                  </Table>
            </Container>
            </div>
        )
    
    }
}