import React from 'react'
import Layout from './Layout'
import { Container, Row, Col } from "react-bootstrap";

const Evaluation = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
        <img src="https://www.casetraprivati.it/img/pages/valutazione-online-professionale-immobile.webp"
        style={{ maxWidth: "100%" }}/>
        </Col>
        <Col xs={12} md={6} className="mt-3 mt-md-0">
            <h3 className="text-primary">
             
            PROPERTY EVALUATION ONLINE OR IN PRESENCE
            </h3>
            <p>
The valuation of a property, whether it's an apartment, a house or land or a shop, is essential to sell immediately and at the right price.
When you decide to sell a house, the correct valuation of the property is perhaps the most important and delicate step. A wrong price represents 60% of the reasons why a sale does not close.

Our professional property valuation will look at the following factors:

Location
Floor plan and surfaces
Cadastral survey
The coefficients of merit (the plan, the conditions, the exposure, etc.)
Market trend and databases (OMI; Real Estate Exchange)
Comparison with other properties for sale in the area
Check with dedicated software
BEE. (Energy Performance Certificate)
The "online property valuation" will be performed by one of our expert technicians in real estate valuations.

You will only have to send us a copy of the updated cadastral plan of the property (if you don't have it, you can send a copy of an identity document and tax code to the editors and sign the proxy document that we will send you) with two or three photos illustrating , from different points of view, every room in your home. It is also important to send some photos of the entrance, the stairwell and, if present, the private or common outdoor spaces.

A few days after receiving the material, since it is impossible to make an immediate accurate estimate, you will receive the result of the professional real estate estimate by e-mail.

Following the purchase of the service, send the requested material to our e-mail address, remembering to insert a telephone number. </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Evaluation