import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './EnterpriceSolDev/Banner1';
import Expertise from './EnterpriceSolDev/Expertise';
import TechN from './EnterpriceSolDev/TechN';
import ServiceFaqM from './EnterpriceSolDev/ServiceFaqM';
import Factsheet from './EnterpriceSolDev/Factsheet';
import WhyCSC from './WhyCSC';


function EnterpriceSolDev() {
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

export default EnterpriceSolDev;