import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './HireDedicatedTeam/Banner1';
import Expertise from './HireDedicatedTeam/Expertise';
import TechN from './HireDedicatedTeam/TechN';
import ServiceFaqM from './HireDedicatedTeam/ServiceFaqM';
import Factsheet from './HireDedicatedTeam/Factsheet';
import WhyCSC from './WhyCSC';


function HireDedicatedTeam() {
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

export default HireDedicatedTeam;