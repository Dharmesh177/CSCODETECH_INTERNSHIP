import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './IPad/Banner1';
import Expertise from './IPad/Expertise';
import TechN from './IPad/TechN';
import ServiceFaqM from './IPad/ServiceFaqM';
import Factsheet from './IPad/Factsheet';


function IPad() {
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

export default IPad;