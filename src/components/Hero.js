import React from 'react'
import '../styles/hero.css'
import {Container} from 'react-bootstrap'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
    // States
    const [type, setType] = useState ("single home")
    const [location, setLocation] = useState("0")
    const [priceRange, setPriceRange] = useState("0")

    // const handleSearch = ( => {

    // })
  return (
    <>
    {/* Titles */}
    <Container className='d-flex justify-content-center mt-3'>
<h2>Buy and sell a private home without commission</h2>
    </Container>
    <Container className='d-flex justify-content-center mt-3'>
        <h5>Search among the best properties</h5>
    </Container>

{/* Select type property */}
    <Container className='d-flex justify-content-center mt-3'>
        <select onChange={(e) => setType (e.target.value)}
            defaultValue={'DEFAULT'} className='me-3'>
            <option value="DEFAULT" disabled>Select properties' type</option>
            <option value = "appartment">Appartment</option>
            <option value = "single home">Single Home</option>
            <option value = "luxury villa">Luxury Villa</option>
        </select>
{/* Select price range */}
        <select onChange={(e) => setPriceRange (e.target.value)}
        defaultValue={'DEFAULT'} className='me-3'>
            <option value="DEFAULT" disabled>Select Price Range</option>
            <option value = "0">0-100.000,00</option>
            <option value = "1">100.000,00-200.000,00</option>
            <option value = "2">200.000,00-300.000,00</option>
            <option value = "3">300.000,00-400.000,00</option>
            <option value = "4">400.000,00-500.000,00</option>
        </select>
        {/* Select location */}
        <select onChange={(e) => setLocation (e.target.value)}
        defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Where are you looking for?</option>
            <option value = "0">Milano</option>
            <option value = "1">Lucca</option>
            <option value = "2">Firenze</option>
            <option value = "3">Roma</option>
            <option value = "4">Napoli</option>
            <option value = "5">Torino</option>

        </select>
        <AiOutlineSearch className='ms-3'></AiOutlineSearch>
    </Container>
    </>
  )
}

export default Hero
