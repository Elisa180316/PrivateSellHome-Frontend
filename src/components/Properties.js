import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { request } from "../utilities/fetch";
import { arrPriceRanges } from "../utilities/idxToPriceRange";
import { continentToIdx } from "../utilities/idxToContinent";
import { FaBed } from "react-icons/fa";
import Layout from "../components/Layout";
import { Card, Container, Button, Form, Row, Col } from "react-bootstrap";
import '../styles/properties.css'

const Properties = () => {
  const { user } = useSelector((state) => state.auth);
  //States//
  // all the properties fetched from the server and is initially set as an empty array.
  const [allProperties, setAllProperties] = useState([]);
  // the properties filtered based on user selections and is initially set as an empty array.
  const [filteredProperties, setFilteredProperties] = useState([]);
  // form state, which stores the user's selections for property type, price range, and area. It is initially set as `null`.
  const [state, setState] = useState(null);
  // It extracts the query parameters from the current URL using the `useLocation` hook and `search` property. The query parameters are expected to be in the format `?param1=value1&param2=value2`.
  const query = useLocation().search.slice(1); //Slice1 to cancel the ?
  // It splits the query string into an array of individual parameters.
  const arrQuery = query.split("&");
  const navigate = useNavigate();

  // It is defined as an event handler for updating the `state` variable when the user selects different options in the form. It is triggered by the `onChange` event of the form inputs. It uses the spread syntax to preserve the previous state and update the specific property with the new value.
  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // console.log(useLocation().search.slice(1).split('&'))

  //Fecth for all the properties//

  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request("/property/getAll", "GET");
      setAllProperties(data);
    };
    fetchAllProperties();
  }, []);

  //Fetch query:
  // used to handle the query parameters and filter the properties accordingly. It runs when the `allProperties` or `arrQuery` variables change. Inside the hook, it checks if there are query parameters (`arrQuery`) and if the `allProperties` have been fetched. It then processes the query parameters and formats them into an object called `formattedQuery`. The last parameter in the `arrQuery` is used to assign `formattedQuery` to the `state` variable. Finally, the `handleSearch` function is called with the `formattedQuery` to filter the properties based on the query parameters.
  useEffect(() => {
    if (arrQuery && allProperties?.length > 0 && state === null) {
      let formattedQuery = {};

      arrQuery.forEach((option, idx) => {
        // console.log(option.split("="))
        const key = option.split("=")[0];
        const value = option.split("=")[1];

        formattedQuery = { ...formattedQuery, [key]: value };

        //Last idex formatted query is assigned to the state
        if (idx === arrQuery.length - 1) {
          // console.log(formattedQuery)
          setState(formattedQuery);
          handleSearch(formattedQuery);
        }
      });
    }
  }, [allProperties, arrQuery]);

  // It's defined to filter the properties based on the selected options in the form or the provided `param` object. It first checks whether `param.nativeEvent` exists to determine whether it is called by an event or directly with a parameter. It then filters the `allProperties` array based on the selected property type, continent, and price range. The filtered properties are stored in the `filteredProperties` state variable. Additionally, it constructs a query string (`queryStr`) based on the selected options and navigates to the new URL with the updated query string using the `navigate` function from `react-router-dom`. Finally, it updates the `filteredProperties` state variable with the filtered properties.
  const handleSearch = (param = state) => {
    //If/else to pass the formatted or event//
    let options;
    if (param?.nativeEvent) {
      options = state;
    } else {
      options = param;
    }

    const filteredProperties = allProperties.filter((property) => {
      //If the options.priceRange is 1 it get the index 1 (the second element) in the array of arrPriceRange
      const priceRange = arrPriceRanges[options.priceRange];
      const minPrice = Number(priceRange.split("-")[0]);
      const maxPrice = Number(priceRange.split("-")[1]);
      const continent = continentToIdx(property.continent);
      console.log(property.price, minPrice);
      if (
        property.type === options.type &&
        continent === Number(options.continent) &&
        property.price >= minPrice &&
        property.price <= maxPrice
      ) {
        return property;
      }
    });
    const queryStr = `type=${options.type}&continent=${options.continent}&priceRange=${options.priceRange}`;

    navigate(`/properties?${queryStr}`, { replace: true });
    setFilteredProperties(filteredProperties);
  };

  return (
    <Layout>
      <div>
        <div>
        <Container className="mt-5 mb-5">
    <Row className="justify-content-center align-items-center">
      <Col xs={12} md={6} lg={4} className="mb-3">
        <Form.Select
          className="me-md-3"
          value={state?.type}
          name="type"
          onChange={handleState}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Select properties' type
          </option>
          <option value="apartment">Apartment</option>
          <option value="single">Single Home</option>
          <option value="villa">Luxury Villa</option>
        </Form.Select>
      </Col>

      <Col xs={12} md={6} lg={4} className="mb-3">
        <Form.Select
          className="me-md-3"
          value={state?.priceRange}
          name="priceRange"
          onChange={handleState}
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
      </Col>

      <Col xs={12} md={6} lg={4} className="mb-3">
        <Form.Select
          className="me-md-3"
          value={state?.continent}
          name="continent"
          onChange={handleState}
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
      </Col>

      <Col xs={12} className="mb-3 text-center d-none d-md-block">
        <Button onClick={handleSearch}>Search</Button>
      </Col>

      <Col xs={12} className="text-center d-md-none">
        <Button onClick={handleSearch}>Search</Button>
      </Col>
    </Row>
  </Container>

          {filteredProperties?.length > 0 ? (
            <>
              <Container className="text-center mb-3">
                <h2 className="text-primary">Selected properties</h2>
                <h5 className="text-primary mb-3">Property you may like</h5>

                <Container fluid>
                  <Row className="justify-content-center align-items-center">
                    {filteredProperties.map((property) => (
                      <Col
                        xs={10}
                        md={6}
                        lg={12}
                        key={property._id}
                        className="mb-4"
                      >
                        <Card
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                          }}
                        >
                          <Link to={`/propertyDetail/${property._id}`}>
                            <Card.Img
                              src={`http://localhost:5050/images/${property?.img}`}
                              alt=""
                              style={{ height: "500px" }}
                            />
                             <div className="overlay-details">Details</div>
                          </Link>
                          <Card.Body>
                            <Card.Title className="mt-3 mb-3">
                              Title: {property.title}
                            </Card.Title>
                            <Card.Text>Type: {property.type}</Card.Text>
                            <Card.Text>Price $: {property.price}</Card.Text>
                            <Card.Text>
                              Bedrooms: {property.bedrooms} <FaBed />
                            </Card.Text>
                            <Card.Text>
                              Squaremeters: {property.squaremeters}
                            </Card.Text>
                           
                            {!user ? (
                <span style={{ color: 'blue',  fontWeight: 'bold'}}>
                  Please <Link style={{textDecoration: 'none'}} to="/signin">Log in</Link> or <Link style={{textDecoration: 'none'}}  to="/signup">Register</Link> to contact the seller.
                </span>
              ) : null}
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Container>
            </>
          ) : (
            <Container className="text-center" style={{ height: "225px" }}>
              <h1 className="mt-5 mb-5 text-primary">
                
                We have no properties with these options
              </h1>
            </Container>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Properties;