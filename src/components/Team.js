import React from 'react'
import Layout from './Layout'
import { Container } from "react-bootstrap";

const Team = () => {
  return (
    <Layout>
       <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary">
        TECHNICAL TEAM
        </h1>
      </Container>
      <Container
        style={{
          width: "600px",
          fontSize: "18px",
          lineHeight: "2",
          textAlign: "justify",
        }}
      >
<p>PRIVATE HOUSES makes use of a technical team of professionals specialized in the real estate sector, who can meet you at any time and for any need, both in person and online.

If we have chosen to sell, buy or rent a house between private individuals, we may need the advice or intervention of one or more professional figures to help us, advise us, during some key moments of the transaction.

Our services are independent from the publication of an advertisement on the Privatesellhome portal. Our technical team is available for all registered users, not only for those who sell, buy or rent a house. </p></Container>
    </Layout>
  )
}

export default Team