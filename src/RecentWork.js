import React, {useEffect} from "react";
import "./main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./plugins.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function RecentWork(){
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            once: true,
            startEvent: "load"
        })
    AOS.refresh();
      }, []);
    
    return (
        <div className="RecentWork">
    
    <section id="works" class="wrapper work-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-12 pl-50 pr-50">
                    
                    {/* <!-- horizontal rule --> */}

                    <h2 class="section-title mb-70">Recent Works</h2>
                </div>
            </div>
            <div class="row mesonaryInit">
                 <div class="col-md-6 pl-50 pr-50">
                 <Link
                          style={{ textDecoration: "none" }}
                          to="/FoodDeliveryApp"
                        >
                    <a class="text-dark d-block hover-3d underline-none" href="#">
                        <div class="img-mask rounded-lg">
                            <div class="img-overlay" data-bgc="#F1B61C" data-aos="reveal-bottom" ></div>
                            <img class="img-fluid" src="img/product/swiggy-clone-restaurant-delivery-app.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Swiggy Clone</small>
                        <h4 class="font-w-600 sdd">Multi Restaurant Food, Grocery Ordering & Delivery App</h4>
                    </a>
                    </Link>
                </div>
                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/ServiceApp"
                        >
                    <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                         <div class="img-mask rounded-lg  imgFit">
                            <div class="img-overlay" data-bgc="#796EF2" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/ondemandservice-uclap.jpg" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">UrbanClap Clone</small>
                        <h4 class="font-w-600">On Demand Service App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/MedicineDeliveryApp"
                        >
                    <a class="text-dark d-block underline-none  mt-100" href="#">
                        <div class="img-mask rounded-lg">
                            <div class="img-overlay" data-bgc="#A6D3F2" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/drmedico.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Pharmacy Delivery</small>
                        <h4 class="font-w-600">Medicine & Upload Prescription App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/Multi-Delivery-App-Development"
                        >
                    <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                        <div class="img-mask rounded-lg  imgFit">
                            <div class="img-overlay" data-bgc="#02B15D" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/multiveggi-multivendor.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Multi Vendor</small>
                        <h4 class="font-w-600">Food, Grocery, Pharmacy Delivery App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/Multi-Delivery-App-Development"
                        >
                    <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                        <div class="img-mask rounded-lg">
                            <div class="img-overlay" data-bgc="#00D390" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/gogreen-multivendor.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Multi Vendor</small>
                        <h4 class="font-w-600">Food, Grocery, Pharmacy Delivery App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/MilkDeliveryApp"
                        >
                    <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                        <div class="img-mask rounded-lg  imgFit">
                            <div class="img-overlay" data-bgc="#F093FB" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/milk-delivery-app-dailymilk.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Milk, Grocery, Daily Needs</small>
                        <h4 class="font-w-600">Milk Delivery App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/SingleVenderApp"
                        >
                    <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                        <div class="img-mask rounded-lg">
                            <div class="img-overlay" data-bgc="#F1B61C" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/hungry_grocery_delivery.jpg" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Single Vendor</small>
                        <h4 class="font-w-600">Food, Grocery, Pharmacy Delivery App</h4>
                    </a>
                    </Link>
                </div>
                <div class="col-md-6 pl-50 pr-50">
                <Link
                          style={{ textDecoration: "none" }}
                          to="/GroceryDeliveryApp"
                        >                  <a class="text-dark d-block hover-3d underline-none mt-100" href="#">
                        <div class="img-mask rounded-lg  imgFit">
                            <div class="img-overlay" data-bgc="#F1B61C" data-aos="reveal-bottom"></div>
                            <img class="img-fluid" src="img/product/freshfastgrocery.png" alt="image description"/>
                            <span class="img-icon d-inline-block rounded-circle position-absolute text-light text-center fe fe-chevron-right"></span>
                        </div>
                        <small class="d-block text-uppercase text-muted mt-25 mb-1">Delivery App</small>
                        <h4 class="font-w-600">Food, Grocery, Pharmacy Delivery App</h4>
                    </a>
                    </Link>
                </div>
                {/* <!-- end of work-item --> */}

                <div class="col-lg-8 col-sm-12 pl-50 pr-50 text-left text-lg-right">
                    <a class="butn mt-100" href="work.html">See all works <span class="fe fe-arrow-up-right"></span></a>
                    {/* <!-- all works link button --> */}
                </div>
            </div>
        </div>
    </section>
   
        </div>
    )
}

export default RecentWork;