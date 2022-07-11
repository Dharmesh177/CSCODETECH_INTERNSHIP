import React from "react";
import "./main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";

function HirePageSer(props) {
  return (
    <div>
      <div
        class="parallax app-features hire-app"
        style={{ background: "#fafafa" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 text-left">
              <div class="soln-heading">
                <h2>{props.title}</h2>
              </div>
          
              <div class="row">
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12" data-aos="fade-in">
                  <div class="icon-box rounded-lg bg-white p-5">
                    
                  
                    <h5 class="text-left font-w-600 mb-3">
                   {props.he1}
                    </h5>
                    <p className="text-left">
                   {props.p1}</p>

                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 " data-aos="fade-in">
                  <div class="icon-box text-left rounded-lg bg-white p-5">
                    
                    <h5 class="text-left  font-w-600 mb-3">
                   {props.he2}
                    </h5>
                    <p className="text-left">
                   {props.p2} </p>
                  
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 " data-aos="fade-in">
                  <div class="icon-box  rounded-lg bg-white p-5">
                   
                    <h5 class=" text-left font-w-600 mb-3">
                  {props.he3}
                   </h5>
                    <p className="text-left" >
                   {props.p3} </p>
                
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 " data-aos="fade-in">
                  <div class="icon-box  rounded-lg bg-white p-5">
                   
                    <h5 class=" text-left font-w-600 mb-3">
                   {props.he4}
                   </h5>
                    <p className="text-left" >
                   {props.p4}  </p>
                  
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 " data-aos="fade-in">
                  <div class="icon-box  rounded-lg bg-white p-5">
                   
                    <h5 class=" text-left font-w-600 mb-3">
                    {props.he5}</h5>
                   
                    <p className="text-left" >
                    {props.p5}</p>
                  
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 " data-aos="fade-in">
                  <div class="icon-box  rounded-lg bg-white p-5">
                   
                    <h5 class=" text-left font-w-600 mb-3">
                   {props.he6}</h5>
                   
                    <p className="text-left" >
                    {props.p6} </p>
                 
                   
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HirePageSer;
