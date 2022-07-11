import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from "react-router-dom";

function Company() {
  return (
    
    <div>
    <Header index="3"/>
        <div class="parallax about-top-slide" id="parallax">
<div class="container">
<div class="row">
<div class="top-slide-con">
<div class="col-md-12 text-left">

<h1 data-aos="fade-in" class="section-title mb-30">A passionate team of <br/>Designers, Developers &amp; Strategists</h1>

</div>

</div>
</div>
</div>
</div>


<div class="container">
<div class="row">
<div class="col-lg-12 col-md-12 text-left">
<div class="about-story-con">
<div class="soln-heading">

<h2 class="text-left" data-aos="fade-in">From Short tales to an IT Story!</h2>
</div>

<p>Customized Mobile Application was the talk of the town in the USA, when we started providing our exclusive web and  <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-Mobile"
                             
                            ><a class="internal-links" href="#">mobile app solutions</a></Link> in the year 2009. We are serving the growing and emerging IT industry with our customized and white label solutions for a decade now. Our Journey is genuinely the Journey of business owners, who grew their presence with us.</p>
<p>Today, we are recognized under the top 50 mobile application companies by renowned researching organizations and firms. We owe the entire credit to our keen team of designers, developers and strategists; who never let things go! In a single word,  <Link style={{ textDecoration: "none" }} to="/">
<a class="internal-links" href="#">CSCODETECH</a></Link> is all about ‘doing things innovatively’ and ‘never giving up’.</p>
</div>
</div>

</div>
</div>

<Footer/>
    </div>
    

    
  )
}

export default Company