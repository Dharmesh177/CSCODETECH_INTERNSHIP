import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import Client from "./Client";
import MedicineHome from "./Medicine/MedicineHome";
import FeatureM from "./Medicine/FeatureM";
import DemosM from "./Medicine/DemosM";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianM from "./Medicine/AccordianM"
import "bootstrap/dist/css/bootstrap.css";
import FinalTestinomial from './FinalTestinomial';


function MedicineDeliveryApp() {

  

    // useEffect(() =>{
    //     setTimeout( () => {
           
    //         setArticle(true);
    //   },2000)
    // })

  return (
    <>
    {
    <>
    <Header index="0"/>
    
    <MedicineHome/>  
    
    
    <FeatureM/>

    <DemosM/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianM/>

    <Footer />
    </>}


    {/* {!article && <Spinner/>} */}
    </>
    
    //in react-route-dom v6 switch updated with routes
  );
}


export default MedicineDeliveryApp;