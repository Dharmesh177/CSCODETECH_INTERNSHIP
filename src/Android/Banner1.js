import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Factsheet from "./Factsheet";
import { Link } from "react-router-dom";

function Banner1() {
  return (
    <div>
      <div class="parallax services-top-main" id="parallax">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="text-left mauto">
                <div class="home-slider-decor mobile-about-img">
                <img class="" loading="lazyload" data-src="img/android-app-main-sc.png" src="img/android-app-main-sc.png" alt="Top Android Development Company" title="Top Android Development Company" width="442" height="490"/>
                </div>
                <h1 class="section-title mb-30" data-aos="fade-in">Top Android Development Company</h1>
                <p>Android App Development is the vision of many budding brands and startups. Well, if your company needs to design a customised Android App, we are here to help to lead a team of top <a class="internal-links" href="#">Android Developers</a>.</p>
                <p>Talk to our Business Head about your android app requirements and let us get started with the first easy step of Android App Consultation.</p>
                <div className="d-inline ml-0 ml-lg-3 my-2 my-lg-0">
                <Link style={{ textDecoration: "none" }} to="/lets-talk">
                  <a className=" butn butn-sm" href="#">
                    Let's talk
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 desktop-about-img">
              <div class="home-slider-decor">
              <img class="" loading="lazyload" data-src="img/android-app-main-sc.png" src="img/android-app-main-sc.png" alt="Top Android Development Company" title="Top Android Development Company" width="442" height="490"/>              </div>
            </div>
          </div>
        </div>
      </div>

      <Factsheet />

      <div class="parallax let-us ios-about-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 text-left">
              <div class="soln-heading "  data-aos="fade-in">
                <h2 class="section-title mb-30">Bridging The Gap With Android<br/> Application Development</h2>
              </div>
              <div class="ios-about-con">
                <div class="ios-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/ios-main-img.png"
                    src="img/ios-main-img.png"
                    alt="HR"
                    title="HR"
                  />
                </div>
                <div class="ios-small-img-box mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/os-sub-img.png"
                    src="img/os-sub-img.png"
                    alt="Management Team"
                    title="Management Team"
                  />
                </div>
                <p>
                Android mobile app users are multiplying in fantastic figures. More android smartphone users give rise to more android app development in the world. We at  <a class="internal-links" href="/">cscodetech</a> help your brand with a customised android application development process that has a systematic procedure of understanding, estimate, analysis and testing.
                </p>
                <p>
                We bridge the gap of your dreams to reality with our android app development service. Be it any country in the world; the android app users are looking forward to user-friendly and dynamic android apps.{" "}
                 
                </p>
                <p>
                  Have an idea? We will offer a{" "}
                  <Link
                              style={{ textDecoration: "none" }}
                              to="/Service-IOS"
                            >
                  <a class="internal-links" href="#">
                    iOS
                  </a>
                  </Link>{" "}
                  analysis and proposal for it. Don’t worry; it will remain
                  completely safe and confidential. Your ideas transformed into
                  realities!
                </p>
                <div class="row">
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-iphone.svg"
                        src="img/s-iphone.svg"
                        alt="iPhone"
                        title="iPhone"
                      />
                      <p>iPhone</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-tvos.svg"
                        src="img/s-tvos.svg"
                        alt="Tv"
                        title="Tv"
                      />
                      <p>Tv</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-watchos.svg"
                        src="img/s-watchos.svg"
                        alt="iWatch"
                        title="iWatch"
                      />
                      <p>iWatch</p>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" >
                    <div class="app-ics">
                      <img
                        class=""
                        loading="lazyload"
                        data-src="img/s-macos.svg"
                        src="img/s-macos.svg"
                        alt="Macbook"
                        title="Macbook"
                      />
                      <p>Macbook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 ios-right-img desktop-about-img">
              <div class="ios-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/ios-main-img.png"
                  src="img/ios-main-img.png"
                  alt="HR"
                  title="HR"
                />
              </div>
              <div class="ios-small-img-box">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/os-sub-img.png"
                  src="img/os-sub-img.png"
                  alt="Management Team"
                  title="Management Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
