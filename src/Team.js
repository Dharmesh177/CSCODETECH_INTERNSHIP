import React,{useEffect} from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function Team(){
    useEffect(() => {
        AOS.init();
    AOS.refresh();
      }, []);
    return (
        <section class="wrapper testimonial-wrapper bg-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12" data-aos="fade-in" >
                    <h2 class="section-title mb-20"><span class="text-marked">Loved by people</span> across the globe_</h2>
                </div>
            </div>
             <div class="row">
                <div class="col-md-4">
                    <div class="team-item mt-40 pr-50 position-relative">
                        {/* <!-- team image --> */}
                        <img class="img-fluid" src="img/team/team-01.jpg" alt="kurati-team"/>
                        {/* <!-- team social links --> */}
                        <div class="team-social">
                            <a href="#0"> <span class="fe-linkedin"></span> </a>
                            <a href="#0"> <span class="fe-twitter"></span> </a>
                            <a href="#0"> <span class="fe-instagram"></span> </a>
                            <a href="#0"> <span class="fe-facebook"></span> </a>
                        </div>
                        {/* <!-- team info (name & designation) --> */}
                        <div class="team-info mt-30">
                            <h5 class="mb-10 font-w-600">Montel Alekender</h5>
                            <p class="small text-uppercase">Product Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="team-item mt-40 pr-50 position-relative">
                        {/* <!-- team image --> */}
                        <img class="img-fluid" src="img/team/team-02.jpg" alt="kurati-team"/>
                        {/* <!-- team social links --> */}
                        <div class="team-social">
                            <a href="#0"> <span class="fe-linkedin"></span> </a>
                            <a href="#0"> <span class="fe-twitter"></span> </a>
                            <a href="#0"> <span class="fe-instagram"></span> </a>
                            <a href="#0"> <span class="fe-facebook"></span> </a>
                        </div>
                        {/* <!-- team info (name & designation) --> */}
                        <div class="team-info mt-30">
                            <h5 class="mb-10 font-w-600">Liliana Moore</h5>
                            <p class="small text-uppercase">UI Designer &amp; Maneger</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="team-item mt-40 pr-50 position-relative">
                        {/* <!-- team image --> */}
                        <img class="img-fluid" src="img/team/team-03.jpg" alt="kurati-team"/>
                        {/* <!-- team social links --> */}
                        <div class="team-social">
                            <a href="#0"> <span class="fe-linkedin"></span> </a>
                            <a href="#0"> <span class="fe-twitter"></span> </a>
                            <a href="#0"> <span class="fe-instagram"></span> </a>
                            <a href="#0"> <span class="fe-facebook"></span> </a>
                        </div>
                        {/* <!-- team info (name & designation) --> */}
                        <div class="team-info mt-30">
                            <h5 class="mb-10 font-w-600">Qaniel Burnside</h5>
                            <p class="small text-uppercase">Back-end Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    );
}

export default Team;