import React from "react";
import Layout from "./Layout";
import { Container } from "react-bootstrap";

const Innovation = () => {
  return (
    <Layout>
      <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary">Innovation</h1>
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
          PRIVATE HOUSES has produced a series of absolutely new and innovative
          services to help its users in the sale, purchase or rental of a
          property. The CASE AMONG PRIVATE user can decide when and to what
          extent to get help. You can simply start with the free insertion of
          your ad (following our guidelines for a TOP Ad), how to take advantage
          of new tools and opportunities for a complete coaching. The
          possibility of making your ad Optionable by presenting it more
          captivating and acquiring greater free visibility is new and original.
        </p>
      </Container>
    </Layout>
  );
};

export default Innovation;