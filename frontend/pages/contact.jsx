import React, { useState } from "react";
import { InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import Layout from "../components/layout";
import {
  emailContainer,
  contactWrapper,
  error,
} from "../assets/css/contact.module.css";
import { toast } from "react-toastify";
import updatePageView from "../utils/updatePageView";
import API_URL from "../constants/costants";
import ClientCaptcha from "react-client-captcha";
const ContactPage = ({ orders }) => {
  const [orderReference, setOrderReference] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [captchaCode, setCaptcha] = useState();
  const [matchCaptchaCode, setMatchCaptchaCode] = useState();
  const [showError, setShowError] = useState(false);

  const isEnabled = orderReference && name && phone && email && messageBody && matchCaptchaCode;

  const sendEmail = () => {
    if (captchaCode !== matchCaptchaCode) {
      setShowError(true);
    } else {
      setShowError(false);
      setOrderReference('');
      setName('');
      setEmail('');
      setPhone('');
      setMessageBody('');
      toast.success("Success! Your message was sent.");
    }
  };

  return (
    <Layout>
      <div className={contactWrapper}>
        <h1>Contact Us</h1>
        <div className={emailContainer}>
          <label htmlFor="nameAuthor">Order</label>
          <InputGroup className="mb-3">
            <Dropdown variant="light">
              <Dropdown.Toggle
                className="pl-5 pr-5"
                data-testid="dropdown-toggle"
              >
                {orderReference
                  ? orderReference
                  : "--- Select order reference ---"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {orders.map(({ reference }) => (
                  <Dropdown.Item
                    key={reference}
                    data-testid="dropdown-item"
                    onClick={() => setOrderReference(reference)}
                  >
                    {reference}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
          <label htmlFor="nameAuthor">Name</label>
          <InputGroup className="mb-3">
            <FormControl
              id="nameAuthor"
              data-testid="nameAuthor"
              placeholder="Your name or alias..."
              autoComplete="off"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </InputGroup>
          <label htmlFor="phoneAuthor">Phone</label>
          <InputGroup className="mb-3">
            <FormControl
              id="phoneAuthor"
              data-testid="phoneAuthor"
              placeholder="Your Phone..."
              autoComplete="off"
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
            />
          </InputGroup>
          <label htmlFor="emailAuthor">Email</label>
          <InputGroup className="mb-3">
            <FormControl
              id="emailAuthor"
              placeholder="Your email..."
              autoComplete="off"
              value={email}
              data-testid="emailAuthor"
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </InputGroup>

          <label htmlFor="emailBody">Message</label>
          <InputGroup className="mb-3">
            <FormControl
              as="textarea"
              id="emailBody"
              value={messageBody}
              placeholder="Message body..."
              rows="5"
              data-testid="emailBody"
              onChange={(evt) => setMessageBody(evt.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="input-row captcha-holder">
              <ClientCaptcha
                captchaCode={setCaptcha}
                chars="ABCDEFGHJK@"
                charsCount={6}
                width={300}
                height={100}
                fontSize={45}
                backgroundColor="#fff"
                fontColor="green"
                data-testid="captcha"
              />
              <input type="hidden" value={captchaCode} />
            </div>
          </InputGroup>
          <InputGroup className="mb-5">
            <FormControl
              id="captchaAuthor"
              placeholder="Enter above Captcha..."
              autoComplete="off"
              value={matchCaptchaCode}
              data-testid="captchaAuthor"
              onChange={(evt) => setMatchCaptchaCode(evt.target.value)}
            />

            {showError && <p className={error}>Code is incorrect!</p>}
          </InputGroup>
        </div>
        <Button disabled={!isEnabled} variant="success" onClick={sendEmail}>
          <FaPaperPlane />
          Send
        </Button>
      </div>
    </Layout>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  await updatePageView("order-details");
  const res = await fetch(`${API_URL}/orders`);
  const orders = await res.json();
  return {
    props: {
      orders,
    },
  };
}

export default ContactPage;
