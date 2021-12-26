import React from "react";
import { Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import ReactTilt from "react-parallax-tilt";
import { useRouter } from 'next/router';
import { cardGrid, cardGridItem, cardGridItemTitle, cardGridItemContent } from './grids.module.css';

 function Grids() {
  const router = useRouter();
  const goToContact = () => {
    router.push('/contact');
  }

  const gotToOrders = () => {
    router.push('/order-details');
  }

  const gridItems = [
    {
      id: "contactUs",
      title: "Contact Us",
      content: (
        <>
          <Button variant="success">
            <FaEnvelope />
            Contact Us
          </Button>
        </>
      ),
      onClick: goToContact

    },
    {
        id: "order",
        title: "Order",
        content: (
          <>
            Where is my
            <br />order ?
          </>
        ),
        onClick: gotToOrders
      }

  ];

  return (
    <>
      <div className={cardGrid}>
        {gridItems.map((item, index) => {
          return (
            <div onClick={item.onClick} data-testid={item.id} key={`${item.id}-${index}`}>
              <ReactTilt  scale={1.1} tiltEnable={false} key={item.id}>
                <div className={cardGridItem}>
                  <div className={cardGridItemTitle}>{item.title}</div>
                  <div className={cardGridItemContent}>{item.content}</div>
                </div>
              </ReactTilt>
            </ div>
          );
        })}
      </div>
    </>
  );
}

export default Grids;
