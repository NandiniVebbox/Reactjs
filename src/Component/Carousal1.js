import React from 'react'
import {Carousel,Container} from 'react-bootstrap'

import f1 from './images/f1.jpg'
import b1 from './images/b1.jpg'
function Carousal1() {
    return (
        <div>
            <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={b1} width="800" height="400"
                    alt="ok slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={f1} width="800" height="400"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={b1} width="800" height="400"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                </Container>
        </div>
    )
}

export default Carousal1
