import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './React/Banner1';
import Expertise from './React/Expertise';
import TechN from './React/TechN';
import ServiceFaqM from './React/ServiceFaqM';
import Factsheet from './React/Factsheet';


function Reactt() {
  return (
    <div>
    <Header index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default Reactt;