import React,{useEffect} from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function Feature(){
  useEffect(() => {
    AOS.init();
AOS.refresh();
  }, []);
    return (
        
     <section class="new-top-div-main">
     <div class="container">
       <div class="row">
         <div class="top-new-top-clickitle text-center" >
           <h2>Top Features</h2>
           <p>We strive to create something that doubles up your revenues and attracts more foodies to your business with an attractive UI/UX that will make your customers come back with the assistance of our well known food delivery clone script. It’s time to develop on demand food delivery app for your business and fly upwards with revenues</p>
         </div>
       </div>
     </div>
     <div class="new-top-click"></div>
     <div class="new-top-div">
       <nav id="top-menu">
         <ul>
           <li class="active"><a href="#app-layout-main">Customer App</a></li>
           <li><a href="#app-layout-main1">Driver App</a></li>
           <li><a href="#app-layout-main2">Restaurant App</a></li>
           <li><a href="#app-layout-main3">Restaurant Panel</a></li>
           <li><a href="#app-layout-main4">Admin Panel</a></li>
         </ul>
       </nav>
     </div>
     <div class="new-top-div-con">
       <section id="app-layout-main" class="main-app-feature customer-app-main">
         <div class="container-fluid">
           <div class="row">
             <div class="col-md-12">
               <div class="list-app-con text-center">
                 <div class="col-md-12" data-aos="fade-in" >
                   <h2 class="section-title" >Customer <span class="text-marked">App_</span></h2>
               </div>
                 <p>A Customer Application is designed with ease to help the customers place their food <br></br>delivery order by browsing multiple restaurants and its menu.</p>
               </div>
             </div>
             <div class="col-lg-4 text-center col-md-12 col-sm-12">
               <div class="app-img-main">
                 <img class="lazyload img-fluid" loading="lazyload" data-src="img/eatggy-multi-restaurant-customer-app.png" src="img/eatggy-multi-restaurant-customer-app.png" alt="Surat’s Prominent Chinese Food Delivery App" title="Surat’s Prominent Chinese Food Delivery App"/>
               </div>
             </div> 
             <div class="col-lg-8 col-md-12 col-sm-12">
               <div class="feature-list-main">
                 <ul>
                   <li>
                       <span>1</span>
                       <div class="app-feature-type">
                           <h5>Nearby Restaurants</h5>
                           <p>Customer’s search for food items in nearby restaurants. He‌ ‌can‌ ‌also‌ ‌search‌ ‌the‌ ‌name‌ ‌of‌ ‌restaurant‌ ‌or‌ ‌specific‌ ‌category‌</p>
                       </div>
                   </li>
                   <li>
                       <span>2</span>
                       <div class="app-feature-type">
                           <h5>Restaurant Details</h5>
                           <p>Users can view the various restaurants, compare, and choose or add food to the cart and customize if needed.</p>
                       </div>
                   </li>
                   <li>
                       <span>3</span>
                       <div class="app-feature-type">
                           <h5>Push Notifications</h5>
                           <p>Customer will receive notifications as soon as he placed the order. He will receive the notification since his food will start preparing, delivery man will start from restaurant, delivery man will complete the order.</p>
                       </div>
                   </li>
                   
                   <li>
                       <span>4</span>
                       <div class="app-feature-type">
                           <h5>Coupon Management</h5>
                           <p>Customer‌ ‌can‌ ‌avail‌ ‌the‌ ‌coupon‌ ‌codes/promo‌ ‌codes/offers‌ ‌given‌ ‌my‌ restaurants‌ ‌or‌ ‌admins.‌ ‌He‌ ‌can‌ ‌add‌ ‌the‌ ‌coupon‌ ‌codes‌ ‌in‌ ‌his‌ ‌final‌ ‌cart‌ ‌and‌ ‌hence‌ ‌utilize‌ ‌it‌ ‌by‌ ‌lowering‌ ‌final‌ ‌amount.‌</p>
                       </div>
                   </li>
                   <li>
                       <span>5</span>
                       <div class="app-feature-type">
                           <h5>Multi Payments</h5>
                           <p>Users can make online payments using the food delivery app. We‌ ‌have‌ ‌Cash‌ ‌on‌ ‌Delivery‌ ‌(COD)‌ ‌enabled‌</p>
                       </div>
                   </li>
                   <li>
                       <span>6</span>
                       <div class="app-feature-type">
                           <h5>Rating & Reviews</h5>
                           <p>Customers can give feedback, reviews, and ratings based on service, pricing, and quality.</p>
                       </div>
                   </li>
                   <li>
                       <span>7</span>
                       <div class="app-feature-type">
                           <h5>Referrals & Earn</h5>
                           <p>This feature allows customers to refer to the app to friends & family. Upon successful referral, the amount will be credited to customers in-app wallet.</p>
                       </div>
                   </li>
                   <li>
                       <span>8</span>
                       <div class="app-feature-type">
                           <h5>Offers & Promotion</h5>
                           <p>In order to elevate their business transaction, restaurants can intently devise propaganda strategies by providing various offers and discounts.</p>
                       </div>
                   </li>
                 </ul>
               </div>
               
             </div>
           </div>
         </div>
       </section>
       <section id="app-layout-main1" class="main-app-feature admin-panel-main">
         <div class="container-fluid">
           <div class="row">
             <div class="col-md-12">
               <div class="list-app-con text-center">
                   <div class="col-md-12" data-aos="fade-in">
                   <h2 class="section-title">Delivery Boy <span class="text-marked">App_</span></h2>
               </div>
                 <p>A Driver Application is designed with great features and user-friendliness to accept or reject the <br></br>restaurant delivery request as per the availability.</p>
               </div>
             </div>
             <div class="col-lg-8 col-md-12 col-sm-12">
               <div class="feature-list-main">
                 <ul>
                   <li>
                       <span>1</span>
                       <div class="app-feature-type">
                           <h5>Profile Management</h5>
                           <p>Drivers, after login, can make their profile on the app. They can also update the basic details like name, email, contact number, address and other essential useful things in a delivery process.</p>
                       </div>
                   </li>
                   <li>
                       <span>2</span>
                       <div class="app-feature-type">
                           <h5>Manage Orders</h5>
                           <p>Drivers receive orders on this app and can manage multiple deliveries using the app.</p>
                       </div>
                   </li>
                   <li>
                       <span>3</span>
                       <div class="app-feature-type">
                           <h5>Order History </h5>
                           <p>Drivers can save and manage all on going & completed order information of food orders and deliveries on the app.</p>
                       </div>
                   </li>
                   <li>
                       <span>4</span>
                       <div class="app-feature-type">
                           <h5>Realtime Get Route</h5>
                           <p>Drivers can track real-time customer locations, get route directions on maps.</p>
                       </div>
                   </li>
                   <li>
                       <span>5</span>
                       <div class="app-feature-type">
                           <h5>Realtime Notification</h5>
                           <p>Drivers get notifications of the new order & orders placed by customers on the app.</p>
                       </div>
                   </li>
                   <li>
                       <span>6</span>
                       <div class="app-feature-type">
                           <h5>Availability Settings</h5>
                           <p>Drivers can choose to go offline or set their availability during different times in a day.</p>
                       </div>
                   </li>
                   <li>
                       <span>7</span>
                       <div class="app-feature-type">
                           <h5>Delivery Statics</h5>
                           <p>Drivers receive all the statics information like Total Delivered Item, Gross Sales, Reject order, Order Recived, Tips, Cash amount.</p>
                       </div>
                   </li>
                   <li>
                       <span>8</span>
                       <div class="app-feature-type">
                           <h5>Accept/Reject Orders</h5>
                           <p>Delivery executives are authorized to agree or disagree with any delivery requests assigned to them and can flag their proximity based on convenience.</p>
                       </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="col-lg-4 text-center col-md-5 col-sm-12 desktop-about-img">
               <div class="app-img-main">
                 <img class="lazyload img-fluid" loading="lazyload" data-src="img/eatggy-multi-restaurant-delivery-app.png" src="img/eatggy-multi-restaurant-delivery-app.png" alt="Kolkata’s Prominent Chinese Food Delivery App" title="Kolkata’s Prominent Chinese Food Delivery App"/>
               </div>
             </div> 
           </div>
         </div>
       </section>
       <section id="app-layout-main2" class="main-app-feature partner-app-main">
         <div class="container-fluid">
           <div class="row">
             <div class="col-md-12" data-aos="fade-in">
               <div class="list-app-con text-center">
                 <div class="col-md-12" >
                   <h2 class="section-title">Restaurant <span class="text-marked">App_</span></h2>
               </div>
                  
                   <p>A restaurant partner app helps to accept or reject the food delivery orders placed by the customers.<br></br> It also helps in customizing the menu items as per availability.</p>
               </div>
             </div> 
             <div class="col-lg-4 col-md-12 col-sm-12 text-center">
               <div class="app-img-main">
                 <img class="lazyload img-fluid" loading="lazyload" data-src="img/eatggy-multi-restaurant-app.png" src="img/eatggy-multi-restaurant-app.png" alt="Kolkata’s Prominent Chinese Food Delivery App" title="Kolkata’s Prominent Chinese Food Delivery App"/>
               </div>
             </div> 
             <div class="col-lg-8 col-md-12 col-sm-12">
               <div class="feature-list-main">
                 <ul>
                   <li>
                       <span>1</span>
                       <div class="app-feature-type">
                           <h5>Receive Orders on Mobile</h5>
                           <p>The Restaurants can receive orders on their smart phone or on tablet. This helps restaurants to manage their orders in realtime and effectively.</p>
                       </div>
                   </li>
                   <li>
                       <span>2</span>
                       <div class="app-feature-type">
                           <h5>Menu Management</h5>
                           <p>Restaurants can manage menu or menus based on customer food preferences and availability.</p>
                       </div>
                   </li>
                   <li>
                       <span>3</span>
                       <div class="app-feature-type">
                           <h5>Manage Orders</h5>
                           <p>Restaurants can manage all the orders in one place, can get a complete view of the orders, including ongoing, dispatched, pickups, and scheduled ones.</p>
                       </div>
                   </li>
                   <li>
                       <span>4</span>
                       <div class="app-feature-type">
                           <h5>Dish Management</h5>
                           <p>The restaurants can update the status of the listed dish items as available or not available.</p>
                       </div>
                   </li>
                   <li>
                       <span>5</span>
                       <div class="app-feature-type">
                           <h5>Assignment</h5>
                           <p>Restaurants can assign new order to delivery boy even resturant owner can contact the delivery boy.</p>
                       </div>
                   </li>
                   <li>
                       <span>6</span>
                       <div class="app-feature-type">
                           <h5>Payment History</h5>
                           <p>Restaurants can manage all the orders in one place, can get a complete view of the orders, including ongoing, dispatched, pickups, and scheduled ones.</p>
                       </div>
                   </li>
                   <li>
                       <span>7</span>
                       <div class="app-feature-type">
                           <h5>Push Notifications</h5>
                           <p>Restaurants get notifications about the new order, status of received or shipped orders, the payment received online, and other important updates.</p>
                       </div>
                   </li>
                   {/* <!-- <li>
                     <h5>Nearby Restaurants</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing</p>
                   </li>
                   <li>
                     <h5>Nearby Restaurants</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna adipiscing</p>
                   </li> --> */}
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section id="app-layout-main3" class="cs-main-feature admin-panel-main">
         <div class="container-fluid">
           <div class="row">
             <div class="col-md-12" data-aos="fade-in">
               <div class="list-app-con text-center">
                 <div class="col-md-12" >
                   <h2 class="section-title">Restaurant <span class="text-marked">Panel_</span></h2>
               </div>
                  
                 <p>Manage Restaurants with complete access via Management Page.</p>
               </div>
             </div>
            
             <div class="col-lg-8 col-md-12 col-sm-12">
               <div class="feature-list-main">
                 <ul>
                   <li>
                       <span>1</span>
                       <div class="app-feature-type">
                           <h5>Category Management</h5>
                           <p>We have an efficient product catalog management system to increase the sales, the vendors can plan and manage the products.</p>
                       </div>
                   </li>
                   <li>
                       <span>2</span>
                       <div class="app-feature-type">
                           <h5>Vendor Dashboard</h5>
                           <p>Add/edit restaurant info details and other settings like category, all items, store open/close, earning report, photo gallery etc.</p>
                       </div>
                   </li>
                   <li>
                       <span>3</span>
                       <div class="app-feature-type">
                           <h5>Manage Withdrawl Request</h5>
                           <p>Admin panel enabling the manual vendor withdrawal request, you can receive the requests, make the transaction</p>
                       </div>
                   </li>
                   <li>
                       <span>4</span>
                       <div class="app-feature-type">
                           <h5>Vendor Order Management</h5>
                           <p>Vendors can manage their invoices, New Order, Cancelled Order, Completed Order their dashboard.</p>
                       </div>
                   </li>
                   <li>
                       <span>5</span>
                       <div class="app-feature-type">
                           <h5>General Settings</h5>
                           <p>The setting are being updated by Restaurants can do anytime OPEN OR CLOSE ?</p>
                       </div>
                   </li>
                   <li>
                       <span>6</span>
                       <div class="app-feature-type">
                           <h5>Any Type Of Addons And Combinations</h5>
                           <p>MENU allows you to create any combination of addons and side dishes or anything in food menu that is unique to your system. </p>
                       </div>
                   </li>
                   <li>
                       <span>7</span>
                       <div class="app-feature-type">
                           <h5>Analyzing & Reporting</h5>
                           <p>Get real-time insights into reports and other information to identify the growth and expansion opportunities.</p>
                       </div>
                   </li>
                   <li>
                       <span>8</span>
                       <div class="app-feature-type">
                           <h5>Photo Gallary</h5>
                           <p>Unique profiles can be created by the restaurant owner for his restaurant along with images..</p>
                       </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="col-lg-4 col-md-12 col-sm-12 text-center">
               <div class="app-img-main">
                 <img class="lazyload img-fluid" loading="lazyload" data-src="img/eatggy-multi-restaurant-app.png" src="img/eatggy-multi-restaurant-app.png" alt="Kolkata’s Prominent Chinese Food Delivery App" title="Kolkata’s Prominent Chinese Food Delivery App"/>
               </div>
             </div> 
           </div>
         </div>
       </section>
       <section id="app-layout-main4" class="cs-main-feature admin-panel-main">
         <div class="container-fluid">
           <div class="row">
             <div class="col-md-12" data-aos="fade-in">
               <div class="list-app-con text-center">
                 <div class="col-md-12" >
                   <h2 class="section-title">Admin <span class="text-marked">Panel_</span></h2>
               </div>
                  
                 <p>The Admin Dashboard helps restaurant owners to manage the complete delivery process.</p>
               </div>
             </div>
             <div class="col-lg-4 col-md-12 col-sm-12 text-center">
               <div class="app-img-main">
                 <img class="lazyload img-fluid" loading="lazyload" data-src="img/eatggy-multi-restaurant-app.png" src="img/eatggy-multi-restaurant-app.png" alt="Kolkata’s Prominent Chinese Food Delivery App" title="Kolkata’s Prominent Chinese Food Delivery App"/>
               </div>
             </div> 
             <div class="col-lg-8 col-md-12 col-sm-12">
               <div class="feature-list-main">
                 <ul>
                   <li>
                       <span>1</span>
                       <div class="app-feature-type">
                           <h5>User Management</h5>
                           <p>The dashboard includes the details of customers, details of customer address and information</p>
                       </div>
                   </li>
                   <li>
                       <span>2</span>
                       <div class="app-feature-type">
                           <h5>Restaurants Management</h5>
                           <p>Manages details of all the restaurants by adding, updating, and removing restaurants from the list.</p>
                       </div>
                   </li>
                   <li>
                       <span>3</span>
                       <div class="app-feature-type">
                           <h5>Delivery Boy Management</h5>
                           <p>It includes the details of all the drivers, their profile information, and other details.</p>
                       </div>
                   </li>
                   <li>
                       <span>4</span>
                       <div class="app-feature-type">
                           <h5>Payment & Commission Management</h5>
                           <p>Restaurant owners can set payments and manage commission rates directly from the panel.</p>
                       </div>
                   </li>
                   <li>
                       <span>5</span>
                       <div class="app-feature-type">
                           <h5>Promo codes</h5>
                           <p>Admin can provide additional offers apart from the ones that restaurants provide to boost their sales and customer retention.</p>
                       </div>
                   </li>
                   <li>
                       <span>6</span>
                       <div class="app-feature-type">
                           <h5>Order Management</h5>
                           <p>The new order management with view invoice and print the invoice for the upcoming orders.</p>
                       </div>
                   </li>
                   <li>
                       <span>7</span>
                       <div class="app-feature-type">
                           <h5>Multiple Payment</h5>
                           <p>Allows its customer to pay comfortably out of their choice. Cash on Delivery (COD), PayPal, Razorpay, Stripe, PayStack, FlutterWave, Paytm, SenangPay are the options in payment.</p>
                       </div>
                   </li>
                   <li>
                       <span>8</span>
                       <div class="app-feature-type">
                           <h5>Dynamic Pages</h5>
                           <p>Admin can create unlimited pages like Privacy Policy, Terms & Conditions, Contact Us, Faq's etc</p>
                       </div>
                   </li>
                 </ul>
               </div>
             </div>
             
           </div>
         </div>
       </section>
     </div>
   </section>
    );
}

export default Feature;