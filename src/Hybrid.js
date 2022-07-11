import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Hybrid/Banner1';
import Expertise from './Hybrid/Expertise';
import TechN from './Hybrid/TechN';
import ServiceFaqM from './Hybrid/ServiceFaqM';
import Factsheet from './Hybrid/Factsheet';


function Hybrid() {
  return (
    <div>
    <Header  index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default Hybrid;