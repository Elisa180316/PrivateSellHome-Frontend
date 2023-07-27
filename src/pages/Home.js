import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Main from "../components/Main";
import LatestProperties from "../components/LatestProperties";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    
        <>
          
            <NavBar />
            <Hero />
            <Main />
            <LatestProperties />
            <Newsletter/>
            <Footer />
         
        </>
      )}
   


export default Home