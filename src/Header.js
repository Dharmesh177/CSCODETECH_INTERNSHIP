import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import "./main.css";
// import "./menu-new.css";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";
import $ from "jquery";
import "../node_modules/jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  const [navicon, setnav] = useState({ display: "none" });
  const [scho, setscho] = useState({ display: "none" });
  const [cont, setcont] = useState({ display: "none" });
  const [ser, setser] = useState({ display: "none" });
  const [com, setcom] = useState({ display: "none" });
  const [hir, sethir] = useState({ display: "none" });
let index=props.index;
  const [sol, setsol] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout((element) => {}, 0);
    // alert(props.index);
  }, []);

  // const handleClick = (noo) => {
  //   const currentClass = document.getElementsByClassName("nav-link");
  //   console.log(currentClass);
  //   for (let i = 0; i < currentClass.length; i++) {
  //     console.log(currentClass[i].classList.contains("active"));
  //     if (currentClass[i].classList.contains("active") == true) {
  //       currentClass[i].classList.toggle("active");
  //       console.log(currentClass[i]);
  //     }
  //     console.log(currentClass[i].classList.contains("active"));
  //   }
  //   currentClass[noo].classList.toggle("active");
  //   console.log(currentClass[noo]);
  // };

  return (
    <>
      <MetaTags>
        <title>Header</title>
        <meta
          name="description"
          content="it is the header component of cscodetech website"
        />
        <meta property="og:title" content="Header" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow" />
        <meta name="allow-search" content="yes" />
        <meta charset="utf-8" />
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Cache-control" content="public" />
        <meta http-equiv="Cache-control" content="private" />
        <meta http-equiv="Cache-control" content="no-cache" />
        <meta http-equiv="Cache-control" content="no-store" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="title"
          content="Top Mobile App Development Company India, USA, UAE | iCoderz Solutions"
        />
        <meta
          name="keywords"
          content=" mobile app development company, app development, food delivery app, food delivery solution, online food app, android app development, iOS app development, India, USA, UAE, Sweden, Turkey, California, Top app development companies, on-demand solution"
        />
        <meta
          name="description"
          content="iCoderz Solutions is one of the Top Web and Mobile App Development Company in India, USA, UAE, Sweden and Turkey. Contact US for QUALITY work."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.icoderzsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top Mobile App Development Company India, USA, UAE | iCoderz Solutions"
        />
        <meta
          property="og:description"
          content="iCoderz Solutions is one of the Top Web and Mobile App Development Company in India, USA, UAE, Sweden and Turkey. Contact US for QUALITY work."
        />
        <meta
          property="og:image"
          content="https://www.icoderzsolutions.com/image/icright-hero.webp"
        />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta
          property="og:image:secure_url"
          content="https://www.icoderzsolutions.com/image/icright-hero.webp"
        />
        <meta
          property="og:image:url"
          content="https://www.icoderzsolutions.com/image/icright-hero.webp"
        />
        <meta property="og:site_name" content="iCoderz Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
      </MetaTags>
      <header className="grip-header sticky">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link style={{ textDecoration: "none" }} to="/">
                  <a className="navbar-brand" href="#index.php">
                    <img src="img/logo.png" alt="dfjfj"></img>{" "}
                    <span>CSCODETECH</span>
                  </a>
                </Link>

                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navTrigger"
                  aria-controls="navTrigger"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    if (navicon.display == "none") setnav({ display: "block" });
                    else setnav({ display: "none" });
                  }}
                >
                  <span className="show fe fe-menu"></span>
                  <span className="hidden fe fe-x"></span>
                </button>

                <div
                  className="collapse navbar-collapse spec"
                  style={navicon}
                  id="navTrigger"
                >
                  <ul className="navbar-nav ml-auto">
                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (scho.display == "none")
                          setscho({ display: "block" });
                        else setscho({ display: "none" });
                      }}
                    >
                      <a
                        className={(index==0)? "nav-link navv active dropdown-toggle" : 
                        "nav-link navv  dropdown-toggle"}
                        href="#!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Solutions
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                        style={scho}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/FoodDeliveryApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              Food Delivery App{" "}
                              <small className="btn-highlight">New</small>
                            </a>
                          </div>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/GroceryDeliveryApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              Grocery Delivery App
                            </a>
                          </div>
                        </Link>

                        <Link
                          style={{ textDecoration: "none" }}
                          to="/MedicineDeliveryApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              Medicine Delivery App
                            </a>
                          </div>
                        </Link>

                        <Link
                          style={{ textDecoration: "none" }}
                          to="/MilkDeliveryApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              On Demand Milk Delivery App
                            </a>
                          </div>
                        </Link>

                        <Link
                          style={{ textDecoration: "none" }}
                          to="/ServiceApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              On Demand Service App
                            </a>
                          </div>
                        </Link>

                        <Link
                          style={{ textDecoration: "none" }}
                          to="/Multi-Delivery-App-Development"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              Multi Delivery App Development
                            </a>
                          </div>
                        </Link>

                        <Link
                          style={{ textDecoration: "none" }}
                          to="/SingleVenderApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              Single Vendor App Development
                            </a>
                          </div>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/SingleVenderApp"
                        >
                          <div>
                            <a className="dropdown-item" href="#">
                              On Demand App Development
                            </a>
                          </div>
                        </Link>
                      </div>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (ser.display == "none") setser({ display: "block" });
                        else setser({ display: "none" });
                      }}
                    >
                      <a
                      
                      className={(index==1)? "nav-link navv active dropdown-toggle" : 
                        "nav-link navv  dropdown-toggle"}
                        href="#!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Services
                      </a>

                      <div
                        className="dropdown-menu  dropdown-column"
                        aria-labelledby="navbarDropdown"
                        style={ser}
                      >
                        {/* <div className="delivery-apps-head">
                        <h5 className="">Our Services</h5>
                        <a href="#" className="dropdown-item">
                          {" "}
                          View all
                        </a>
                      </div> */}

                        {/*
                         */}

                        <div className="row no-gutters distinct">
                          <div className="col-lg-6">
                            <a className="text-center ">
                              <b>Mobile Apps Development</b>
                            </a>
                            <br/>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Mobile"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Mobile &nbsp;&nbsp;&nbsp;&nbsp;
                              </a>
                            </Link>
                           
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-IOS"
                            >
                              <a href="#" className="dropdown-item t-l">
                                iOS &nbsp;&nbsp;&nbsp;&nbsp;
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Android"
                            >
                             
                                <a href="#" className="dropdown-item t-l">
                                  Android
                                </a>
                        
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Bots"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Bots
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Wearable"
                            >
                              <a href="#" className="dropdown-item   t-l">
                                Wearable
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Hybrid"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Hybrid
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-React"
                            >
                              <a href="#" className="dropdown-item t-l">
                                React &nbsp; &nbsp; &nbsp;
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-iPad"
                            >
                              <a href="#" className="dropdown-item t-l">
                                iPad
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Ibeacon"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Ibeacon
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Flutter"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Flutter &nbsp; &nbsp; &nbsp;
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-IoT"
                            >
                              <a href="#" className="dropdown-item  t-l">
                                IoT &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                              </a>
                            </Link>
                           
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Swift"
                            >
                              <a href="#" className="dropdown-item t-l">
                                Swift
                              </a>
                            </Link>
                          </div>
                          {/*  */}

                          <div className="col-lg-6">
                            <a className="text-center ">
                              <b>Website Development</b>
                            </a>
                            <br/>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Website"
                            >
                              <a href="#" className="dropdown-item">
                                Website
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-PHP"
                            >
                              <a href="#" className="dropdown-item">
                                PHP &nbsp;
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Laravel"
                            >
                              <a href="#" className="dropdown-item">
                                Laravel
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Angular"
                            >
                              <a href="#" className="dropdown-item">
                                Angular
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-NodeJS"
                            >
                              <a href="#" className="dropdown-item">
                                NodeJS
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Wordpress"
                            >
                              <a href="#" className="dropdown-item">
                                Wordpress
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Cake-PHP"
                            >
                              <a href="#" className="dropdown-item">
                                Cake PHP
                              </a>
                            </Link>

                            <a class=" text-center">
                              <b>Other Services</b>
                            </a>
                            <br/>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-MVP-Development"
                            >
                              <a href="#" className="dropdown-item text-left">
                                MVP Development
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Extended-Remote-Team"
                            >
                              <a href="#" className="dropdown-item text-left">
                                Extended Remote Team
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Enterprise-Sol-Dev"
                            >
                              <a href="#" className="dropdown-item text-left">
                                Enterprise Solution <br></br> Development
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Hire-Dedicated-Dev-Team"
                            >
                              <a href="#" className="dropdown-item text-left">
                                Hire Dedicated <br></br>Development Team
                              </a>
                            </Link>
                          </div>

                          <div className="col-lg-6"></div>
                        </div>
                      </div>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (hir.display == "none") sethir({ display: "block" });
                        else sethir({ display: "none" });
                      }}
                    >
                      <a
                        className={(index==2)? "nav-link navv active dropdown-toggle" : 
                        "nav-link navv  dropdown-toggle"}
                        href="#!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Hire Developers
                      </a>

                      <div
                        className="dropdown-menu  dropdown-column"
                        aria-labelledby="navbarDropdown"
                        style={hir}
                      >
                        {/* <div className="delivery-apps-head">
                        <a className=""><b>Hire Developers</b></a>
                        <a href="#" className="dropdown-item">
                          {" "}
                          View all
                        </a>
                      </div> */}

                        <div className="row no-gutters distinct">
                          <div className="col-lg-6 ">
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Android-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire Android App <br></br> Developers
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-iOS-developers"
                            >
                              <a href="#" className="dropdown-item">Hire iOS App <br></br> Developers</a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-NodeJS-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire NodeJS <br></br> Developers
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Flutter-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire Flutter App <br></br> Developers
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Swift-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire Swift  <br></br> Developers
                              </a>
                            </Link>

                            
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Web-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire Web <br></br> Developers
                              </a>
                            </Link>
                          </div>
                          {/*  */}

                          <div className="col-lg-6">
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Laravel-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire Laravel <br></br> Developers
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-PHP-developers"
                            >
                              <a
                                href="#"
                                className="dropdown-item"
                                // onClick={(e) => {
                                //   // e.preventDefault();
                                //   const currentClass =
                                //     document.getElementsByClassName("navv");

                                //   for (
                                //     let i = 0;
                                //     i < currentClass.length;
                                //     i++
                                //   ) {
                                //     console.log(currentClass[i].innerHTML);
                                //     console.log(
                                //       currentClass[i].classList.contains(
                                //         "active"
                                //       )
                                //     );
                                //     if (i == 2) {
                                //       currentClass[i].classList.add("active");
                                //     } else if (
                                //       currentClass[i].classList.contains(
                                //         "active"
                                //       ) == true
                                //     ) {
                                //       currentClass[i].classList.remove(
                                //         "active"
                                //       );
                                //     }

                                //     console.log(
                                //       currentClass[i].classList.contains(
                                //         "active"
                                //       )
                                //     );
                                //   }
                                //   console.log("hiiii");
                                //   console.log(
                                //       currentClass[2].classList.contains(
                                //         "active"
                                //       )
                                //     );
                                // }}
                              >
                                Hire PHP <br></br>Developers
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-Wordpress-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire WordPress <br></br> Developers
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Hire-React-developers"
                            >
                              <a href="#" className="dropdown-item">
                                Hire React App <br></br> Developers
                              </a>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      className="nav-item dropdown"
                      onClick={() => {
                        if (com.display == "none") setcom({ display: "block" });
                        else setcom({ display: "none" });
                      }}
                    >
                      <a
                        className={(index==3)? "nav-link navv active dropdown-toggle" : 
                        "nav-link navv  dropdown-toggle"}
                        href="#!"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Company
                      </a>

                      <div
                        className="dropdown-menu  dropdown-column"
                        aria-labelledby="navbarDropdown"
                        style={com}
                      >
                        {/* <div className="delivery-apps-head">
                        <h5 className="">About Company</h5>
                      </div> */}

                        <div className="row no-gutters distinct">
                          <div className="col-lg-6">
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/About-cscodetech"
                            >
                              <a href="#" className="dropdown-item">
                                About CSCODETECH
                              </a>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Testinomials"
                            >
                              <a href="#" className="dropdown-item">
                                Testinomials
                              </a>
                            </Link>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Engagement-Model"
                            >
                              <a href="#" className="dropdown-item">
                                Engagement Model
                              </a>
                            </Link>
                          </div>
                          {/*  */}

                          <div className="col-lg-6">
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Become-Partner"
                            >
                              <a href="#" className="dropdown-item">
                                Become A Partner
                              </a>
                            </Link>

                            <a href="#" className="dropdown-item text-center">
                              Blog
                            </a>

                            <Link
                              style={{ textDecoration: "none" }}
                              to="/Life-At-CSCODETECH"
                            >
                              <a href="#" className="dropdown-item">
                                Life At CSCODETECH
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                    <Link
                              style={{ textDecoration: "none" }}
                              to="/Our-Clients"
                            >
                              <a
                        className={(index==4)? "nav-link navv active" : 
                        "nav-link navv "}
                        href="#"
                        
                      >
                        Our Clients
                      </a>
                            </Link>
                     
                    </li>
                    {/* <li className="nav-item dropdown" > */}
                    {/* onClick={() => {
                    if (cont.display == "none") setcont({ display: "block" });
                    else setcont({ display: "none" });
                  }} */}
                    {/* <a
                      className="nav-link dropdown-toggle"
                      href="##!"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      
                    >
                      Contact
                    </a>
             <div
                      className="dropdown-menu dropdown-column"
                      aria-labelledby="navbarDropdown"
                      style={cont}
                    >
                      <div className="row no-gutters">
                        <div className="col-lg-6">
                          <a className="dropdown-item" href="#">
                            Team
                          </a>
                          <a className="dropdown-item" href="#">
                            Services
                          </a>
                          <a className="dropdown-item" href="#">
                            Partners
                          </a>
                          <a className="dropdown-item" href="#">
                            Case Stydy
                          </a>
                          <a className="dropdown-item" href="#">
                            Blog Details
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a className="dropdown-item" href="#">
                            Pricing
                          </a>
                          <a className="dropdown-item" href="#">
                            FAQ
                          </a>
                          <a className="dropdown-item" href="#">
                            Error 404
                          </a>
                          <a className="dropdown-item" href="#">
                            Privacy &amp; Policy
                          </a>
                          <a className="dropdown-item" href="#">
                            Typography
                          </a>
                        </div>
                      </div>
                    </div> 
                  </li>*/}
                  </ul>
                  <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                    <Link style={{ textDecoration: "none" }} to="/lets-talk">
                      <a className=" butn butn-sm" href="#">
                        Let's talk
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <script src="./js/custome.js" type="text/javascript" />
      <script src="./js/app.js" type="text/javascript" />
    </>
  );
}

export default Header;
