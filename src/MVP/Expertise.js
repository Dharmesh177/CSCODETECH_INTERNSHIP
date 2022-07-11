import React from "react";
import "../main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";

function Expertise() {
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
                <h2 class="section-title mb-30">Three Types of MVP</h2>
              </div>
          
              <div class="row">
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box rounded-lg bg-white p-5">
                    
                  
                    <h5 class="text-left font-w-600 mb-3">
                    Pilot MVP
                    </h5>
                    <p>
                    If you wish to test and judge the core value of your product, you must invest your time and efforts in Pilot MVP development. It always works! </p>
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box text-left rounded-lg bg-white p-5">
                    
                    <h5 class="text-left  font-w-600 mb-3">
                    Single Feature MVP
                    </h5>
                    <p>
                    When you are focusing on the killer feature element, you need to develop the single feature MVP. It helps to judge the basic value of your product.
                    </p>
                   
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box  rounded-lg bg-white p-5">
                   
                    <h5 class=" text-left font-w-600 mb-3">
                    Prototype Design</h5>
                   
                    <p >
                    Before sinking a lot of effort and money into app development, a prototype design is created. It helps to check the primary outcome.
                    </p>
                   
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

export default Expertise;
