import React from "react";
import Layout from "./Layout";
import { Container } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Layout>
      <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary">
          Privatesellhome is not a real estate agency.
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
        <p>
          Privatesellhome's mission is to inform its users of the process that
          must be followed in order to be able to sell or buy a house between
          private individuals in complete freedom, security and tranquillity.
          <strong>All without any commission or brokerage costs.</strong>
          The aspect to consider is the possibility of having professional
          figures available for every need. For example, an architect will be
          able to solve many of the more delicate urban planning aspects that
          can constrain the sale. Just as a lawyer will be able to analyze a
          purchase proposal that is drafted correctly and completely, protecting
          both the seller and the buyer. All without the onerous costs of a
          mediation which, in fact, would in any case leave you uncovered by the
          burden of having to resolve these technical problems with the
          professionals we have just mentioned.
        </p>
      </Container>
    </Layout>
  );
};

export default WhyUs;