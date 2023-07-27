import React from "react";
import Layout from "./Layout";
import { Container } from "react-bootstrap";

const Experience = () => {
  return (
    <Layout>
      <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary">Our experience</h1>
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
          PrivateSellHome was launched in 2001 as the first online platform for
          buying and selling real estate between private individuals in Italy,
          immediately choosing to move away from the stereotype of selling
          through a real estate agency. We were the forerunners of a new idea of
          "doing real estate" by launching a completely different project than
          usual. From 2001 to today, technology has allowed the evolution of new
          approaches in the sales market and the online offers have multiplied
          dramatically. Today CASE TRA PRIVATI strongly relaunches unique
          services aimed at the needs of a public increasingly attentive to
          quality and professional responses. We continue to pursue the goal of
          independent and aware real estate buying and selling between private
          individuals.{" "}
        </p>
      </Container>
    </Layout>
  );
};

export default Experience;