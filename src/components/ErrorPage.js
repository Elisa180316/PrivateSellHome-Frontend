import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ErrorPage = () => {
  return (
   <Container
   style={{
    backgroundImage: "url(https://thumbs.dreamstime.com/z/atronauta-nello-spazio-cosmico-55167868.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    maxWidth: "1400px",
    height: "712px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
   <div style={{ color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h1 style={{ fontSize: '6rem' }}>404</h1>
  <h3 style={{ fontSize: '2rem', display: 'inline-block', marginTop: '0.5rem' }}>
    Lost in <span style={{ textDecoration: 'line-through' }}>space</span> PrivateSellHome?
    Hmm, looks like that page doesn't exist
  </h3>
  <Link className='mt-4' to="/">
    <Button variant="primary">Return Home</Button>
  </Link>
</div>



   </Container>
  )
}

export default ErrorPage