import React from 'react'
import './Styles.css'
import {Card, Col, Container, Row,Spinner} from 'react-bootstrap'


function Layouts1() {
    return (
        <div>
            <Container>
                
                <Row>
                    <Col>
                    <Card className="shadow p-3 mb-5 bg-white rounded Card1">
                        
                        <Card.Body>
                            <Card.Text>
                            <Spinner animation="border" variant="primary" />
                            <Card.Title>Custom Application Development Services</Card.Title>
                                We rely on our technological expertise and specialized industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col> 
                    <Col>
                    <Card className="shadow p-3 mb-5 bg-white rounded Card1">
                    <Card.Body>
                        
                            <Card.Text>
                            <Spinner animation="border" variant="primary" />

                            <Card.Title>App Maintenance Services</Card.Title>
                                Our application maintenance and modernization services are designed to ensure the scalability, performance, and sustainability of your entire software infrastructure as your business grows.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="shadow p-3 mb-5 bg-white rounded Card1">
                    <Card.Body>
                            <Card.Text>
                            <Spinner animation="border" variant="primary" />

                            <Card.Title>QA and Software Testing Services</Card.Title>
                                Comprehensive quality assurance is built into our custom software service model, but we can also provide on-demand QA and a suite of functional and usability software tests upon request.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="shadow p-3 mb-5 bg-white rounded Card1">
                    <Card.Body>
                            <Card.Text>
                            <Spinner animation="border" variant="primary" />

                            <Card.Title>API Integration Services</Card.Title>
                                We build and implement custom APIs for all breeds of applications, helping to add functionality to your software systems and facilitate communication between your apps and others.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layouts1

