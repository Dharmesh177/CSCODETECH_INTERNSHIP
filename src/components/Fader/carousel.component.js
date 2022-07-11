import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    
                    <img src="../img/1.png" />
                </div>
                <div>
                   
                    <img src="../img/2.png" />
                </div>
                <div>
            
                    <img src="../img/3.png" />
                </div>
            </Carousel>
        </div>
    );
}


{/* <div class="carousel-wrapper"> */}
{/* <Carousel infiniteLoop useKeyboardArrows autoPlay>
<div>
    <div>

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
</div>
    </div>
  
</Carousel> */}
// </div> 