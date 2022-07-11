import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './ios/Banner1';
import Expertise from './ios/Expertise';
import TechN from './ios/TechN';
import ServiceFaqM from './ios/ServiceFaqM';
import Factsheet from './ios/Factsheet';


function IOS() {
  return (
    <div>
    <Header index="1" />
    <Banner1/>
    {/* <Factsheet /> */}
    <Expertise />
    <TechN />
    <ServiceFaqM />
    <Footer />
    </div>
  )
}

export default IOS;