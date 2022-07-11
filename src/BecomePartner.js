import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import { Link } from "react-router-dom";
import ComForPartner from './ComForPartner';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';



function BecomePartner() {
  return (
    <div>
    <Header  index="3"/>
    <section class="parallax services-top-main services-new-top" id="parallax" style={{  
  backgroundImage: "url(" + "https://www.icoderzsolutions.com/image/about_us_banner.png" + ")"
}} >
<div class="container">
<div class="row">
<div class="services-top-center">
<div class="row" style={{height: "auto"}}>
<div class="col-sm-12 col-md-8 col-lg-8">
<div class="mauto text-left">
<h1 data-aos="fade-in" class="section-title mb-30">A passionate team of Designers, Developers &amp; Strategists</h1>
</div>
</div>

</div>
</div>
</div>
</div>
</section>
<div class="parallax solution-main" id="parallax" data-color="#ffffff">
<div class="container">
<div class="row">
<div class="col-xs-12 col-sm-7 col-md-7">
<div class="text-left food-top-content">
<div class="pc-homeimg-main hom-hero food-new-img become1 mobile-about-img">
<img class="" loading="lazyload" data-src="https://www.icoderzsolutions.com/image/become1.webp" src="https://www.icoderzsolutions.com/image/become1.webp" alt="Medicine Delivery App Development" title="Medicine Delivery App Development" width="451" height="500"/>
</div>

<h1 data-aos="fade-in" class="section-title mb-30">Leading Web and Mobile App Development Company</h1>
<p>Be a part of CSCODETECH success story by partnering with us. Our extensive capabilities and cross-industry experience make us an interesting IT software development company in modern times.</p>
<Link style={{ textDecoration: "none" }} to="/lets-talk">
                      <a className=" butn butn-sm get-a-demo" href="#">
                        Get in touch
                      </a>
                    </Link>

</div>
</div>
<div class="col-xs-12 col-sm-5 col-md-5 food-top-img food-top-img-n desktop-about-img">
<div class="become1">
<img class="" loading="lazyload" data-src="" src="img/become1.webp" alt="Medicine Delivery App Development" title="Medicine Delivery App Development" width="451" height="500"/>
</div>
</div>
</div>
</div>
</div>
<ComForPartner/>
<Contact/>
<Footer/>
    </div>
  )
}

export default BecomePartner