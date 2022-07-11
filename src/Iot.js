import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Iot/Banner1';
import Expertise from './Iot/Expertise';
import TechN from './Iot/TechN';
import ServiceFaqM from './Iot/ServiceFaqM';
import Factsheet from './Iot/Factsheet';


function Iot() {
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

export default Iot;