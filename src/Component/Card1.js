import React from 'react'
import  {Card,Button,Container,Row,Col}  from 'react-bootstrap';

function Card1() {
    return (
        <div>
            <br />
            
        <Container>
          <Card className="card1"> 
        
          <Card.Header>Card title</Card.Header>
          <Card.Body>

          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
 
        </Container>
        </div>
    )
}

export default Card1
