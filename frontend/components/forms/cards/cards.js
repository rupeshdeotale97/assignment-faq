import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
const CardList = ({ cardInfo }) => {
  const getIsDelivered = () => {
    return cardInfo.delivered ? 'Delivered': "Not Delivered";
  }
  return (
    <Container>
      <Row className="m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="http://via.placeholder.com/640x360
" />
          <Card.Body>
            <Card.Title data-testid="order-ref">Order Rf no. {cardInfo.reference}</Card.Title>
            <Card.Text data-testid="order-delivery-status">{getIsDelivered()}</Card.Text>
            <Card.Text data-testid="order-cost">{cardInfo.cost}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CardList;
