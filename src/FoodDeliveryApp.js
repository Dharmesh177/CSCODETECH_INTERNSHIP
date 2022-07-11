import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import FoodHome from "./FoodHome";
import Feature from "./Feature";
import Demos from "./Demos";
import Review from "./Review";
import Testinomial from "./Testinomial";
import Accordian from "./Accordian"
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FinalTestinomial from './FinalTestinomial';


function FoodDeliveryApp() {

  return (
    <>
    <Header index="0"/>
    <FoodHome/>
    <Feature/>
    <Demos/>
    <WhyWe/>
    <FinalTestinomial/>
    <Review />
    <Accordian/>
    <Footer />
    </>
    
    //in react-route-dom v6 switch updated with routes
  );
}


export default FoodDeliveryApp;