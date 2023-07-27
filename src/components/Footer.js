import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container expand="lg" className='mt-5 justify-content-center footer-container' style={{ backgroundColor: "#66a2f0", height: "250px", maxWidth:"1521px"}}>
      
      <Row className='justify-content-between '>
        <Col className='col'> 
        <ul className="list-unstyled">
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/contactus">Contatti</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/workwithus">Work with us</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/privacyPolicy">Privacy Policy</Link></li>
          </ul>
          </Col>
          <Col className='col'>
          <ul className="list-unstyled">
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/generalTerms">General Terms and Conditions</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/whyUs">Why PrivateSellHome</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/team">Our Team</Link></li>
          </ul>
          </Col>
          <Col className='col'> 
          <ul className="list-unstyled">
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/innovation">Innovation</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/experience">Our experience</Link></li>
            <li style={{ marginTop: "10px", marginBottom: "10px" }}><Link to="/evaluation">Property Evaluation online</Link></li>
          </ul>
          </Col>
      </Row>
    </Container>
  )
}

export default Footer