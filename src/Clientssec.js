import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import Review from "./Review";
import "bootstrap/dist/css/bootstrap.css";
import FinalTestinomial from './FinalTestinomial';
import Contact from './Contact';



function ServiceApp() {

  
  return (
   
    
    <>
    <Header index="4"/>
    
    <Client/>
    <Review />
    <WhyWe/>
    <Contact/>
    <FinalTestinomial/>
   


    <Footer />
    </>


    //in react-route-dom v6 switch updated with routes
  );
}


export default ServiceApp;