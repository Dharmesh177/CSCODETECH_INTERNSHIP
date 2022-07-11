import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './PHP/Banner1';
import TechN from './PHP/TechN';
import ServiceFaqM from './PHP/ServiceFaqM';
import Factsheet from './PHP/Factsheet';
import TypeOfService from './PHP/TypeOfService';


function PHP() {
  return (
    <div>
    <Header index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <TypeOfService/>
    <TechN />
    
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default PHP;