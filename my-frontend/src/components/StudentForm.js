import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: '',
            studentName: '',
            studentLst: []
        }
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
            event.stopPropagation();

        alert("you have typed in: " + this.state.studentName);

        this.setState({
            studentId: '',
            studentName: '',
            studentLst: ['John', 'Tom','mry','test']
        })
    };

    render() {
        return (
            <Container fluid>
                {
                    this.state.studentLst.length > 0 &&
                    <Container fluid>
                        <Row>Result</Row>
                        <Row>{this.state.studentLst.map((student, index) => {
                            return (
                                <Col index={index}>{student}</Col>
                            );
                        })}</Row>
                    </Container>
                }

                {
                    this.state.studentLst.length === 0 &&
                    <Container fluid>
                        <Row>Student List is empty!</Row>
                    </Container>
                }

                <br />


                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group>
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter student id" value={this.state.studentId} 
                        onChange={(e) => this.setState({studentId: e.target.value})} />
                        <Form.Text className="text-muted">
                            Student is ur NUSNET id.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter student name"
                        value={this.state.studentName}
                        onChange={(e) => this.setState({studentName: e.target.value})} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Confirm" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </Container>
        );
    }
}

export default StudentForm;