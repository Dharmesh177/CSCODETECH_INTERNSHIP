import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Android/Banner1';
import Expertise from './Android/Expertise';
import TechN from './Android/TechN';
import ServiceFaqM from './Android/ServiceFaqM';
import Factsheet from './Android/Factsheet';


function Android() {
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

export default Android;