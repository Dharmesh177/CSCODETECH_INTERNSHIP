import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './MVP/Banner1';
import Expertise from './MVP/Expertise';
import TechN from './MVP/TechN';
import ServiceFaqM from './MVP/ServiceFaqM';
import Factsheet from './MVP/Factsheet';
import WhyCSC from './WhyCSC';


function MVP() {
  return (
    <div>
    <Header index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <WhyCSC/>
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default MVP;