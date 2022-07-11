import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function DemoLogin() {
  return (
    <>
      <div class="wrapper partners-wrapper bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h5>Demo Login Details</h5>
              <h2 class="section-title mb-30">
                Demo Details For App Like{" "}
                <span class="text-marked" data-aos="fade-in"> Food delivery app_</span>
              </h2>
            </div>
            <div class="mt-20 m-auto">
              <div class="col-12">
                <Tabs defaultActiveKey="CustomerApp">
                  <Tab
                    className="nav-link"
                    eventKey="CustomerApp"
                    title="Customer App"
                  >
                    <div class="fade show active" id="firsttab">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <a href="https://drive.google.com/file/d/1jFa8Iu87A0o2ELiFmIkfyPM4V7aQiOrn/view?usp=sharing">
                            <img
                              class="img-fluid"
                              src="http://cscodetech.com/mockup/eatggy-small-banner-customer.png"
                            />
                          </a>
                          <p>
                            ID 1:<br></br>
                            User or email: 7276465975<br></br>
                            Password: cscodetech@123
                          </p>
                          <div class="text-center pt-2">
                            <a href="https://drive.google.com/file/d/1jFa8Iu87A0o2ELiFmIkfyPM4V7aQiOrn/view?usp=sharing">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Download Android App
                                <span class="fe fe-download"></span>
                              </button>
                            </a>
                            <a href="contact.php">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Pricing / Support{" "}
                                <span class="fe fe-phone-call"></span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    className="nav-link"
                    eventKey="DeliveryApp"
                    title="Delivery Boy App (Driver)"
                  >
                    <div class="fade show active" id="thirdtab">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <a href="https://drive.google.com/file/d/1ApjmQSm20qkzO3wfjDUTZkzPAxoUWvom/view?usp=sharing">
                            <img
                              class="img-fluid"
                              src="http://cscodetech.com/mockup/eatggy-small-banner-delivery-boy.png"
                            />
                          </a>
                          <p>
                            ID 1:<br></br>
                            User or email: ramukaka@gmail.com<br></br>
                            Password: ramukaka@123
                          </p>
                          <div class="text-center pt-2">
                            <a href="https://drive.google.com/file/d/1ApjmQSm20qkzO3wfjDUTZkzPAxoUWvom/view?usp=sharing">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Download Android App
                                <span class="fe fe-download"></span>
                              </button>
                            </a>
                            <a href="contact.php">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Pricing / Support{" "}
                                <span class="fe fe-phone-call"></span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="nav-link"
                    eventKey="Admin"
                    title="Admin Panel"
                  >
                    <div class="fade show active" id="fourtab">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <a href="http://eatggy.cscodetech.com/">
                            <img
                              class="img-fluid"
                              src="http://cscodetech.com/mockup/eatggy-small-banner-admin.png"
                            />
                          </a>
                          <p>
                            <strong>Admin</strong> <br></br>
                            User or email: admin<br></br>
                            Password: admin@123<br></br>
                          </p>
                          <div class="text-center pt-2">
                            <a href="http://eatggy.cscodetech.com/">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                View Demo<span class="fe fe-link"></span>
                              </button>
                            </a>
                            <a href="contact.php">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Pricing / Support{" "}
                                <span class="fe fe-phone-call"></span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="nav-link"
                    eventKey="Website"
                    title="Website (Frontend)"
                  >
                    <div class="fade show active" id="fivetab" role="tabpanel">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <a href="http://hungryweb.cscodetech.com">
                            <img
                              class="img-fluid"
                              src="http://cscodetech.com/mockup/eatggy-small-banner-admin.png"
                            />
                          </a>
                          <p>
                            <strong>Website</strong>
                            <br></br>
                            Visit:{" "}
                            <a href="http://hungryweb.cscodetech.com/">
                              http://hungryweb.cscodetech.com/
                            </a>
                            <br></br>
                          </p>
                          <div class="text-center pt-2">
                            <a href="http://hungryweb.cscodetech.com/">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                View Demo<span class="fe fe-link"></span>
                              </button>
                            </a>
                            <a href="contact.php">
                              <button
                                class="butn butn-blue mr-4 mb-3"
                                type="button"
                              >
                                Pricing / Support{" "}
                                <span class="fe fe-phone-call"></span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
                <div class="text-center pt-2">
                  <a
                    href="https://www.youtube.com/watch?v=VNL0OwNZirg"
                    target="_blank"
                  >
                    <button class="butn butn-light mr-4 mb-3" type="button">
                      Youtube <span class="fe fe-youtube"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper partners-wrapper bg-soft-blue">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title mb-30">
                Work experience with{" "}
                <span class="text-marked">world best clients_</span>
              </h2>
            </div>
            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-f2o.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-f4u.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-freshv.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-malegao.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-munch.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-papercart.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-jaipur.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}

            <div class="col-lg-3 col-md-4 col-6 mt-30">
              <div class="partner-item bg-white text-center rounded-lg">
                <img class="" src="img/client-smiledaily.webp" alt="" />
              </div>
            </div>
            {/* <!-- end of partner-item --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoLogin;
