import React, { useEffect, useState } from "react";
import { FaBed } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { request } from "../utilities/fetch";
import ModifyMyProperty from "./ModifyMyProperty";
import DeleteMyProperty from "./DeleteMyProperty";


const MyProfile = () => {
  
  const { user, token } = useSelector((state) => state.auth);
  //States//
  const [listedProperties, setListedProperties] = useState([]);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //Fetch property by user's id//
  const fetchListedProperties = async () => {
    try {
      const options = {
        Authorization: `Bearer ${token}`,
      };
      const data = await request(
        `/property/find/my-properties`,
        "GET",
        options
      );
      setListedProperties(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListedProperties();
  }, []);

  
  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center  mb-5">
        {listedProperties?.length > 0 && (
          <h2 className="mt-5 mb-3 text-primary">Your Properties</h2>
        )}
      </Container>
      <Container className="d-flex justify-content-center align-items-center flex-column mb-5">
      <Row className="justify-content-center align-items-center">
        {listedProperties?.length > 0 ? (
          listedProperties?.map((listedProperty) => (
            <Col xs={10}
            md={6}
            lg={12}
            
            className="mb-4"
            key={listedProperty._id}
            >
              <Card
                className="mb-5"
                style={{
                  
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <Link to={`/propertyDetail/${listedProperty._id}`}>
                  <Card.Img
                    src={`http://localhost:5050/images/${listedProperty?.img}`}
                    alt=""
                  />
                </Link>
                <Card.Body>
                  <Card.Title className="mt-3 mb-3">
                    Title: {listedProperty.title}
                  </Card.Title>
                  <Card.Text>Type: {listedProperty.type}</Card.Text>
                  <Card.Text>Price $: {listedProperty.price}</Card.Text>
                  <Card.Text>
                    Bedrooms: {listedProperty?.bedrooms} <FaBed />
                  </Card.Text>
                  <Card.Text>
                    Squaremeters: {listedProperty?.squaremeters} sq. meters
                    
                  </Card.Text>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Description: {listedProperty?.description}
                  </Card.Text>
                  <Link to={`/editProperty/${listedProperty._id}`}>
                    <Button>Modify</Button>
                  </Link>
                  {showModal && (
                    <ModifyMyProperty
                      id={listedProperty._id}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  )}
                  <Link to={`/deleteProperty/${listedProperty._id}`}>
                    <Button className="ms-2 btn-danger">Delete</Button>
                  </Link>
                  {showModal && (
                    <DeleteMyProperty
                      id={listedProperty._id}
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  )}
                </Card.Body>
              </Card>
              
              </Col>
              
          ))
        ) : (
          <h2>You have no listed properties</h2>
        )}
        </Row>
      </Container>
      {error && <div>There was an error!</div>}
    </Layout>
  );
};

export default MyProfile;