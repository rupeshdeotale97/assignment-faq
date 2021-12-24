import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

import { emailContainer } from  './contact.module.css';

export const ContactPage = () => {

  sendEmail = () => {
    toast.success("Success! Your message was sent.");
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className={emailContainer}>
        <label htmlFor="emailAuthor">
          Email{" "}
          <span style={{ color: "lightgrey", fontSize: "14px" }}>
            (optional)
          </span>
        </label>
        <InputGroup>
          <FormControl
            id="emailAuthor"
            placeholder="Your email or alias..."
            autoComplete="off"
          />
        </InputGroup>
        <label htmlFor="emailSubject">
          Subject{" "}
          <span style={{ color: "lightgrey", fontSize: "14px" }}>
            (optional)
          </span>
        </label>
        <InputGroup>
          <FormControl
            id="emailSubject"
            placeholder="Message subject..."
            autoComplete="off"
          />
        </InputGroup>
        <label htmlFor="emailBody">
          Body <span style={{ color: "#cc0000", userSelect: "none" }}>*</span>
        </label>
        <InputGroup>
          <FormControl
            as="textarea"
            id="emailBody"
            placeholder="Message body..."
            rows="5"
          />
        </InputGroup>
      </div>
      <Button variant="success" onClick={this.sendEmail}>
        <FaPaperPlane />
        Send
      </Button>
    </>
  );
}
