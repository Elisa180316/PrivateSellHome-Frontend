import React from 'react'
import Layout from './Layout'
import { Container } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <Layout>
      <Container className="text-center">
    <h1 className='mt-5 mb-3 text-primary'> Info Contacts</h1>
    </Container>
    <p className='mb-5 mt-5'
  style={{
    backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.3F5TPjyAXiHLaMX7VDzvtgHaEf&pid=Api&P=0&h=5500")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <h6 className="pt-5 text-center">COMPANY DATA</h6>
  <h6 className="text-center">PrivateSellHome</h6>
  <h6 className="text-center">Email: info@privatesellhome.it</h6>
  <h6 className="text-center">Phone n. 02-587415</h6>
  <h6 className="text-center">VAT number: 10185480968</h6>
  <h6 className="text-center"> REA number: MB - 2512062</h6>
  <h6 className="pb-5 text-center">Registered office: Via Santa Maddalena, 1 - 20900 Milano (MI)</h6>
</p>
    </Layout>
  )
}

export default ContactUs