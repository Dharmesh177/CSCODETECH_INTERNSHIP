import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Laravel/Banner1';
import TechN from './Laravel/TechN';
import ServiceFaqM from './Laravel/ServiceFaqM';
import Factsheet from './Laravel/Factsheet';
import TypeOfService from './Laravel/TypeOfService';

function Laravel() {
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

export default Laravel;