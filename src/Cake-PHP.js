import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Cake-PHP/Banner1';
import TechN from './Cake-PHP/TechN';
import ServiceFaqM from './Cake-PHP/ServiceFaqM';
import Factsheet from './Cake-PHP/Factsheet';
import TypeOfService from './Cake-PHP/TypeOfService';

function CakePHP() {
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

export default CakePHP;