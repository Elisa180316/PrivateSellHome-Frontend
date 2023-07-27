import React, { useState, useEffect } from "react";
import { request } from "../utilities/fetch";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { Card, Container, Row, Col } from "react-bootstrap";
import single from "../assets/single.jpg";
import "../styles/latestProperties.css";

const LatestProperties = () => {
  //State//
  const [latestProperties, setLatestProperties] = useState([]);

  //Fetch latest properties//
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const data = await request("/property/find/latest", "GET");
        setLatestProperties(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchLatest();
  }, []);

  return (
    <>
      <Container>
        <h5 className="text-center" style={{ fontSize: "28px" }}>
          Latest Properties
        </h5>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col
            xs={6}
            md={6}
            lg={12}
            className="d-flex flex-wrap gap-3 mt-3 mb-5"
          >
            {latestProperties?.map((property) => (
              <Card
                className="property-cards"
                key={property._id}
                style={{
                  width: "18rem",
                  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                }}
              >
                <Link to={`/propertyDetail/${property._id}`}>
                  <Card.Img
                    style={{ height: "200px" }}
                    src={
                      property.img
                        ? `https://privatesellhome.onrender.com/images/${property.img}`
                        : single
                    }
                    alt=""
                  />
                  <div className="overlay-details">Details</div>
                </Link>
                <Card.Body>
                  <Card.Title>Title: {property?.title}</Card.Title>
                  <Card.Text>Price $: {property?.price}</Card.Text>
                  <Card.Text>Location: {property?.continent}</Card.Text>
                  <Card.Text>
                    Bedrooms: {property?.bedrooms} <FaBed />
                  </Card.Text>
                  <Card.Text>Squaremeters: {property?.squaremeters}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestProperties;