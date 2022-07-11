import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";



function WhyTemplate(props) {
  return (
    <div>
    <section class="parallax montich" data-color="#fafafa">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="soln-heading">

<h2 class="text-center" style={{display: "block"}}>Why Should You Choose {props.title}?</h2>
<p class="text-center py-3" style={{color:"#252b33!important"}}>One of the reasons for the huge popularity of {props.title} is that it is profitable for all business sizes-startups to enterprises. You can hire dedicated {props.cap} developers from India to get scalable and efficient {props.cap} services.
</p>
</div>
</div>
<div class="col-md-12 col-sm-12 madreag">
<div class="row">
<div class="col-lg-4 col-md-4 col-sm-12" data-aos="fade-in">
<div class="security">
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Faster Time-to-market
</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Highly Scalable</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Rich Library
</p>
 </div>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-12" data-aos="fade-in">
<div class="security">
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>High Performance
</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600" ,whiteSpace: "nowrap"}}>High Speed
</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Efficient Caching
</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-12" data-aos="fade-in">
<div class="security">
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Easy to Learn
</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>{props.desc}
</p>
</div>
<div class="enhance">
<img src="./img/rounded_circle.png" alt="" srcset=""/>
<p class="p-3 m-0" style={{fontWeight: "600"}}>Cost-efficient
</p>
</div>
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

export default WhyTemplate