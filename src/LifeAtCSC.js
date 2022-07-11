import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';



function LifeAtCSC() {
  return (
    <div>
    <Header index="3"/>
<section class="lifehero-sec">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-12 col-md-12 text-center">
<h1>A Place to Thrive with Passion</h1>
<p>We believe if employees feel comfortable and stress-free, they can unleash their full potential. We share ideas, emotions, success, innovations and grow together as a team. We never let the work and stress lower our enthusiasm to create, innovate, design, and develop. We have office events, cultural celebrations, team outings, and much more that keeps us and our team motivated. We eat, celebrate, laugh, smile, play together while our work spirits are always at their highest. (Josh is always High!)</p>
</div>

</div>
</div>
</section>
<Footer/>
    </div>
  )
}

export default LifeAtCSC