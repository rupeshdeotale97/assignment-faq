import React from "react";
import { Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import ReactTilt from "react-parallax-tilt";
import { cardGrid, cardGridItem, cardGridItemTitle, cardGridItemContent } from './cards.module.css';

 function Cards() {
  const gridItems = [
    {
      id: "contactUs",
      title: "Contact Us",
      content: (
        <>
          <Button variant="success" href="/contactus">
            <FaEnvelope />
            Contact Us
          </Button>
        </>
      )
    },
    {
        id: "order",
        title: "Order",
        content: (
          <>
            Where is my
            <br />order ?
          </>
        )
      },
  ];

  return (
    <>
      <div className={cardGrid}>
        {gridItems.map((item) => {
          return (
            <>
              <ReactTilt scale={1.1} tiltEnable={false} key={item.id}>
                <div className={cardGridItem}>
                  <div className={cardGridItemTitle}>{item.title}</div>
                  <div className={cardGridItemContent}>{item.content}</div>
                </div>
              </ReactTilt>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
