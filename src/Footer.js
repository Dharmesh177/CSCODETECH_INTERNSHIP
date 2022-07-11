import React, { useEffect } from "react";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./plugins.min.css";
function Footer(){
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout((element) => {}, 0);
        // alert(props.index);
      }, []);
    
    return(
      <div className="Footer">
           <footer className="wrapper bg-dark-purple text-white">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-3 col-md-4 mb-70 mb-md-0">
                    <img className="footer-logo mb-40" src="img/logo.png" alt="" />
                    <h5>We’re part of the CSCODETECH family. We creates new possibilities.</h5>
                    <p className="text-muted mt-50 small">412, Ambika Pinnacle, Mota Varachha, Surat, Gujarat, India</p>
                </div>
                <div className="col-lg-6 col-md-7">
                    <div className="row">
                        <div className="col-6">
                            <h6 className="mb-30">Get in touch</h6>
                            <ul className="mb-70">
                                <li><a href="mailto:support@cscodetech.com" className="line-link small">support@cscodetech.com</a></li>
                                <li><a href="tel:+917276565975" className="line-link small">(+91) 727 646 5975</a></li>
                                <li><a href="https://www.messenger.com/t/cscodetech" className="line-link small">Facebook Messenger</a></li>
                                <li><a href="https://api.whatsapp.com/send/?phone=917276465975&text=Hi+CSCODETECH%2C+I+want+you+to+help+me+with&app_absent=0" className="line-link small">WhatsApp</a></li>
                                <li><a href="https://join.skype.com/invite/UaLkm7W1aZey" className="line-link small">Skype</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h6 className="mb-30">Social media</h6>
                            <div className="social-links mb-70">
                            <a href="#!" className="text-white"><span className="fe"><LinkedInIcon className="fe text-white"/></span></a>
                            <a href="#!" className="text-white"><span className="fe"><TwitterIcon className="fe text-white"/></span></a>
                            <a href="#!" className="text-white"><span className="fe"><InstagramIcon className="fe text-white"/></span></a>

                            </div>
                         
                        </div>
                        <div className="col-sm-12">
                            <h6 className="mb-30">Explorer</h6>
                            <ul className="list-inline footer-nav">
                            <Link
                          style={{ textDecoration: "none" }}
                          to="/About-cscodetech"
                        >
                                <li className="list-inline-item">
                                    <a href="#" className="line-link mr-3">About</a>
                                </li>
                                </Link>
                                <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Hire-Dedicated-Dev-Team"
                            >
                                <li className="list-inline-item">
                                    <a href="#" className="line-link mr-3">Work</a>
                                </li>
                                </Link>
                                <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Mobile"
                             
                            >
                                <li className="list-inline-item">
                                    <a href="#" className="line-link mr-3">Services</a>
                                </li>
                                </Link>
                                <Link
                          style={{ textDecoration: "none" }}
                          to="/Engagement-Model"
                        >
                                <li className="list-inline-item">
                                    <a href="#" className="line-link mr-3">Blog</a>
                                </li>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to="/lets-talk">
                                <li className="list-inline-item">
                                
                                    <a href="#" className="line-link mr-3">Contact</a>
                                </li>
                                </Link>
                                <li className="list-inline-item">
                                    <a href="#" className="line-link mr-3">Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  
    <div className="footer-bottom pb-70 bg-dark-purple">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-md-12">
                    <p className="text-muted small">&copy; 2022. All rights reserved. Designed and developed by  <Link style={{ textDecoration: "none" }} to="/"><a href="#!" className="line-link">CSCODETECH</a></Link></p>
                    <p className="text-center mt-2"><img src="img/dmca.png" /></p>
                    <p className="text-muted small mt-10">Trademark Legal Notice : All product names, trademarks and registered trademarks are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,trademarks and brands does not imply endorsement.
</p>
                </div>
            </div>
        </div>
        <Helmet>
    {/* <script src=
"./js/custome.js" 
    type="text/javascript" />
    <script src=
"./js/app.js" 
    type="text/javascript" /> */}
    </Helmet>
        <a href="#top" className="scroll-to-anim scroll-top text-white rounded-circle text-center"><span className="fe fe-chevron-up"></span></a>
   
    </div>

   
    {/* <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/plugins.min.js"></script>
    <script src="js/app.js"></script>
    <script src=
"./js/custome.js" 
    type="text/javascript" /> */}
      </div>
    );
}

export default Footer;