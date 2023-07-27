import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../styles/newsletter.css'


const Newsletter = () => {
  return (
    
      
        <>
        <Container className='d-flex justify-content-center mt-5 mb-4'>
        <h5>Sign up to our newsletter</h5>
        </Container>
        <Container className='d-flex justify-content-center'>
          
          <img className="me-3"src="https://thumbs.dreamstime.com/z/lettera-della-busta-del-email-7551391.jpg" width="50" height="50"/>
        
        <input className="me-3" type="email" placeholder='Type your email...' style= {{height: "30px", marginTop: "10px"}}/>
        <Button className='bg-primary pb-3 ps-1 pe-1 news-btn' style= {{height: "35px", marginTop: "10px", borderRadius:"5px"}}>Subscribe</Button>
        </Container>
        </>
      
   
  )
}

export default Newsletter