import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import VenderAppDev from "./multidelivery/MultiDeliveryHome";
import FeatureMD from "./multidelivery/FeatureMD";
import DemosMD from "./multidelivery/DemosMD";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianMD from "./multidelivery/AccordianMD"
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FinalTestinomial from './FinalTestinomial';



function MultiDeliveryAppDev() {

 
  return (
   
    <>
    <Header index="0"/>
    
    <VenderAppDev/>  
    
    
    <FeatureMD/>

    <DemosMD/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianMD/>

    <Footer />
    </>
    //in react-route-dom v6 switch updated with routes
  );
}


export default  MultiDeliveryAppDev;