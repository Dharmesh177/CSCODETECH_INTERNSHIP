import React from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselComponent from "./components/Fader/carousel.component";

function Testinomial() {
  return (
    <section class="wrapper service-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12" >
            <h2 class="section-title">
              Client{" "}
              <span class="text-marked">Appreciations/ Testimonials</span>
            </h2>
          </div>
        </div>

        
        
        <Carousel>
          <Carousel.Item className="cccc">
            <div class="service-item mt-50">
              <button
                class="video-btn inc"
                type="button"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                data-target="#myModal"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-bali.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </button>
              <div class="service-item-info position-relative pl-50">
                <span class="service-count position-absolute font-w-800">
                  /
                </span>
                <h4 class="mb-3">
                  The Best App Development Company{" "}
                  <button
                    class="video-btn inc"
                    type="button"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                    data-target="#myModal"
                  ></button>
                </h4>
                <ul class="service-list service-list-inline">
                  <li>
                    They have a very complete team, where they attended each of
                    my requirements and offered different solutions.
                  </li>
                </ul>
              </div>
            </div>
            
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="service-item mt-50">
              <button
                class="video-btn inc"
                type="button"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                data-target="#myModal"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-usa.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </button>
              <div class="service-item-info position-relative pl-50">
                <span class="service-count position-absolute font-w-800">
                  /
                </span>
                <h4 class="mb-3">
                  Customer Service and Great support Experience
                </h4>
                <ul class="service-list service-list-inline">
                  <li>
                    The team were just awesome, from customer service to
                    development, they were on time an accurate to deliver my
                    project. Commitment to deliver regardless of the amount of
                    time needed to completed the tasks.
                  </li>
                </ul>
              </div>
            </div>

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="service-item mt-50">
              <button
                class="video-btn inc"
                type="button"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                data-target="#myModal"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-malaysia.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </button>
              <div class="service-item-info position-relative pl-50">
                <span class="service-count position-absolute font-w-800">
                  /
                </span>
                <h4 class="mb-3">Excellent Service and Commitment</h4>
                <ul class="service-list service-list-inline">
                  <li>
                    CSCODETECH is the best company so far that I have worked
                    with in IT field. They are very committed to the project and
                    tried their best, even working at late night to support my
                    team in critical situations.
                  </li>
                </ul>
              </div>
            </div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div class="service-item mt-50">
              <button
                class="video-btn inc"
                type="button"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                data-target="#myModal"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-munch-testimonial.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </button>
              <div class="service-item-info position-relative pl-50">
                <span class="service-count position-absolute font-w-800">
                  /
                </span>
                <h4 class="mb-3">CSCODETECH is awesome</h4>
                <ul class="service-list service-list-inline">
                  <li>
                    They are the best team I have ever worked with. Honest,
                    Loyal, and on Budget. Thank You.
                  </li>
                </ul>
              </div>
            </div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          
            <div class="service-item mt-50">
              <button
                class="video-btn inc"
                type="button"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
                data-target="#myModal"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-papercart-testimonial.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </button>
              <div class="service-item-info position-relative pl-50">
                <span class="service-count position-absolute font-w-800">
                  /
                </span>
                <h4 class="mb-3">
                  Excellent provider & Very helpful and trustworthy
                </h4>
                <ul class="service-list service-list-inline">
                  <li>
                    Understand any requests even if we don’t give a clear brief
                    Very flexible team. Extremely Reliable and a Hardworking
                    team and good value for money.
                  </li>
                </ul>
              </div>
            </div>

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
     

    </section>
  );
}

export default Testinomial;
