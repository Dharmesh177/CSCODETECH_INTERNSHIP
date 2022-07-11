import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./main.css";
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><a
    class="video-btn inc"
    data-toggle="modal"
    href="https://www.youtube.com/embed/Jfrjeg26Cwk"
    target="_blank"
  >
    <img
      class="img-fluid  rounded-lg mb-40"
      src="img/client-bali.jpg"
      alt=""
    />
    <img class="gif-size" src="img/youtube.gif" alt="" />
  </a>
  <div class="service-item-info position-relative pl-50">
    <span class="service-count position-absolute font-w-800">
      /
    </span>
    <h4 class="mb-3">
      The Best App Development Company{" "}
      <a
        class="video-btn inc"
        data-toggle="modal"
        href="https://www.youtube.com/embed/Jfrjeg26Cwk"
        target="_blank"
      ></a>
    </h4>
    <ul class="service-list service-list-inline">
      <li>
        They have a very complete team, where they attended each of
        my requirements and offered different solutions.
      </li>
    </ul>
  </div>
  </div>,
    <div className="item" data-value="2">
                      <a
                class="video-btn inc"
                data-toggle="modal"
                href="https://www.youtube.com/embed/Jfrjeg26Cwk"
                target="_blank"
              >
                <img
                  class="img-fluid  rounded-lg mb-40"
                  src="img/client-usa.jpg"
                  alt=""
                />
                <img class="gif-size" src="img/youtube.gif" alt="" />
              </a>
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
    </div>,
    <div className="item" data-value="3"><a
    class="video-btn inc"
    data-toggle="modal"
    href="https://www.youtube.com/embed/Jfrjeg26Cwk"
    target="_blank"
  >
    <img
      class="img-fluid  rounded-lg mb-40"
      src="img/client-malaysia.jpg"
      alt=""
    />
    <img class="gif-size" src="img/youtube.gif" alt="" />
  </a>
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
  </div></div>,
    <div className="item" data-value="4"><a
    class="video-btn inc"
    data-toggle="modal"
    href="https://www.youtube.com/embed/Jfrjeg26Cwk"
    target="_blank"
  >
    <img
      class="img-fluid  rounded-lg mb-40"
      src="img/client-papercart-testimonial.jpg"
      alt=""
    />
    <img class="gif-size" src="img/youtube.gif" alt="" />
  </a>
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
</div>,
    <div className="item" data-value="5"><a
    class="video-btn inc"
    data-toggle="modal"
    href="https://www.youtube.com/embed/Jfrjeg26Cwk"
    target="_blank"
  >
    <img
      class="img-fluid  rounded-lg mb-40"
      src="img/client-papercart-testimonial.jpg"
      alt=""
    />
    <img class="gif-size" src="img/youtube.gif" alt="" />
  </a>
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
</div>,
];


function FinalTestinomial() {
   
        // $('.popup-video').on('mouseenter', function() {
        //     alert("done1")
        //     $('.video-wrapper').addClass('open-video')
        // })
        // $('.popup-video').on('mouseleave', function() {
        //     alert("done2")
        //     $('.video-wrapper').removeClass('open-video')
        // })
        // $('.html5-video video').prop('muted', true)
        // $('.sound-control svg').on('click', function (){
        //     alert("done3")
        //     if( $('.html5-video video').prop('muted') ) {
        //         alert("done4")
        //         $('.html5-video video').prop('muted', false)
        //     } else {
        //     $('.html5-video video').prop('muted', true)
        //     }
        // });
        // $('.volume-up').hide()
        // $('.sound-control').on('click', function(){
        //     alert("done6")
        //     $('.volume-up').toggle()
        //     $('.volume-mute').toggle()
        // })

  return (
    <div>
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
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    </div>
     </section>
    </div>
  )
}

export default FinalTestinomial