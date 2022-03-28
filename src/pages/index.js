import React from 'react';
import { Card } from 'react-bootstrap';
import CP from '../cp.png';
const Home = () => {
  return (
    <div className="bdy">
      <div className="title">
        <h1>Welcome to my Portfolio</h1>
      </div>
      <div className="cardd">
        <Card style={{ width: '18rem' }}>
          <Card.Img roundedCirclevariant="top" src={CP} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


    </div>
  );
};

export default Home;