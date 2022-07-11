import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";


function HireBanner(props) {
  return (
    <div>
<section class="parallax industry-serving why-hire-developer gap_drop">
<div class="container my_class">
<div class="row">
<div class="top-slide-con">
<div class="we-are">
<div class="col-md-12 col-sm-12 my_class">
<div class="soln-heading">


</div>
</div>
 </div>
</div>
</div>
<div class="col-md-12 col-sm-12">
<div class="row">
<div class="col-lg-6 col-md-12 my_class">
<h3 class="section-title mb-30 main_heading" data-aos="fade-in">Hire {props.cap} Developers <br/>from CSCODETECH</h3>
<p class="capable">A highly interactive website is a prerequisite if you aim to build a unique online presence for your business. {props.cap} is the most used and trusted CMS ever for its ease of use and quick customizations.</p>
<p class="capable">Do you want a talented {props.cap} engineer to create and manage your {props.cap} website? We can help. Hire dedicated {props.cap} developers from India from our pool of experienced programmers sitting at your company office or home.
</p>
<p class="capable">At CSCODETECH, our expert {props.cap} developers have helped us create a large portfolio of satisfied clients and add a new happy face each day. Hiring remote {props.cap} developers from CSCODETECH means zero overhead costs, timely project completion, and trained experts to deliver desired results. </p>
<a class="button2 hitnes" href="#say-hello-main">Hire {props.cap} Expert</a>
</div>
<div class="col-lg-6 col-md-12">
<div class="company-photos">
<div class="company-left">
<img class="" loading="lazyload" data-src="img/developer9.png" src="img/developer9.png" alt="From Short tales to an IT Story" title="From Short tales to an IT Story"/>
<img class="" loading="lazyload" data-src="img/hire-dev.png" src="img/hire-dev.png" alt="Team 1"/>
<img class="" loading="lazyload" data-src="img/carrer-team3.png" src="img/carrer-team3.png" alt="Team 3"/>
</div>
<div class="company-right">
<img class="" loading="lazyload" data-src="img/carrer-team2.png" src="img/carrer-team2.png" alt="Team 2"/>
<img class="" loading="lazyload" data-src="img/devloper2.jpg" src="img/devloper2.jpg" alt="Team 1"/>
<img class="" loading="lazyload" data-src="img/carrer-hr.png" src="img/carrer-hr.png" alt="HR" title="HR"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </div>
  )

}

export default HireBanner