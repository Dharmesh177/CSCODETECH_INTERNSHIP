import React ,{useEffect}  from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./plugins.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import "aos/dist/aos.css";

function Client() {
  useEffect(() => {
    AOS.init();
AOS.refresh();
  }, []);
  return (
    <section
      class="py-5 cta-wrapper bg-cover overlay overlay-90"
      style={{ backgroundImage: `url(img/pattern-bg.jpg)` }}
      data-aos="fade-in" 
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12" data-aos="fade-in" >
            <h2 class="section-title mb-20">
              <span class="text-marked">Our </span>Clientele_
            </h2>
            <p class="text-muted mt-2">Brands that have always trusted us!</p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 partner-carousel py-5">
          {/* <Carousel>
            <Carousel.Item interval={1500}>
              <img class="" src="img/client-f2o.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img class="" src="img/client-f4u.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
            <img class="" src="img/client-qwik.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-shop-lib.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-smiledaily.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-jaipur.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-papercart.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-munch.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-malegao.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img class="" src="img/client-freshv.webp" alt="" />
            </Carousel.Item>
          </Carousel> */}
         
                <div className="clientDiv" data-aos="fade-in" >
                <img class="clientIcon" src="img/client-f2o.webp" alt="" />
               
               
                <img class="clientIcon" src="img/client-freshv.webp" alt="" />
               
                
                <img class="clientIcon" src="img/client-malegao.webp" alt="" />
                
                <img class="clientIcon" src="img/client-munch.webp" alt="" />
                
                <img class="clientIcon" src="img/client-papercart.webp" alt="" />
                
                
                <img class=" clientIcon" src="img/client-jaipur.webp" alt="" />
               
                <img class="clientIcon" src="img/client-smiledaily.webp" alt="" />
                
                
                <img class="clientIcon" src="img/client-f4u.webp" alt="" />
                {/* <img class="clientIcon" src="img/client-f4u.webp" alt="" /> */}
                </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
