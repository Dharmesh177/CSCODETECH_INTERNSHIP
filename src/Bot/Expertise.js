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
                <h2 class="section-title mb-30"><span class="text-marked">Types of</span> Chatbots</h2>
              </div>
              <p>
                All you need to have is an idea or a plan or a design! We will
                take care of the rest and convert it into an app or a website
                that will exceed your requirements and expectations. Your idea
                will take-off to the destination of success with our navigation!
              </p>

              <div class="row">
                               
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box rounded-lg bg-white p-5">
                    <span class="fspanbg4">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/crm_icn.svg"
                        src="img/crm_icn.svg"
                        alt="Slack/CRM"
                        title="Slack/CRM"
                      />
                    </span>{" "}
                    <h5 class="font-w-600 mb-3">Slack/CRM
</h5>
                    <p>
                    We offer high-end slack bot apps for enterprise based companies and startups.
                    </p>
                    <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                      <a className=" butn butn-sm" href="#">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box rounded-lg bg-white p-5">
                    <span class="fspanbg4">
                    <img class="" loading="lazyload" data-src="img/website-chat-fb.svg" src="img/website-chat-fb.svg" alt="Website Chat/Facebook Messenger" title="Website Chat/Facebook Messenger"/>
                    </span>{" "}
                    <h5 class="font-w-600 mb-3">Website Chat/Facebook Messenger</h5>
                    
                    <p>Reach millions of Facebook as well as web users with our scalable chatbot apps.</p>
                    
                    <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                      <a className=" butn butn-sm" href="#">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40 col-sm-12 text-center" data-aos="fade-in">
                  <div class="icon-box rounded-lg bg-white p-5">
                    <span class="fspanbg3">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/mobile-app-dev.svg"
                        src="img/mobile-app-dev.svg"
                        alt="Custom Mobile App/WhatsApp/Telegram"
                        title="Custom Mobile App/WhatsApp/Telegram"
                      />
                    </span>
                    <h5 class="font-w-600 mb-3">Custom Mobile App/WhatsApp/Telegram</h5>

                    <p>
                    
                    Act smart &amp; have automated conversations with your customers on mobile apps.                    </p>
                    <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                      <a className=" butn butn-sm" href="#">
                        View More
                      </a>
                    </div>
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

