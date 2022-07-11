import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Ibeacon/Banner1';
import Expertise from './Ibeacon/Expertise';
import TechN from './Ibeacon/TechN';
import ServiceFaqM from './Ibeacon/ServiceFaqM';
import Factsheet from './Ibeacon/Factsheet';


function Ibeacon() {
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

export default Ibeacon;