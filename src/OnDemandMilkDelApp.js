import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import WhyWe from "./WhyWe";
import MilkdelHome from "./milkdel/MilkdelHome";
import FeatureO from "./milkdel/FeatureO";
import DemosO from "./milkdel/DemosO";
import Review from "./Review";
import Testinomial from "./Testinomial";
import AccordianO from "./milkdel/AccordianO"
import "bootstrap/dist/css/bootstrap.css";
import FinalTestinomial from './FinalTestinomial';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Spinner from './Spinner.js';


function OnDemandMilkDelApp() {

  // const [article,setArticle] = useState(false);

  //   useEffect(() =>{
  //       setTimeout( () => {
           
  //           setArticle(true);
  //     },2000)
  //   })

  return (
    <>
    {
    <>
    <Header index="0"/>
    
    <MilkdelHome/>  
    
    
    <FeatureO/>

    <DemosO/>

    <WhyWe/>
    <FinalTestinomial/>
    <Review />

    <AccordianO/>

    <Footer />
    </>}


    {/* {!article && <Spinner/>} */}
    </>
    
    //in react-route-dom v6 switch updated with routes
  );
}


export default OnDemandMilkDelApp;