import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import { Link } from "react-router-dom";



function ComForPartner() {
  return (
    <div>
    
    <div class="parallax food-soln-bestof" data-color="services">
<div class="container">
<div class="row" style={{alignItems: "flex-start"}}>
<div class="col-md-12 col-lg-6">
<div class="bestof-right">
<div class="soln-heading" data-aos="fade-in">

<h2 class="section-title mb-30">Channelize Our Business!</h2>
</div>
<span class="lgt_view become2 mobile-about-img">
<img class="" loading="lazyload" data-src="img/become2.webp" src="img/become2.webp" alt="Appointments Made Easy" title="Appointments Made Easy" width="512" height="398"/>
</span>
<p>We welcome various business models to partner with us. If you are looking ahead to join us as a B2B channel partner, we are all ears. In the B2B partnership, we offer complete freedom to our partners to select any services of our company for channelizing it ahead.</p>
<p>In the B2B partnership, you will be leading the project further as a single POC. You will be representing our team as a part of your brand. Also, while selling our services, you can directly add your mark to the service estimates shared by us.</p>
<p>For portfolios and other details asked by your clients, we will be delivering full support and help from our end. We will have an exclusive business manager to guide you further on each development step.</p>
<Link style={{ textDecoration: "none" }} to="/lets-talk">
                      <a className=" butn butn-sm get-a-demo" href="#">
                        Get in touch
                      </a>
                    </Link>
</div>
</div>
<div class="col-md-12 col-lg-6 text-right mobi-img desktop-about-img">
<span class="lgt_view become2">
<img class="" loading="lazyload" data-src="img/become2.webp" src="img/become2.webp" alt="Appointments Made Easy" title="Appointments Made Easy" width="512" height="398"/>
</span>
</div>
</div>
</div>
</div>


<div class="parallax food-soln-bestof" data-color="services" style={{background: "#f1f1f1"}}>
<div class="container">
<div class="row" style={{alignItems: "flex-start"}}>
<div class="col-md-12 col-lg-6 text-left mobi-img desktop-about-img">
<span class="lgt_view become3">
<img class="" loading="lazyload" data-src="img/become3.webp" src="img/become3.webp" alt="Appointments Made Easy" title="Appointments Made Easy" width="512" height="398"/>
</span>
</div>
<div class="col-md-12 col-lg-6">
<div class="bestof-right">
<div class="soln-heading" data-aos="fade-in">

<h2 class="section-title mb-30">Commission-based model!</h2>
</div>
<span class="lgt_view become3 mobile-about-img">
<img class="" loading="lazyload" data-src="img/become3.webp" src="img/become3.webp" alt="Appointments Made Easy" title="Appointments Made Easy" width="512" height="398"/>
</span>
<p>Under the sales partnership model, you will be engaged with us as an affiliate. Here you will be selling our services as a sales manager or sales head. For each project that we have via your sales efforts, you will be paid a fixed or percentage commission.</p>
<p>Sales or affiliate model is quite different from B2B partnership. You will not represent the project on behalf of our development team. You will be leading the project as a sales manager for our brand or organization.</p>
<p>For portfolios and other details asked by your clients, we will be delivering full support and help from our end. For more details on our sales model and packages, connect with our business development manager.</p>
<Link style={{ textDecoration: "none" }} to="/lets-talk">
                      <a className=" butn butn-sm get-a-demo" href="#">
                        Get in touch
                      </a>
                    </Link>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default ComForPartner