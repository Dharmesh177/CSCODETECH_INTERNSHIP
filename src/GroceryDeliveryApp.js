import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import GroceryHome from "./Grocery/GroceryHome";
import FeatureG from "./Grocery/FeatureG";
import DemosG from "./Grocery/DemosG";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianG from "./Grocery/AccordianG"
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FinalTestinomial from './FinalTestinomial';


function GroceryDeliveryApp() {

  return (
    <>
    <Header index="0"/>
    
    <GroceryHome/>  
    
    <FeatureG/>

    <DemosG/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianG/>

    <Footer />
    </>
    
    //in react-route-dom v6 switch updated with routes
  );
}


export default GroceryDeliveryApp;