import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Wearable/Banner1';
import Expertise from './Wearable/Expertise';
import TechN from './Wearable/TechN';
import ServiceFaqM from './Wearable/ServiceFaqM';
import Factsheet from './Wearable/Factsheet';


function Wearable() {
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

export default Wearable;