import React from 'react'
import { Container } from 'react-bootstrap'; 
import LstBlogger from '../components/LstBlogger';
const App = () => {
    return (
        <Container fluid>
            <h1 className="text-center">Listado de bloggers</h1>
            <LstBlogger />
        </Container>
    )
}

export default App;
