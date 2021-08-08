import React from 'react'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'

function Contactus1() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h3>VEBBOX</h3>
                    <Form.Label ClassName="text-center"> Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</Form.Label>
                    </Col>
                    <Col>
                    <h3>Location</h3>
                    14, Mothilal St, (2nd Floor), Opposite to BSNL office near chennai silks,
Kumbakonam, 612001

info@vebbox.in

+91 8678 980 860
                    </Col>
                    
                    <Col>
                        <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter email" />
                           
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            
                            {/* <Form.Control type="text" placeholder="Message" /> */}
                            <Form.Control as="textarea" rows={3} placeholder="Message" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contactus1
