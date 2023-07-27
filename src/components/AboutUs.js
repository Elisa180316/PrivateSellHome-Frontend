import React from "react";
import Layout from "./Layout";
import { Container } from "react-bootstrap";
import '../styles/aboutUs.css'

const AboutUs = () => {
  return (
    <Layout>
      <div>
      <Container className="text-center">
        <h1 className="mt-5 mb-3 text-primary">AboutUs</h1>
      </Container>
      <Container className="custom-container">
        <p>
          We are the first Community dedicated to those who sell, rent and buy a house without commission. 
          We were born in 2020 after having created and edited our first Community, focusing on private individuals to
          provide them with useful tools to manage their own buying, selling and renting independently. We are a site of
          Real Estate Announcements, Real Estate Blog full of articles dedicated to real estate. We already have over
          30,000 members of our social communities, over 200 articles on our blog and several real estate announcements
          on our portal. 15 private Facebook communities, 15 dedicated pages created with the aim of informing you daily
          about news in the real estate sector. We are present on the main reference social networks Facebook, LinkedIn,
          Instagram and Youtube. Our site had a growth of over 410% from 2020 to 2022. Do you want to get in touch with us? info@privatesellhome.it
        </p>
      </Container>
    </div>
    </Layout>
  );
};

export default AboutUs;