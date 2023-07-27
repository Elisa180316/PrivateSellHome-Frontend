import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import '../styles/main.css'

export const Main = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mt-5 mb-3">
        <h2 className="text-center">
          The leading portal in private property listings
        </h2>
      </Container>
      <div className="carousel-container" >
      <Carousel className="ms-5 me-5" >
        <Carousel.Item >
          <img style={{ borderRadius: '20px',  maxHeight: '700px' }}
            className="d-block w-100  "
            src="https://www.avantgardeconstruct.it/wp-content/uploads/2018/05/Ville-prefabbricate-di-lusso-61.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>The house of your dreams</h3>
          <p>Find the villa of your dreams without paying any fees</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '10px', maxHeight: '700px' }}
            className="d-block w-100  "
            src="https://www.cercobaita.com/wp-content/uploads/2020/10/baita-afitto-Casapendola.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Mountain Houses</h3>
          <p>Find your home in the mountains for total relaxation without fees</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '10px', maxHeight: '700px' }}
            className="d-block w-100 "
            src="https://www.baglioridisicilia.com/wp-content/uploads/2018/05/VI78289.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Houses with pool</h3>
          <p>Find your house with pool without any fees</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '10px', maxHeight: '700px' }}
            className="d-block w-100 "
            src="https://i0.wp.com/blog.casaomnia.it/wp-content/uploads/2020/05/casa-al-mare-copertina.jpg?w=623&ssl=1"
            alt="Fourth slide"
          />
          <Carousel.Caption>
          <h3>Seafront Houses</h3>
          <p>Find your house a stone's throw from the sea without any fees</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '10px', maxHeight: '700px' }}
            className="d-block w-100 "
            src="https://www.toscana.info/wp-content/uploads/sites/123/lucca-hd.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
          <h3>Houses in the city</h3>
          <p>Find the home of your dreams in the center near all amenities without any fees</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <Container className="mt-5 mb-5">
        <h3 className="mb-5">
          Save yourself the agency commissions too! Sell and rent your home
          privately.
        </h3>
        <Row>
          <Col>
            <img className="mb-3 ms-5" src="https://www.casadaprivato.it/images/iconset/linear/insert.png" />
            <h6>Insert your ad for free</h6>
            <span>
              In less than a minute you publish it and you can edit and delete
              it whenever you want. Unlimited ad duration.
            </span>
          </Col>
          <Col>
            <img className="mb-3 ms-5" src="https://www.casadaprivato.it/images/iconset/linear/planet-earth.png" />
            <h6>Maximum visibility on Google</h6>
            <span>
              Get the best visibility and ranking on search engines. More than
              4,000,000 page views every month.
            </span>
          </Col>
          <Col>
            <img className="mb-3 ms-5" src="https://www.casadaprivato.it/images/iconset/linear/contact.png" />
            <h6>Contacts and Privacy guaranteed</h6>
            <span>
            Receive contacts privately with our chat, without showing email and phone.
            </span>
          </Col>
          <Col>
            <img className="mb-3 ms-5" src="https://www.casadaprivato.it/images/iconset/linear/money.png" />
            <h6 className="last">No fixed costs</h6>
            <span>
            If you sell or rent with our service, no commission is required.
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;