import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Bot/Banner1';
import Expertise from './Bot/Expertise';
import TechN from './Bot/TechN';
import ServiceFaqM from './Bot/ServiceFaqM';
import Factsheet from './Bot/Factsheet';


function Bot() {
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

export default Bot;