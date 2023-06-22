import React from 'react'
import '../styles/newsletter.css'
import {Container} from 'react-bootstrap'


export const Newsletter = () => {
  return (
    <>
    <Container className='d-flex justify-content-center mt-3'>
        <h5>Send us your e-mail to get our newsletter with the latest offers</h5>
    </Container>
    <input type="email" placeholder="Type your email here"></input>
    </>
  )
}
