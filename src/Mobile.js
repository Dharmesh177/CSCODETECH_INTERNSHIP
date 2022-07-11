import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner1 from './Mobile/Banner1';
import Expertise from './Mobile/Expertise';
import TabsM from './Mobile/TabsM';
import ServiceFaqM from './Mobile/ServiceFaqM';


function Mobile() {
  return (
    <div>
    <Header index="1" />
    <Banner1/>
    <Expertise />
    <TabsM />
    <ServiceFaqM />

    <Footer />
    </div>
  )
}

export default Mobile;