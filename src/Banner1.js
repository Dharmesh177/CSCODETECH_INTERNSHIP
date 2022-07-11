import React,{useEffect} from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import Fader from "./components/Fader/Fader";
import AOS from 'aos';
import "aos/dist/aos.css";

function Banner1() {
    useEffect(() => {
        AOS.init();
    AOS.refresh();
      }, []);


  return (
    <section class="banner-wrapper">
      <div class="container-fluid">
        <div class="row align-items-start justify-content-between">
          <div class="col-lg-6 pl-lg-5 pr-lg-5 pl-sm-0">
            <div class="block" data-aos="fade-in">
              <h2 class="d-inline d-md-block">
                We Create Premium <br></br>
                <span class="text-marked">Digital Products</span>
              </h2>
              <h2 class="d-block d-sm-inline d-md-block"> based in India</h2>
              <p class="mt-30 set-max-width">
                We help startups and other businesses to refine, design and
                launch their digital products. We focuses on web & mobile app,
                helping our clients stand out by designing unique interfaces
                that sell the story of your brand.
              </p>

              {/* <!--  <a class="scroll-to-anim mt-50 scroll-bottom border rounded-circle text-dark" href="#about"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></a> --> */}
            </div>
            {/* <!-- end of banner-block --> */}
          </div>
          <div class="col-lg-6 order-lg-last">
            <div class="illustration-holder">
              <img
                src="img/home_top.png"
                alt="shape"
                class="illustration_01 img-fluid"
              />
              <img
                src="img/shape_cube.png"
                alt="shape"
                class="shapes shape-one img-fluid"
              />
              <img
                src="img/shape_round.png"
                alt="shape"
                class="shapes shape-two img-fluid"
              />
              <img
                src="img/shape_squre.png"
                alt="shape"
                class="shapes shape-three img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner1;
