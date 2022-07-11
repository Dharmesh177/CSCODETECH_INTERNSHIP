import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Factsheet from "./Factsheet";
import { Link } from "react-router-dom";

function Banner1() {
  return (
    <div>
      <div class="parallax services-top-main" id="parallax">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="text-left mauto">
                <div class="home-slider-decor mobile-about-img">
                <img class="" loading="lazyload" data-src="img/Chatbot-main.png" src="img/Chatbot-main.png" alt="Authentic Chatbot Development Services" title="Authentic Chatbot Development Services" width="436" height="490"/>
                 </div>
                <h1 data-aos="fade-in" class="section-title mb-30">Authentic Chatbot Development Services</h1>
                <p>Our incredible outputs of Chatbot development processes have improved retention in comparison to different apps. They are swift, smart, relevant and courteous. Consult with our Business Head and let's start developing next-gen chatbot app for your e- Commerce/social media websites, mobile messengers and CRM.</p>
                <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                <Link style={{ textDecoration: "none" }} to="/lets-talk">
                  <a className=" butn butn-sm" href="#">
                    Let's talk
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 desktop-about-img">
              <div class="home-slider-decor">
              <img class="" loading="lazyload" data-src="img/Chatbot-main.png" src="img/Chatbot-main.png" alt="Authentic Chatbot Development Services" title="Authentic Chatbot Development Services" width="436" height="490"/>  </div>
          </div>
        </div>
      </div>
      </div>

      <Factsheet />

      <div class="parallax let-us ios-about-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 text-left">
              <div class="soln-heading" data-aos="Fade-in">
                <h2 class="section-title mb-30">Chatbot Development At CSCODETECH Extensively Increases User Engagement!</h2>
              </div>
              <div class="ios-about-con">
                <div class="ios-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/ios-main-img.png"
                    src="img/ios-main-img.png"
                    alt="HR"
                    title="HR"
                  />
                </div>
                <div class="ios-small-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/os-sub-img.png"
                    src="img/os-sub-img.png"
                    alt="Management Team"
                    title="Management Team"
                  />
                </div>
                <p>We have all the required skills for Chatbot development. Our most competent, innovative and hardworking developers have modernized 
                <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Bots"
                            >
                <a href="/Service-Bots" class="internal-links">Chatbot development</a> 
                </Link>
                processes. Our Chatbot projects are swifter and smarter with well-organized workflow procedures.</p>
                <p>Our Chatbot development services are comparatively cost-effective and uncomplicated to build, all because of our experienced and expert Chatbot development team. We offer the best privacy standards along with automation and precise workflow. Let us come together for building dynamic chatbot apps for your webpages.</p>
                <h5>Celebrating a few years in developing Awesome Chatbots Apps</h5>
                
                <div class="row">
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/social_media_sites.svg" src="img/social_media_sites.svg" alt="Social Media Sites" title="Social Media Sites"/>
                      <p>Social Media Sites</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/crm_icn.svg" src="img/crm_icn.svg" alt="CRM" title="CRM"/>
                      <p>CRM</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                    <img class="" loading="lazyload" data-src="img/chat_apps-r.svg" src="img/chat_apps-r.svg" alt="Chat Apps" title="Chat Apps"/>
                      <p>Chat Apps</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 ios-right-img desktop-about-img">
              <div class="ios-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/ios-main-img.png"
                  src="img/ios-main-img.png"
                  alt="HR"
                  title="HR"
                />
              </div>
              <div class="ios-small-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/os-sub-img.png"
                  src="img/os-sub-img.png"
                  alt="Management Team"
                  title="Management Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
