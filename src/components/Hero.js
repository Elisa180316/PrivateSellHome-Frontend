import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  //States//
  const [type, setType] = useState("apartment");
  const [continent, setContinent] = useState("0");
  const [priceRange, setPriceRange] = useState("0");
  const navigate = useNavigate();

  //Search function//

  const handleSearch = () => {
    //Nav to properties//
    navigate(
      `/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`
    );
  };

  return (
    <>
      {/* Titles */}
      <Container className="d-flex justify-content-center mt-3 fade-in">
        <h2 className="text-center text-lg-start">
          Buy and sell a private home without commission
        </h2>
      </Container>
      <Container className="d-flex justify-content-center mt-3 fade-in1">
        <h5 className="text-center text-lg-start">
          Search among the best properties
        </h5>
      </Container>

      {/* Select type property */}
      <Container className="d-flex justify-content-center mt-3 hero-container">
        <Form className="d-flex flex-wrap justify-content-center">
          <InputGroup className="me-3 mb-2" style={{ width: "50%" }}>
            <Form.Select
              onChange={(e) => setType(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select properties' type
              </option>
              <option value="apartment" size="4">
                Apartment
              </option>
              <option value="single" size="4">
                Single Home
              </option>
              <option value="villa" size="4">
                Luxury Villa
              </option>
            </Form.Select>
          </InputGroup>
          {/* Select price property */}
          <InputGroup className="me-3 mb-2" style={{ width: "50%" }}>
            <Form.Select
              onChange={(e) => setPriceRange(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select Price Range
              </option>
              <option value="0">0-100,000</option>
              <option value="1">100,000-200,000</option>
              <option value="2">200,000-300,000</option>
              <option value="3">300,000-400,000</option>
              <option value="4">400,000-500,000</option>
            </Form.Select>
          </InputGroup>
          {/* Select where property */}
          <InputGroup className="me-3 mb-2" style={{ width: "51%" }}>
            <Form.Select
              onChange={(e) => setContinent(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Where are you looking for?
              </option>
              <option value="0">Milano</option>
              <option value="1">Lucca</option>
              <option value="2">Firenze</option>
              <option value="3">Roma</option>
              <option value="4">Napoli</option>
              <option value="5">Torino</option>
            </Form.Select>
          </InputGroup>

          <InputGroup className="ms-3 mb-2" style={{ width: "55%" }}>
            <Button>
              <AiOutlineSearch onClick={handleSearch} />
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
};

export default Hero;