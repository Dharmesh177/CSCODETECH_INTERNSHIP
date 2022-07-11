import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import VenderHome from "./vender/VenderHome";
import FeatureV from "./vender/FeatureV";
import DemosV from "./vender/DemosV";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianV from "./vender/AccordianV"
import "bootstrap/dist/css/bootstrap.css";
import FinalTestinomial from './FinalTestinomial';



function VenderAppDev() {

 
  return (
   
    <>
    <Header index="0"/>
    
    <VenderHome/>  
    
    
    <FeatureV/>

    <DemosV/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianV/>

    <Footer />
    </>
    //in react-route-dom v6 switch updated with routes
  );
}


export default VenderAppDev;