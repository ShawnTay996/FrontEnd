import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import StudentForm from './components/StudentForm';


class App extends React.Component {
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Container fluid>
            <StudentForm />
          </Container>
        </Row>
      </Container>
    );
  }
}

export default App;
