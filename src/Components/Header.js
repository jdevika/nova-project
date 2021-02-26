import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
        <Link to='/' className="navbar-brand">Booking Admin</Link>
        <Nav className="mr-auto">
            <Link to='/' className='nav-link' active='true'> Home</Link>
            <Link to="/appointments" className='nav-link'>Appointments</Link>
            <Link to="/requests" className='nav-link'>Requests</Link>
        </Nav>
        </Navbar>
    );
}
