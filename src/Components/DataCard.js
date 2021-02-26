import React,{Component} from 'react';
import {Icon1,Icon2,Icon3,Icon4} from '../Icon';
import {Container,Card} from 'react-bootstrap';


export default class DataCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const Icon=()=>{
            switch(this.props.icon)
            {
                case '1':return <Icon1/>;
                case '2':return <Icon2/>;
                case '3':return <Icon3/>;
                case '4':return <Icon4/>;
            }
            
        }
        return(
                <Card           
                text='white'
                border='light'
                style={{ backgroundColor:this.props.color,marginBottom:'25px'}}
            >
                    <Card.Body className='d-flex flex-column'>
                        <div className="d-flex flex-row">
                            <div className="mr-auto num-view" style={{fontSize:'xxx-large'}}>{this.props.num}</div>
                            {Icon()}                   
                        </div>												
                        <div className="d-flex flex-row" >{this.props.name}</div>						
                    </Card.Body>
                </Card>
    );
    }
   
}