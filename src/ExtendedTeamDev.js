import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './ExtendedTeamDev/Banner1';
import Expertise from './ExtendedTeamDev/Expertise';
import TechN from './ExtendedTeamDev/TechN';
import ServiceFaqM from './ExtendedTeamDev/ServiceFaqM';
import Factsheet from './ExtendedTeamDev/Factsheet';
import WhyCSC from './WhyCSC';


function ExtendedTeamDev() {
  return (
    <div>
    <Header index="1" />
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

export default ExtendedTeamDev;