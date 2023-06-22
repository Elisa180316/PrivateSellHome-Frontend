import React from "react";
import "../styles/latestProperties.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../utilities/fetch";
import { Container } from "react-bootstrap";
import img from "../assets/appartment1.jpg";
import person from "../assets/person.jpg";
import {Fabed, FasquareFull} from 'react-icons'

const LatestProperties = () => {
  //States//
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
      fetchLatest();
    };
  }, []);

  return (
    // Title
    <>
      <Container>
        <h3>Check out the latest properties</h3>
      </Container>

      {/*  Latest Properties */}

      <Container>
        {latestProperties?.map((property) => (
          <div key={property._id}>
            <Link to={`/propertyDetail/${property._id}`}>
              <img src={img}alt = "" />
            </Link>
            <span>{property?.price}Price</span>
            <img src = {person}/>
            <span> {property?.bedrooms}Bedrooms </span>
            <span>{property?.squaremeters}Square Meters </span>
            <span>{property?.description}Description</span>
          </div>
        ))}
      </Container>
    </>
  );
};

export default LatestProperties;
