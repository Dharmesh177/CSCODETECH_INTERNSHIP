import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './NodeJS/Banner1';
import TechN from './NodeJS/TechN';
import ServiceFaqM from './NodeJS/ServiceFaqM';
import Factsheet from './NodeJS/Factsheet';
import TypeOfService from './NodeJS/TypeOfService';

function NodeJS() {
  return (
    <div>
    <Header index="1"/>
    <Banner1/>
    {/* <Factsheet /> */}
    <TypeOfService/>
    <TechN />
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default NodeJS;