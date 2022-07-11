import React from 'react';
import "../main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TabsM() {
  return (
    <div>
       <section class="wrapper testimonial-wrapper bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ">
            <h2 class="section-title mb-40">
              <span class="text-marked">We Hold Expertise in the</span>{" "}
              Following Platforms_
            </h2>
          </div>
        </div>

        <div class="col-12">
          <Tabs  defaultActiveKey="MobileTechnology">
            <Tab className="nav-link  text-center mauto " eventKey="MobileTechnology" title="Mobile Technology">
              <div class=" fade show active">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="services-box-main">
                        <div class="row">
                          <div class="col-md-12 col-sm-12">
                            <ul>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/objective-c.svg"
                                    src="img/logos/objective-c.svg"
                                    alt="Objective-C"
                                    title="Objective-C"
                                    width="50"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Objective-C</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-swift-logo.svg"
                                    src="img/logos/s-swift-logo.svg"
                                    alt="Swift"
                                    title="Swift"
                                    width="56"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Swift</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-flutter-logo.svg"
                                    src="img/logos/s-flutter-logo.svg"
                                    alt="Flutter"
                                    title="Flutter"
                                    width="41"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Flutter</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-react-logo.svg"
                                    src="img/logos/s-react-logo.svg"
                                    alt="React Native"
                                    title="React Native"
                                    width="56"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">React Native</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-kotlin-logo.svg"
                                    src="img/logos/s-kotlin-logo.svg"
                                    alt="Kotlin"
                                    title="Kotlin"
                                    width="49"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Kotlin</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
<Tab className="nav-link" eventKey="UI/UX Design" title="UI/UX Design">
              <div class="show fade active" id="ui">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="services-box-main">
                        <div class="row">
                          <div class="col-md-12 col-sm-12">
                            <ul>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-adobe-photoshop.svg"
                                    src="img/logos/s-adobe-photoshop.svg"
                                    alt="Photoshop"
                                    title="Photoshop"
                                    width="50"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Photoshop</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-adobe-illustrator.svg"
                                    src="img/logos/s-adobe-illustrator.svg"
                                    alt="Illustrator"
                                    title="Illustrator"
                                    width="51"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Illustrator</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-sketch.svg"
                                    src="img/logos/s-sketch.svg"
                                    alt="Sketch"
                                    title="Sketch"
                                    width="55"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Sketch</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-figma.svg"
                                    src="img/logos/s-figma.svg"
                                    alt="Figma"
                                    title="Figma"
                                    width="34"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Figma</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-adobe-xd.svg"
                                    src="img/logos/s-adobe-xd.svg"
                                    alt="XD"
                                    title="XD"
                                    width="52"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">XD</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-invision.svg"
                                    src="img/logos/s-invision.svg"
                                    alt="Invision Studio"
                                    title="Invision Studio"
                                    width="50"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Invision Studio</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/after-effects-cc.svg"
                                    src="img/logos/after-effects-cc.svg"
                                    alt="After Effects"
                                    title="After Effects"
                                    width="52"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">After Effects</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/zeplin.svg"
                                    src="img/logos/zeplin.svg"
                                    alt="Zeplin"
                                    title="Zeplin"
                                    width="63"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Zeplin</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/principle-app-2.svg"
                                    src="img/logos/principle-app-2.svg"
                                    alt="Principle"
                                    title="Principle"
                                    width="37"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Principle</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TabsM