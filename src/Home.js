import React,{useState,useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Team from "./Team";
import TechN from "./TechN";
import RecentWork from "./RecentWork";
import WhyWe from "./WhyWe";
import Client from "./Client";
import "bootstrap/dist/css/bootstrap.css";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonApp from "./SkeletonApp";
import ContactUs from "./ContactUs";
import FinalTestinomial from "./FinalTestinomial";
function Home() {
    // const [article,setArticle] = useState(false);

    // useEffect(() =>{
    //     setTimeout( () => {
           
    //         setArticle(true);
    //   },2000)
    // })
  
  return (
    
     
   

         <div className="home">
       <>             
                 <Header index="0" />
                {/* <FinalTestinomial/> */}
                <Banner1 />
               
                <Banner2 />
                <RecentWork />
                <TechN />
                <Team />
                <WhyWe />
                <Client />

                <Footer />
                </>
 

          {/* {!article && <SkeletonApp/>} */}
         </div>
    
              
                
               
           

              //in react-route-dom v6 switch updated with routes
  );
}

export default Home;
