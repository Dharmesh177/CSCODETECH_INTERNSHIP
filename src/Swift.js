import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Swift/Banner1';
import Expertise from './Swift/Expertise';
import TechN from './Swift/TechN';
import ServiceFaqM from './Swift/ServiceFaqM';
import Factsheet from './Swift/Factsheet';


function Swift() {
  return (
    <div>
    <Header index="1" />
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default Swift;