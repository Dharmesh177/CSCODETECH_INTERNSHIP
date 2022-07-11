import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Wordpress/Banner1';
import TechN from './Wordpress/TechN';
import ServiceFaqM from './Wordpress/ServiceFaqM';
import Factsheet from './Wordpress/Factsheet';
import TypeOfService from './Wordpress/TypeOfService';

function Wordpress() {
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

export default Wordpress;