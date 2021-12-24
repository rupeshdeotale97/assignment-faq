import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
const CardList = ({ cardInfo }) => {
  return (
    <Container>
      <Row className="m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="http://via.placeholder.com/640x360
" />
          <Card.Body>
            <Card.Title>Order Rf no. {cardInfo.reference}</Card.Title>
            <Card.Text>{cardInfo.date}</Card.Text>
            <Card.Text>{cardInfo.delivered}</Card.Text>
            <Button variant="primary">{cardInfo.cost}</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CardList;
