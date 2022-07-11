import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Angular/Banner1';
import TechN from './Angular/TechN';
import ServiceFaqM from './Angular/ServiceFaqM';
import Factsheet from './Angular/Factsheet';
import TypeOfService from './Angular/TypeOfService';

function Angular() {
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

export default Angular;