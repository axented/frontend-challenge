import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Link to="/" className="navbar-brand">Inicio</Link>
               
            </Container>
        </Navbar>
    )
}

export default NavBar;
