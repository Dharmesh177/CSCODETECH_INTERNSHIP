import React, { useEffect } from "react";
import "./App.css";
import 'jquery';
import FoodDeliveryApp from "./FoodDeliveryApp";
import GroceryDeliveryApp from "./GroceryDeliveryApp";
import MedicineDeliveryApp from "./MedicineDeliveryApp";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonApp from "./SkeletonApp";
import Home from "./Home";
import OnDemandMilkDelApp from "./OnDemandMilkDelApp";
import ServiceApp from "./ServiceApp";
import VenderAppDev from "./VenderAppDev";
import MultiDeliveryAppDev from "./MultiDeliveryAppDev";
import Mobile from "./Mobile";
import IOS from "./IOS";
import Android from "./Android";
import Hybrid from "./Hybrid";
import Wearable from "./Wearable";
import Bot from "./Bot";
import Flutter from "./Flutter";
import Reactt from "./Reactt"
import IPad from "./IPad";
import Swift from "./Swift";
import Ibeacon from "./Ibeacon";
import Iot from "./Iot";
import $ from 'jquery';
import Website from "./Website";
import PHP from "./PHP";
import Laravel from "./Laravel";
import Angular from "./Angular";
import NodeJS from "./NodeJS";
import Wordpress from "./Wordpress";
import CakePHP from "./Cake-PHP";
import MVP from "./MVP";
import ExtendedTeamDev from "./ExtendedTeamDev";
import EnterpriceSolDev from "./EnterpriceSolDev";
import HireDedicatedTeam from "./HireDedicatedTeam";
import ContactUs from "./ContactUs";
import HireNodeJS from "./HireNodeJS";
import HireAndroid from "./HireAndroid";
import HireiOS from "./HireiOS";
import HireSwift from "./HireSwift";
import HireFlutter from "./HireFlutter";
import HirePHP from "./HirePHP";
import HireWeb from "./HireWeb";
import HireWordpress from "./HireWordpress";
import HireReact from "./HireReact";
import HireLaravel from "./HireLaravel";
import BecomePartner from "./BecomePartner";
import LifeAtCSC from "./LifeAtCSC";
import EngagementModel from "./EngagementModel";
import Company from "./Company";
import TestinomialCom from "./TestinomialCom";
import Clientssec from "./Clientssec";
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {
 
  useEffect(() => {
    AOS.init();
AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          <Route
            exact
            path="/FoodDeliveryApp"
            element={
              <>
                <FoodDeliveryApp />
              </>
            }
          />
          <Route
            exact
            path="/GroceryDeliveryApp"
            element={
              <>
                <GroceryDeliveryApp />
              </>
            }
          />
          <Route
            exact
            path="/MedicineDeliveryApp"
            element={
              <>
                <MedicineDeliveryApp />
              </>
            }
          />
          <Route
            exact
            path="/MilkDeliveryApp"
            element={
              <>
               <OnDemandMilkDelApp />
              </>
            }
          />
          <Route
            exact
            path="/ServiceApp"
            element={
              <>
               <ServiceApp />
              </>
            }
          />
          <Route
            exact
            path="/SingleVenderApp"
            element={
              <>
               <VenderAppDev/>
              </>
            }
          />
          <Route
            exact
            path="/Multi-Delivery-App-Development"
            element={
              <>
               <MultiDeliveryAppDev />
              </>
            }
          />
          <Route
            exact
            path="/Service-Mobile"
            element={
              <>
              <Mobile />
              </>
            }
          />
          <Route
            exact
            path="/Service-IOS"
            element={
              <>
              <IOS />
              </>
            }
          />
          <Route
            exact
            path="/Service-Android"
            element={
              <>
              <Android />
              </>
            }
          />
          <Route
            exact
            path="/Service-Hybrid"
            element={
              <>
                <Hybrid/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Wearable"
            element={
              <>
                <Wearable/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Bots"
            element={
              <>
               <Bot/>
              </>
            }
          />
          <Route
            exact
            path="/Service-React"
            element={
              <>
               <Reactt/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Ibeacon"
            element={
              <>
              <Ibeacon/>
              </>
            }
          />
          <Route
            exact
            path="/Service-IoT"
            element={
              <>
               <Iot/>
              </>
            }
          />
          <Route
            exact
            path="/Service-iPad"
            element={
              <>
               <IPad/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Flutter"
            element={
              <>
               <Flutter/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Swift"
            element={
              <>
               <Swift/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Website"
            element={
              <>
              <Website/>
              </>
            }
          />
          <Route
            exact
            path="/Service-PHP"
            element={
              <>
              <PHP/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Laravel"
            element={
              <>
              <Laravel/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Angular"
            element={
              <>
             <Angular/>
              </>
            }
          />
          <Route
            exact
            path="/Service-NodeJS"
            element={
              <>
            <NodeJS/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Wordpress"
            element={
              <>
             <Wordpress/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Cake-PHP"
            element={
              <>
            <CakePHP/>
              </>
            }
          />
          <Route
            exact
            path="/Service-MVP-Development"
            element={
              <>
            <MVP/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Extended-Remote-Team"
            element={
              <>
           <ExtendedTeamDev/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Enterprise-Sol-Dev"
            element={
              <>
           <EnterpriceSolDev/>
              </>
            }
          />
          <Route
            exact
            path="/Service-Hire-Dedicated-Dev-Team"
            element={
              <>
           <HireDedicatedTeam/>
              </>
            }
          />
          <Route
            exact
            path="/lets-talk"
            element={
              <>
          <ContactUs/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-NodeJS-developers"
            element={
              <>
          <HireNodeJS/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Android-developers"
            element={
              <>
         <HireAndroid/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-iOS-developers"
            element={
              <>
          <HireiOS/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Flutter-developers"
            element={
              <>
          <HireFlutter/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Swift-developers"
            element={
              <>
         <HireSwift/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-PHP-developers"
            element={
              <>
         <HirePHP/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Web-developers"
            element={
              <>
         <HireWeb/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Wordpress-developers"
            element={
              <>
         <HireWordpress/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-React-developers"
            element={
              <>
         <HireReact/>
              </>
            }
          />
          <Route
            exact
            path="/Hire-Laravel-developers"
            element={
              <>
         <HireLaravel/>
              </>
            }
          />
          <Route
            exact
            path="/Become-Partner"
            element={
              <>
       <BecomePartner/>
              </>
            }
          />
          <Route
            exact
            path="/Life-At-CSCODETECH"
            element={
              <>
      <LifeAtCSC/>
              </>
            }
          />
          <Route
            exact
            path="/Engagement-Model"
            element={
              <>
    <EngagementModel/>
              </>
            }
          />
          <Route
            exact
            path="/About-cscodetech"
            element={
              <>
   <Company/>
              </>
            }
          />
          <Route
            exact
            path="/Testinomials"
            element={
              <>
   <TestinomialCom/>
              </>
            }
          />
          <Route
            exact
            path="/Our-Clients"
            element={
              <>
   <Clientssec/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
    //in react-route-dom v6 switch updated with routes
  );
}

export default App;
