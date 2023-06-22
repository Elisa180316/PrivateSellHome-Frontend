import React from 'react'
// import useDecodedSession from "../../hook/useDecodedSession";
// import useSession from '../../hook/useSession';
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import '../styles/navBar.css'

const NavBar = () => {
    // const actualSeller = useDecodedSession()
    // const test = useSession();
  return (
    <Navbar className='d-flex'>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand className='ms-5'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.XYknhHUph_qyJfVfGFN-HAEsDH&pid=Api&P=0&h=100" alt=""/>
      </Navbar.Brand>
    </Container>
  
    <Container className='d-flex align-items-end'>
      <div className='ms-auto'>
        <Link to='/signup'>
          <button className='btn btn-primary me-2'>Register</button>
        </Link>
        <Link to='/signin'>
          <button className='btn btn-primary me-5'>Login</button>
        </Link>
      </div>
    </Container>
  </Navbar>
  )
}

export default NavBar

{/* {actualSeller && (
        <NavDropdown align="end" title= {
          <>
          <img src="https://picsum.photos/55/55" alt=""/>
          </>

        }
        id="basic-nav-dropdown"  className="ms-auto">
          {actualSeller && <NavDropdown.Item href="#action/3.3">Benvenuto {actualSeller.username + ' ' }</NavDropdown.Item>}
          <NavDropdown.Item href="#action/3.1">Profilo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Impostazioni</NavDropdown.Item>
        </NavDropdown>
      )} */}