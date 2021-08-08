import React from 'react'
import {Image,Row,Container,Col} from 'react-bootstrap'
import ecommerce from './images/ecommerce.webp'
import dataanalysis from './images/dataanalysis.jpeg'
import f1 from './images/f1.jpg'
function Products1() {
    return (
        <div>
            <Container>
            <Row>
                
                <Col xs={12} sm={12} md={6}>
                <Image src={dataanalysis} width="400" height="250" rounded />
                </Col>
                <Col xs={12}  sm={12} md={6}>
                <Image src={ecommerce} width="400" height="250" rounded />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12}  sm={12} md={6}>
                <Image src={ecommerce} width="400" height="250" rounded />
                </Col>
                <Col xs={12}  sm={12} md={6}>
                <Image src={dataanalysis} width="400" height="250" rounded />
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Products1
