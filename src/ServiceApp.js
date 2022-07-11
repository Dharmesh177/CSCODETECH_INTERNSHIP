import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import ServiceHome from "./service/ServiceHome";
import FeatureS from "./service/FeatureS";
import DemosS from "./service/DemosS";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianS from "./service/AccordianS"
import "bootstrap/dist/css/bootstrap.css";
import FinalTestinomial from './FinalTestinomial';



function ServiceApp() {

  
  return (
   
    
    <>
    <Header index="0"/>
    
    <ServiceHome/>  
    
    
    <FeatureS/>

    <DemosS/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianS/>

    <Footer />
    </>


    //in react-route-dom v6 switch updated with routes
  );
}


export default ServiceApp;