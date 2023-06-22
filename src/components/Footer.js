import React from 'react'
import '../styles/footer.css'
import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <>
    <Container>
        <span>Services</span>
        <span>Blog</span>
        <span>News</span>
    </Container>
    <Container>
        <span>© 2023 - LaboWeb S.n.c. - VAT number 10185480968
Use of the site is subject to acceptance of the General Conditions, Privacy Policy and Cookie Privacy - Privacy Settings</span>
    </Container>
    </>
  )
}

export default Footer