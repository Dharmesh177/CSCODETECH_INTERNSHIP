import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Flutter/Banner1';
import Expertise from './MVP/Expertise';
import TechN from './Flutter/TechN';
import ServiceFaqM from './Flutter/ServiceFaqM';
import Factsheet from './Flutter/Factsheet';


function Flutter() {
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

export default Flutter;