import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Website/Banner1';
import Expertise from './Website/Expertise';
import TechN from './Website/TechN';
import ServiceFaqM from './Website/ServiceFaqM';
import Factsheet from './Website/Factsheet';
import TypeOfService from './Website/TypeOfService';


function Website() {
  return (
    <div>
    <Header index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <TypeOfService/>
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default Website;