import React from "react";
import Layout from "./Layout";
import { Container } from "react-bootstrap";

const WorkWithUs = () => {
  return (
    <Layout>
      <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary"> Work with us!</h1>
      </Container>
      <Container style={{ width: "600px" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "2",
            textAlign: "justify",
          }}
        >
          Work with us and you will contribute to the real estate "revolution"
          that Casetraprivati started in 2001. You will forcefully enter a
          unique and exclusive project. You will help redesign the future of
          real estate We are looking for a highly motivated professional figure
          for our staff who will cover the role of: Commercial manager; You can
          choose to enter the world of real estate in a team of expert
          professionals in the sector, develop your career in the commercial
          field or learn to manage one of the technical teams that are being
          formed in the main cities. For information or to leave a CV
          info@privatesellhome.it
        </p>
      </Container>
    </Layout>
  );
};

export default WorkWithUs;