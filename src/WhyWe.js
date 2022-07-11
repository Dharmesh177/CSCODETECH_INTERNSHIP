import React ,{useEffect}  from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function WhyWe(){
     useEffect(() => {
        AOS.init();
    AOS.refresh();
      }, []);
    return (
        <>
       
    {/* <!-- end of testimonial-wrapper --> */}
    <section class="py-5 cta-wrapper bg-cover" style={{backgroundImage: `url(img/pattern-bg.jpg)`}}>
      <div class="container">
            <div class="row">
                <div class="col-lg-12 mb-100" >
                    <h1 class="page-header text-center font-w-800 text-uppercase">Why choose CSCODETECH?</h1>
                </div>
                
                <div class="col-lg-12 text-center">
                    <p class="lead">We, at iCoderz solutions, hold an expert team of top restaurant app developers to deliver on-demand Restaurant app development services. Our customized food delivery software solutions provide you with the best ways of expanding your online customer base.</p>
                </div>
                
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                        <img src="img/ic11.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">800+</h5>
                        <p>Apps Live on Appstore</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                        <img src="img/ic2.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">40+</h5>
                        <p>Enterprise Using our Solution</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                       <img src="img/ic1.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">10M+</h5>
                        <p>App Downloads</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                        <img src="img/ic4.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">8+</h5>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                       <img src="img/ic5.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">500+</h5>
                        <p>Satisfied Clients Worldwide</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                       <img src="img/ic10.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">40+</h5>
                        <p>Highly qualified professionals in the team</p>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                        <img src="img/ic7.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">800+</h5>
                        <p>Sales with Exclusive Author</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                       <img src="img/ic9.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">100+</h5>
                        <p>Entrepreneurs Supported</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-40" data-aos="fade-in" >
                    <div class="icon-box text-center bg-white p-3">
                       <img src="img/ic6.png" alt="brand" class="img-icon-cs"/>
                        <h5 class="mb-2">99%</h5>
                        <p>Repeated Client</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  
</>
    );
}

export default WhyWe;