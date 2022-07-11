import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TechN() {
  return (
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
          <Tabs defaultActiveKey="MobileTechnology">
            <Tab className="nav-link" eventKey="MobileTechnology" title="Mobile Technology">
              <div class=" fade show active">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-body">
                      <div class="services-box-main">
                        <div class="row">
                          <div class="col-md-12 col-sm-12" >
                            <ul>
                              <li >
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
            <Tab className="nav-link" eventKey="WebTechnology" title="Web Technology">
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
                                    data-src="img/logos/php-logo.svg"
                                    src="img/logos/php-logo.svg"
                                    alt="PHP"
                                    title="PHP"
                                    width="96"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">PHP</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-dotnet-logo.svg"
                                    src="img/logos/s-dotnet-logo.svg"
                                    alt=".Net"
                                    title=".Net"
                                    width="53"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">.Net</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-laravel-logo.svg"
                                    src="img/logos/s-laravel-logo.svg"
                                    alt="Laravel"
                                    title="Laravel"
                                    width="73"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Laravel</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-nodejs-logo.svg"
                                    src="img/logos/s-nodejs-logo.svg"
                                    alt="Node.Js"
                                    title="Node.Js"
                                    width="44"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Node.Js</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/angular-logo.svg"
                                    src="img/logos/angular-logo.svg"
                                    alt="Angular"
                                    title="Angular"
                                    width="48"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Angular</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/s-react-logo.svg"
                                    src="img/logos/s-react-logo.svg"
                                    alt="React.Js"
                                    title="React.Js"
                                    width="56"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">React.Js</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/python-logo.svg"
                                    src="img/logos/python-logo.svg"
                                    alt="Python"
                                    title="Python"
                                    width="51"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Python</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/html5-logo.svg"
                                    src="img/logos/html5-logo.svg"
                                    alt="HTML 5"
                                    title="HTML 5"
                                    width="36"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">HTML 5</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/vue-js-1.svg"
                                    src="img/logos/vue-js-1.svg"
                                    alt="VueJS"
                                    title="VueJS"
                                    width="58"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">VueJS</p>
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
            <Tab className="nav-link" eventKey="Cloud" title="Cloud">
              <div class="show active  fade" id="cloud">
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
                                    data-src="img/logos/aws-logo.svg"
                                    src="img/logos/aws-logo.svg"
                                    alt="Amazon AWS"
                                    title="Amazon AWS"
                                    width="64"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Amazon AWS</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/ms-csp-icon.webp"
                                    src="img/logos/ms-csp-icon.webp"
                                    alt="Microsoft Azure"
                                    title="Microsoft Azure"
                                    width="96"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Microsoft Azure</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/google-cloud-logo.svg"
                                    src="img/logos/google-cloud-logo.svg"
                                    alt="Google Cloud"
                                    title="Google Cloud"
                                    width="63"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Google Cloud</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/digitalocean-logo.webp"
                                    src="img/logos/digitalocean-logo.webp"
                                    alt="Digital Ocean"
                                    title="Digital Ocean"
                                    width="67"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Digital Ocean</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/firebase-logo.svg"
                                    src="img/logos/firebase-logo.svg"
                                    alt="Firebase"
                                    title="Firebase"
                                    width="37"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Firebase</p>
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
            <Tab className="nav-link" eventKey="Database" title="Database">
              <div class="show active fade" id="database">
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
                                    data-src="img/logos/mysql-logo.svg"
                                    src="img/logos/mysql-logo.svg"
                                    alt="MySQl"
                                    title="MySQl"
                                    width="73"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">MySQl</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/postgresql-logo.svg"
                                    src="img/logos/postgresql-logo.svg"
                                    alt="PostgreSQL"
                                    title="PostgreSQL"
                                    width="49"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">PostgreSQL</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/mongodb-logo.svg"
                                    src="img/logos/mongodb-logo.svg"
                                    alt="Mongo DB"
                                    title="Mongo DB"
                                    width="23"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Mongo DB</p>
                              </li>
                              <li>
                                <span class="lgt_view">
                                  {" "}
                                  <img
                                    class="lazyload"
                                    loading="lazyload"
                                    data-src="img/logos/cassandra-logo.svg"
                                    src="img/logos/cassandra-logo.svg"
                                    alt="Cassandra"
                                    title="Cassandra"
                                    width="76"
                                    height="50"
                                  />{" "}
                                </span>
                                <p class="semi_bold">Cassandra</p>
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
  );
}

export default TechN;
