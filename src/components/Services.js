import React from "react";
import Layout from "./Layout";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <img
              src="https://www.casetraprivati.it/img/pages/affiancamento-contrattuale.webp"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <h3 className="text-primary">CONTRACTUAL COACHING</h3>
            <p>
              If you need help with your home purchase proposal, we can help. If
              you want to face the phases of the negotiation with serenity, we
              offer you: Drafting, verification and registration of the
              preliminary agreement (compromise) with our trusted lawyer (*)
              Drafting, verification, registration and preliminary transcription
              (compromesso) with our trusted notary (*) by sending a request for
              a quote to servizi@casetraprivati.it Deed, by sending a request
              for a quote to the editorial staff servizi@casetraprivati.it (*)
              Choosing between the registration of a preliminary contract by the
              lawyer and a transcript by the notary must be assessed on a
              case-by-case basis, for more information refer to our Talk to Our
              Expert service. After making the payment you will be contacted by
              the professional in charge to define the terms of the service. For
              a quick contact or for more information, write to us at the email
              address: servizi@casetraprivati.it, possibly leaving us your
              telephone number, you will be contacted as soon as possible. To
              optimize the service, let us know the subject of your request in
              the email.
            </p>
          </Col>
        </Row>
      </Container>

      <hr></hr>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <img
              src="https://www.casetraprivati.it/img/pages/parla-nostro-esperto.webp"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <h3 className="text-primary">TALK TO OUR EXPERT </h3>
            <p>
              Selling or buying a house from private individuals is easier and
              safer with the advice of one of our experts Selling, buying or
              renting privately is undoubtedly possible. It is a process that,
              depending on the stages we are in, may need one of the following
              professional figures: Architect (problems of the property from an
              urban planning, cadastral and design point of view) Lawyer
              (contractual problems and to protect the negotiation of all
              aspects related to the real estate universe) Notary (problems of
              succession, mortgages, wills, deeds and donations) If you need a
              quick comparison, referring to one of these issues, you can
              request a phone call to speak to one of our professionals. Within
              48 hours of purchasing the service, you will be contacted by our
              expert, to whom you can immediately explain your question or
              arrange a phone call at another time. The consultation will last
              30 minutes. Once on the purchase page, fill out the form
              specifying the subject of your request. For a quick contact or for
              more information, write to us at the email address:
              servizi@casetraprivati.it, possibly leaving us your telephone
              number, you will be contacted as soon as possible. To optimize the
              service, let us know the subject of your request in the email.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Services;