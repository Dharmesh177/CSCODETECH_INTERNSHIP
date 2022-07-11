import React,{useEffect} from "react";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./plugins.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function Banner2(){
    useEffect(() => {
        AOS.init();
    AOS.refresh();
      }, []);

    
    return(
        <>
        <div class="hero-banner-five">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-lg-11 col-md-10 m-auto">
                    <h1 class="font-recoleta hero-heading aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" >Build your <span>Product</span> with Deski pro app.</h1>
                    <p class="hero-sub-heading aos-init" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200" >Deski delivered blazing fast performance, striking word soludtion</p>
                </div>
            </div>
            <div class="d-sm-flex align-items-center justify-content-center button-group mobile-app-icon">
                <a class="d-flex align-items-center ios-button aos-init" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" href="#"><img alt="brand" class="icon" src="img/apple.svg"/>
                <div>
                    <span>Download on the</span><strong>App store</strong>
                </div></a><a class="d-flex align-items-center windows-button aos-init bg-white" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" href="#"><img alt="icon" class="icon" src="img/playstore.svg"/>
                <div>
                    <span>Get it on</span><strong>Google Play</strong>
                </div></a>
            </div>
          
        </div>
        <div class="img-gallery aos-init" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" >
            <div class="container text-center">
                <div class="screen-container"><img alt="shape" class="main-screen" src="img/hungry-grocery-main.png"/><img alt="shape" class="shapes screen-one" src="img/man_right.png"/><img alt="shape" class="shapes screen-two" src="img/man_left.png"/></div>
            </div>
        </div><img alt="shape" class="shapes shape-one" src="http://deskireact.ibthemespro.com/images/shape/133.svg"/><img alt="shape" class="shapes shape-two" src="http://deskireact.ibthemespro.com/images/shape/134.svg"/><img alt="shape" class="shapes shape-three" src="http://deskireact.ibthemespro.com/images/shape/135.svg"/><img alt="shape" class="shapes shape-four" src="http://deskireact.ibthemespro.com/images/shape/136.svg"/>
      
    </div>


    <section id="about" class="about-wrapper pt-100 bg-soft-white">
        <div class="container pb-100">
            <div class="row justify-content-between" >
                <div class="col-lg-6">
                    <h2 class="section-title mb-30">Who we are</h2>
                    <p class="lead">We use agile methodologies to launch projects quickly. We have created several of our own products that work and make profit. We have 25 awesome people in our team! There are professional designers, developers, customer service specialists aboard.</p>
                    <a class="butn butn-sn mt-50" href="about.html">Our Services <span class="fe fe-arrow-up-right"></span></a>
                </div>
                <div class="col-lg-5 mt-5 mt-lg-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="counter-item mb-5">
                                <span class="js-counter">3000</span><span>+</span>
                                <p>Happy customers</p>
                            </div>
                            {/* <!-- counter-item --> */}
                        </div>
                        <div class="col-6">
                            <div class="counter-item mb-5 mb-md-0">
                                <span class="js-counter">250</span><span>+</span>
                                <p>Completed projects</p>
                            </div>
                            {/* <!-- counter-item -->  */}
                        </div>
                        <div class="col-md-12">
                            <ul>
                                <li class="icon-list-item">
                                    <span class="icon rounded-circle"><i class="fe fe-check"></i></span>
                                    <strong class="d-block">Lifetime free update.</strong>
                                    You will get all feature update of Grip for absolutely free.
                                </li>
                                <li class="icon-list-item mt-30">
                                    <span class="icon rounded-circle"><i class="fe fe-check"></i></span>
                                    <strong class="d-block">Customer Support.</strong>
                                    Grip team provide 24/7 best customer support.
                                </li>
                                <li class="icon-list-item mt-30">
                                    <span class="icon rounded-circle"><i class="fe fe-check"></i></span>
                                    <strong class="d-block">Fully Customise</strong>
                                    CSCODETECH apps are highly customizable based on your features and requirements
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end of about wrapper --> */}
</>
    
    
    );
}

export default Banner2;