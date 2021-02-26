import React,{Component} from 'react';
import {Container,Table} from 'react-bootstrap';

export default class Sellers extends Component{
    render(){
        return(
            <div className="d-flex flex-column-fluid">
            <Container style={{backgroundColor:'white',marginTop:'25px',textAlign:'left'}}>
                <h1>Sellers</h1>
                <Table className="table">
                <thead>
						  <tr>
							<th scope="col">#</th>
							<th scope="col">Seller Name</th>
							<th scope="col">Slots Created</th>
							<th scope="col">Appointments Booked</th>
							<th scope="col">Add Slots</th>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<th scope="row">1</th>
							<td>Seller 1</td>
							<td>52</td>
							<td>40</td>
							<td>
							<button type="button" class="btn btn-secondary" title="Create Slots">
								
								</button>
							</td>
							
						  </tr>
						  <tr>
							<th scope="row">2</th>
							<td>Seller 2</td>
							<td>90</td>
							<td>80</td>
		                    <td>
								<button type="button" class="btn btn-secondary" title="Create Slots">
								
								</button>
							</td>				  
						</tr>
						 
						</tbody>
                  </Table>
            </Container>
            </div>
            
        )
    
    }
}