import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { request } from "../utilities/fetch";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Layout from "../components/Layout";
import { Card, Container, Button, Form } from "react-bootstrap";

const PropertyDetail = () => {
  const { user } = useSelector((state) => state.auth);

  //States//
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [decription, setDescription] = useState("");
  const [fromEmail, setFromEmail] = useState(user?.email);
  const [fromUsername, setFromUsername] = useState(user?.username);
  const [toEmail, setToEmail] = useState(propertyDetail?.seller.email);
  const { id } = useParams();
  const formRef = useRef();

  //Process.env to send mail//

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  console.log(templateId, serviceId, publicKey);

  //Fecth details//
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/property/find/${id}`, "GET");
        setPropertyDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  // console.log(propertyDetail)

  //Function to close the form//
  const handleCloseForm = () => {
    setShowForm(false);
    setTitle("");
    setDescription("");
  };

  //Function to contact the seller (email)

  const handleContactSeller = async (e) => {
    e.preventDefault();
    //Send mail with emailjs
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Layout>
        <Container
          className="mt-5 mb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              width: "60rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Card.Img
              src={`https://privatesellhome.onrender.com/images/${propertyDetail?.img}`}
              style={{ height: "500px" }}
            />

            <Card.Body>
              <Card.Title>Title: {`${propertyDetail?.title}`}</Card.Title>

              <Card.Text>Type: {`${propertyDetail?.type}`}</Card.Text>
              <Card.Text>Location: {`${propertyDetail?.continent}`}</Card.Text>
              <Card.Text>Price $:{`${propertyDetail?.price}`}</Card.Text>
              <Card.Text>
                {" "}
                Bedrooms:
                {propertyDetail?.bedrooms} <FaBed />
              </Card.Text>
              <Card.Text>
                Squaremeters: {propertyDetail?.squaremeters}{" "}
              </Card.Text>
              <Card.Text style={{ textAlign: "justify" }}>
                Description: {`${propertyDetail?.description}`}
              </Card.Text>

              {user ? (
              <>
                <Button onClick={() => setShowForm(true)}>
                  Contact seller
                </Button>

                {showForm && (
                  <div onClick={handleCloseForm}>
                    <div onClick={(e) => e.stopPropagation()}>
                      <h2 className="mt-3">Send an email to seller</h2>
                      <Form onSubmit={handleContactSeller} ref={formRef}>
                        <Form.Group>
                          <Form.Control
                            className="mb-3"
                            defaultValue={fromEmail}
                            onChange={(e) => setFromEmail(e.target.value)}
                            type="text"
                            placeholder="My email"
                            name="from_email"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            className="mb-3"
                            defaultValue={fromUsername}
                            onChange={(e) => setFromUsername(e.target.value)}
                            type="text"
                            placeholder="My username"
                            name="from_username"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            className="mb-3"
                            defaultValue={propertyDetail?.seller.email}
                            type="email"
                            placeholder="Seller email"
                            name="to_email"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            className="mb-3"
                            type="text"
                            placeholder="Title"
                            name="from_title"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Text your message here"
                            name="message"
                            style={{ textAlign: "left" }}
                          />
                        </Form.Group>

                        <Button type="submit">Send</Button>
                      </Form>

                      <Button className="mt-3" onClick={handleCloseForm}>
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <span style={{ color: 'blue',  fontWeight: 'bold'}}>
              Please <Link style={{textDecoration: 'none'}} to="/signin">Log in</Link> or <Link style={{textDecoration: 'none'}}  to="/signup">Register</Link> to contact the seller.
            </span>
            )}
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default PropertyDetail;