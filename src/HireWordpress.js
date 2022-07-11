import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./plugins.min.css";
import Header from './Header';
import Footer from './Footer';
import Accordian from './Accordian';
import HowToHire from './HowToHire';
import WhyCSC from './WhyCSC';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmailIcon from '@mui/icons-material/Email';
import WhyTemplate from './WhyTemplate';
import HireBanner from './HireBanner';
import HirePageSer from './HirePageSer';
import TypeOfService from "./Angular/TypeOfService"
import BecomePartner from './BecomePartner';

function HireWordpress() {
  return (
    <div style={{backgroundColor:"#fafafa"}}>
    <Header index="2"/>
    {/* <BecomePartner/> */}
    
         <div class="parallax say-hello-main contact-page-main">
<div class="container">
<div class="row">
<div class="contact-top-heading">
<div class="col-md-12 col-sm-12 text-left">
<div class="soln-heading mt-50" data-aos="fade-in">

<h1 class="section-title mb-30">Let’s Talk <br/>About Your Wordpress Project</h1>
</div>
</div>
</div>
<div class="top-slide-con">
<div class="we-are">
<div class="row">
<div class="col-lg-8 col-md-12 text-left">
<div class="home-contact-form">
<section class="contactdetails">
        
        <div class="right">
            <form action="/" method="post">
                <input type="text" name="name" placeholder="ENTER YOUR NAME"/>
                <input type="text" name="email" placeholder="ENTER YOUR MAIL"/>
                <input type="text" name="mobile" placeholder="ENTER YOUR MOBILE NUMBER" class="mb mb1" style={{
    borderRadius: "7px"}}/>
                <input type="text" name="budget" placeholder="ENTER YOUR APPROX BUDGET" class="mb mb2" style={{ 
    
    borderRadius: "7px"
}}/>
                <textarea rows="8" name="msg" placeholder="BRIEF ABOUT YOUR PROJECT" style={{height:"128px"}}></textarea>
                {/* <!-- <a href="" name="send">SEND MESSAGE</a> --> */}
                <div class="box">
                    <input type="submit" value="SEND MESSAGE" class="f-btn " style={{backgroundColor: "#ffe147",color: "black"}}/>
                </div>
            </form>
        </div>
    </section>


</div>
</div>
<div class="col-lg-4 col-md-12">
<div class="contact-detail">
<div class="con-detail">
<div class="col-md-12 col-sm-12">
<div class="will-get">
<h5>Avail Following Benefits</h5>
<ul>
<li>On-call inquiry assistance</li>
<li>Project consulting by experts</li>
<li>Detailed project estimation</li>
<li>Solutions Demo</li>
</ul>
</div>
<div class="reviews__badges-item reviews__badges-item--clutch extraa">
          <div class="reviews__badge-top ">
            <div class="reviews__badge-reviewed">
              REVIEWED ON
            </div>
            <div class="reviews__badge-stars">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.1284 0.487639C8.33966 -0.162547 9.25949 -0.162546 9.47075 0.487639L10.8857 4.84255C10.9802 5.13332 11.2512 5.33019 11.5569 5.33019L16.1359 5.33019C16.8196 5.33019 17.1038 6.205 16.5508 6.60684L12.8463 9.29832C12.5989 9.47803 12.4954 9.79657 12.5899 10.0873L14.0049 14.4422C14.2161 15.0924 13.472 15.6331 12.9189 15.2313L9.21439 12.5398C8.96704 12.3601 8.63211 12.3601 8.38477 12.5398L4.68026 15.2313C4.12718 15.6331 3.38301 15.0924 3.59427 14.4422L5.00927 10.0873C5.10374 9.79657 5.00025 9.47803 4.7529 9.29832L1.04839 6.60684C0.495313 6.205 0.779559 5.33019 1.4632 5.33019L6.04223 5.33019C6.34796 5.33019 6.61893 5.13332 6.7134 4.84255L8.1284 0.487639Z" fill="#ED4F3C"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.1284 0.487639C8.33966 -0.162547 9.25949 -0.162546 9.47075 0.487639L10.8857 4.84255C10.9802 5.13332 11.2512 5.33019 11.5569 5.33019L16.1359 5.33019C16.8196 5.33019 17.1038 6.205 16.5508 6.60684L12.8463 9.29832C12.5989 9.47803 12.4954 9.79657 12.5899 10.0873L14.0049 14.4422C14.2161 15.0924 13.472 15.6331 12.9189 15.2313L9.21439 12.5398C8.96704 12.3601 8.63211 12.3601 8.38477 12.5398L4.68026 15.2313C4.12718 15.6331 3.38301 15.0924 3.59427 14.4422L5.00927 10.0873C5.10374 9.79657 5.00025 9.47803 4.7529 9.29832L1.04839 6.60684C0.495313 6.205 0.779559 5.33019 1.4632 5.33019L6.04223 5.33019C6.34796 5.33019 6.61893 5.13332 6.7134 4.84255L8.1284 0.487639Z" fill="#ED4F3C"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.1284 0.487639C8.33966 -0.162547 9.25949 -0.162546 9.47075 0.487639L10.8857 4.84255C10.9802 5.13332 11.2512 5.33019 11.5569 5.33019L16.1359 5.33019C16.8196 5.33019 17.1038 6.205 16.5508 6.60684L12.8463 9.29832C12.5989 9.47803 12.4954 9.79657 12.5899 10.0873L14.0049 14.4422C14.2161 15.0924 13.472 15.6331 12.9189 15.2313L9.21439 12.5398C8.96704 12.3601 8.63211 12.3601 8.38477 12.5398L4.68026 15.2313C4.12718 15.6331 3.38301 15.0924 3.59427 14.4422L5.00927 10.0873C5.10374 9.79657 5.00025 9.47803 4.7529 9.29832L1.04839 6.60684C0.495313 6.205 0.779559 5.33019 1.4632 5.33019L6.04223 5.33019C6.34796 5.33019 6.61893 5.13332 6.7134 4.84255L8.1284 0.487639Z" fill="#ED4F3C"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.1284 0.487639C8.33966 -0.162547 9.25949 -0.162546 9.47075 0.487639L10.8857 4.84255C10.9802 5.13332 11.2512 5.33019 11.5569 5.33019L16.1359 5.33019C16.8196 5.33019 17.1038 6.205 16.5508 6.60684L12.8463 9.29832C12.5989 9.47803 12.4954 9.79657 12.5899 10.0873L14.0049 14.4422C14.2161 15.0924 13.472 15.6331 12.9189 15.2313L9.21439 12.5398C8.96704 12.3601 8.63211 12.3601 8.38477 12.5398L4.68026 15.2313C4.12718 15.6331 3.38301 15.0924 3.59427 14.4422L5.00927 10.0873C5.10374 9.79657 5.00025 9.47803 4.7529 9.29832L1.04839 6.60684C0.495313 6.205 0.779559 5.33019 1.4632 5.33019L6.04223 5.33019C6.34796 5.33019 6.61893 5.13332 6.7134 4.84255L8.1284 0.487639Z" fill="#ED4F3C"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.1284 0.487639C8.33966 -0.162547 9.25949 -0.162546 9.47075 0.487639L10.8857 4.84255C10.9802 5.13332 11.2512 5.33019 11.5569 5.33019L16.1359 5.33019C16.8196 5.33019 17.1038 6.205 16.5508 6.60684L12.8463 9.29832C12.5989 9.47803 12.4954 9.79657 12.5899 10.0873L14.0049 14.4422C14.2161 15.0924 13.472 15.6331 12.9189 15.2313L9.21439 12.5398C8.96704 12.3601 8.63211 12.3601 8.38477 12.5398L4.68026 15.2313C4.12718 15.6331 3.38301 15.0924 3.59427 14.4422L5.00927 10.0873C5.10374 9.79657 5.00025 9.47803 4.7529 9.29832L1.04839 6.60684C0.495313 6.205 0.779559 5.33019 1.4632 5.33019L6.04223 5.33019C6.34796 5.33019 6.61893 5.13332 6.7134 4.84255L8.1284 0.487639Z" fill="#ED4F3C"></path>
              </svg>  
            </div>
          </div>
          <div class="reviews__badge-bot">
            <div class="reviews__badge-logo">
              <svg height="32" width="114" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.86099999999999 25" class="reviews__badge-logo-img reviews__badge-logo-img--clutch">
                <g class="clients__logo-path" fill="#000000">
                  <path d="M22.861 0h4v25h-4zM40.861 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zM68.458 19.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631"></path>
                </g>
                <path class="clients__logo-path" d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784" fill="#ED4F3C"></path>
                <path class="clients__logo-path" d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717z" fill="#000000"></path>
              </svg>
            </div>
            <div class="reviews__badge-views" style={{marginLeft:"33px"}}>
              16 REVIEWS
            </div>
          </div>
        </div>
        <div class="reviews__badges-item reviews__badges-item--gf extraa">
          <div class="reviews__badge-top ">
            <div class="reviews__badge-reviewed" >
              REVIEWED ON
            </div>
            <div class="reviews__badge-stars">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.02072 0.487639C8.23198 -0.162547 9.15181 -0.162546 9.36307 0.487639L10.7781 4.84255C10.8725 5.13332 11.1435 5.33019 11.4492 5.33019L16.0283 5.33019C16.7119 5.33019 16.9962 6.205 16.4431 6.60684L12.7386 9.29832C12.4912 9.47803 12.3877 9.79657 12.4822 10.0873L13.8972 14.4422C14.1085 15.0924 13.3643 15.6331 12.8112 15.2313L9.1067 12.5398C8.85936 12.3601 8.52443 12.3601 8.27708 12.5398L4.57258 15.2313C4.0195 15.6331 3.27533 15.0924 3.48659 14.4422L4.90159 10.0873C4.99606 9.79657 4.89256 9.47803 4.64522 9.29832L0.940713 6.60684C0.387632 6.205 0.671878 5.33019 1.35552 5.33019L5.93454 5.33019C6.24028 5.33019 6.51124 5.13332 6.60572 4.84255L8.02072 0.487639Z" fill="#5186EC"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.02072 0.487639C8.23198 -0.162547 9.15181 -0.162546 9.36307 0.487639L10.7781 4.84255C10.8725 5.13332 11.1435 5.33019 11.4492 5.33019L16.0283 5.33019C16.7119 5.33019 16.9962 6.205 16.4431 6.60684L12.7386 9.29832C12.4912 9.47803 12.3877 9.79657 12.4822 10.0873L13.8972 14.4422C14.1085 15.0924 13.3643 15.6331 12.8112 15.2313L9.1067 12.5398C8.85936 12.3601 8.52443 12.3601 8.27708 12.5398L4.57258 15.2313C4.0195 15.6331 3.27533 15.0924 3.48659 14.4422L4.90159 10.0873C4.99606 9.79657 4.89256 9.47803 4.64522 9.29832L0.940713 6.60684C0.387632 6.205 0.671878 5.33019 1.35552 5.33019L5.93454 5.33019C6.24028 5.33019 6.51124 5.13332 6.60572 4.84255L8.02072 0.487639Z" fill="#5186EC"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.02072 0.487639C8.23198 -0.162547 9.15181 -0.162546 9.36307 0.487639L10.7781 4.84255C10.8725 5.13332 11.1435 5.33019 11.4492 5.33019L16.0283 5.33019C16.7119 5.33019 16.9962 6.205 16.4431 6.60684L12.7386 9.29832C12.4912 9.47803 12.3877 9.79657 12.4822 10.0873L13.8972 14.4422C14.1085 15.0924 13.3643 15.6331 12.8112 15.2313L9.1067 12.5398C8.85936 12.3601 8.52443 12.3601 8.27708 12.5398L4.57258 15.2313C4.0195 15.6331 3.27533 15.0924 3.48659 14.4422L4.90159 10.0873C4.99606 9.79657 4.89256 9.47803 4.64522 9.29832L0.940713 6.60684C0.387632 6.205 0.671878 5.33019 1.35552 5.33019L5.93454 5.33019C6.24028 5.33019 6.51124 5.13332 6.60572 4.84255L8.02072 0.487639Z" fill="#5186EC"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.02072 0.487639C8.23198 -0.162547 9.15181 -0.162546 9.36307 0.487639L10.7781 4.84255C10.8725 5.13332 11.1435 5.33019 11.4492 5.33019L16.0283 5.33019C16.7119 5.33019 16.9962 6.205 16.4431 6.60684L12.7386 9.29832C12.4912 9.47803 12.3877 9.79657 12.4822 10.0873L13.8972 14.4422C14.1085 15.0924 13.3643 15.6331 12.8112 15.2313L9.1067 12.5398C8.85936 12.3601 8.52443 12.3601 8.27708 12.5398L4.57258 15.2313C4.0195 15.6331 3.27533 15.0924 3.48659 14.4422L4.90159 10.0873C4.99606 9.79657 4.89256 9.47803 4.64522 9.29832L0.940713 6.60684C0.387632 6.205 0.671878 5.33019 1.35552 5.33019L5.93454 5.33019C6.24028 5.33019 6.51124 5.13332 6.60572 4.84255L8.02072 0.487639Z" fill="#5186EC"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M8.02072 0.487639C8.23198 -0.162547 9.15181 -0.162546 9.36307 0.487639L10.7781 4.84255C10.8725 5.13332 11.1435 5.33019 11.4492 5.33019L16.0283 5.33019C16.7119 5.33019 16.9962 6.205 16.4431 6.60684L12.7386 9.29832C12.4912 9.47803 12.3877 9.79657 12.4822 10.0873L13.8972 14.4422C14.1085 15.0924 13.3643 15.6331 12.8112 15.2313L9.1067 12.5398C8.85936 12.3601 8.52443 12.3601 8.27708 12.5398L4.57258 15.2313C4.0195 15.6331 3.27533 15.0924 3.48659 14.4422L4.90159 10.0873C4.99606 9.79657 4.89256 9.47803 4.64522 9.29832L0.940713 6.60684C0.387632 6.205 0.671878 5.33019 1.35552 5.33019L5.93454 5.33019C6.24028 5.33019 6.51124 5.13332 6.60572 4.84255L8.02072 0.487639Z" fill="#5186EC"></path>
              </svg> 
            </div>
          </div>
          <div class="reviews__badge-bot">
            <div class="reviews__badge-logo">
              <picture class="reviews__badge-logo-img">
                 
                <img class="lazyloaded" src="img/reviews-badge-goodfirms.png"/>
              </picture>
            </div>
            <div class="reviews__badge-views" style={{marginLeft:"33px"}}>
              20 REVIEWS
            </div>
          </div>
        </div>
        <div class="reviews__badges-item reviews__badges-item--upwork extraa">
          <div class="reviews__badge-top">
            <div class="reviews__badge-reviewed ">
              <a class="reviews__badge-link" href="https://www.purrweb.com/reviews/">REVIEWED</a>
               ON
            </div>
            <div class="reviews__badge-stars">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M7.68342 0.487639C7.89468 -0.162547 8.81452 -0.162546 9.02578 0.487639L10.4408 4.84255C10.5352 5.13332 10.8062 5.33019 11.1119 5.33019L15.691 5.33019C16.3746 5.33019 16.6589 6.205 16.1058 6.60684L12.4013 9.29832C12.1539 9.47803 12.0504 9.79657 12.1449 10.0873L13.5599 14.4422C13.7712 15.0924 13.027 15.6331 12.4739 15.2313L8.76941 12.5398C8.52206 12.3601 8.18713 12.3601 7.93979 12.5398L4.23528 15.2313C3.6822 15.6331 2.93804 15.0924 3.1493 14.4422L4.56429 10.0873C4.65877 9.79657 4.55527 9.47803 4.30792 9.29832L0.603417 6.60684C0.0503366 6.205 0.334583 5.33019 1.01823 5.33019L5.59725 5.33019C5.90298 5.33019 6.17395 5.13332 6.26843 4.84255L7.68342 0.487639Z" fill="#6FDA44"></path>
              </svg>  
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M7.68342 0.487639C7.89468 -0.162547 8.81452 -0.162546 9.02578 0.487639L10.4408 4.84255C10.5352 5.13332 10.8062 5.33019 11.1119 5.33019L15.691 5.33019C16.3746 5.33019 16.6589 6.205 16.1058 6.60684L12.4013 9.29832C12.1539 9.47803 12.0504 9.79657 12.1449 10.0873L13.5599 14.4422C13.7712 15.0924 13.027 15.6331 12.4739 15.2313L8.76941 12.5398C8.52206 12.3601 8.18713 12.3601 7.93979 12.5398L4.23528 15.2313C3.6822 15.6331 2.93804 15.0924 3.1493 14.4422L4.56429 10.0873C4.65877 9.79657 4.55527 9.47803 4.30792 9.29832L0.603417 6.60684C0.0503366 6.205 0.334583 5.33019 1.01823 5.33019L5.59725 5.33019C5.90298 5.33019 6.17395 5.13332 6.26843 4.84255L7.68342 0.487639Z" fill="#6FDA44"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M7.68342 0.487639C7.89468 -0.162547 8.81452 -0.162546 9.02578 0.487639L10.4408 4.84255C10.5352 5.13332 10.8062 5.33019 11.1119 5.33019L15.691 5.33019C16.3746 5.33019 16.6589 6.205 16.1058 6.60684L12.4013 9.29832C12.1539 9.47803 12.0504 9.79657 12.1449 10.0873L13.5599 14.4422C13.7712 15.0924 13.027 15.6331 12.4739 15.2313L8.76941 12.5398C8.52206 12.3601 8.18713 12.3601 7.93979 12.5398L4.23528 15.2313C3.6822 15.6331 2.93804 15.0924 3.1493 14.4422L4.56429 10.0873C4.65877 9.79657 4.55527 9.47803 4.30792 9.29832L0.603417 6.60684C0.0503366 6.205 0.334583 5.33019 1.01823 5.33019L5.59725 5.33019C5.90298 5.33019 6.17395 5.13332 6.26843 4.84255L7.68342 0.487639Z" fill="#6FDA44"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M7.68342 0.487639C7.89468 -0.162547 8.81452 -0.162546 9.02578 0.487639L10.4408 4.84255C10.5352 5.13332 10.8062 5.33019 11.1119 5.33019L15.691 5.33019C16.3746 5.33019 16.6589 6.205 16.1058 6.60684L12.4013 9.29832C12.1539 9.47803 12.0504 9.79657 12.1449 10.0873L13.5599 14.4422C13.7712 15.0924 13.027 15.6331 12.4739 15.2313L8.76941 12.5398C8.52206 12.3601 8.18713 12.3601 7.93979 12.5398L4.23528 15.2313C3.6822 15.6331 2.93804 15.0924 3.1493 14.4422L4.56429 10.0873C4.65877 9.79657 4.55527 9.47803 4.30792 9.29832L0.603417 6.60684C0.0503366 6.205 0.334583 5.33019 1.01823 5.33019L5.59725 5.33019C5.90298 5.33019 6.17395 5.13332 6.26843 4.84255L7.68342 0.487639Z" fill="#6FDA44"></path>
              </svg>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="reviews__badge-star">
                <path d="M7.68342 0.487639C7.89468 -0.162547 8.81452 -0.162546 9.02578 0.487639L10.4408 4.84255C10.5352 5.13332 10.8062 5.33019 11.1119 5.33019L15.691 5.33019C16.3746 5.33019 16.6589 6.205 16.1058 6.60684L12.4013 9.29832C12.1539 9.47803 12.0504 9.79657 12.1449 10.0873L13.5599 14.4422C13.7712 15.0924 13.027 15.6331 12.4739 15.2313L8.76941 12.5398C8.52206 12.3601 8.18713 12.3601 7.93979 12.5398L4.23528 15.2313C3.6822 15.6331 2.93804 15.0924 3.1493 14.4422L4.56429 10.0873C4.65877 9.79657 4.55527 9.47803 4.30792 9.29832L0.603417 6.60684C0.0503366 6.205 0.334583 5.33019 1.01823 5.33019L5.59725 5.33019C5.90298 5.33019 6.17395 5.13332 6.26843 4.84255L7.68342 0.487639Z" fill="#6FDA44"></path>
              </svg>   
            </div>
          </div>
          <div class="reviews__badge-bot">
            <div class="reviews__badge-logo">
              <svg width="106" height="32" viewBox="0 0 106 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.2208 20.1396C27.519 20.1396 25.9244 19.4174 24.4757 18.2417L24.8285 16.582L24.8438 16.5205C25.1579 14.7534 26.1545 11.7873 29.2208 11.7873C31.5204 11.7873 33.3908 13.6622 33.3908 15.9672C33.3831 18.2646 31.5128 20.1396 29.2208 20.1396ZM29.2208 7.55363C25.3035 7.55363 22.2681 10.1046 21.0341 14.3C19.1483 11.4646 17.7224 8.0608 16.887 5.1947H12.6709V16.1901C12.6709 18.3569 10.9078 20.124 8.74608 20.124C6.58436 20.124 4.82145 18.3569 4.82145 16.1901V5.1947H0.604983V16.1901C0.589644 20.6929 4.24615 24.3886 8.7381 24.3886C13.2303 24.3886 16.8868 20.6929 16.8868 16.1901V14.3461C17.7069 16.0595 18.711 17.7882 19.9299 19.3251L17.3465 31.4959H21.6624L23.5326 22.6674C25.1731 23.7201 27.0589 24.381 29.2206 24.381C33.8428 24.381 37.6067 20.5852 37.6067 15.9518C37.6067 11.3262 33.8428 7.55363 29.2206 7.55363H29.2208Z" fill="#6FDA44"></path>
                <path d="M50.4773 8.03008L53.1986 19.0254L56.1959 8.03008H59.768L55.1611 23.92H51.5888L48.7604 12.8554L45.9393 23.9122H42.3673L37.76 8.02249H41.3323L44.3294 19.0178L47.0507 8.02249H50.4771V8.03028L50.4773 8.03008ZM68.315 7.55366C63.6775 7.55366 59.9214 11.3263 59.9214 15.9672C59.9214 20.616 63.685 24.381 68.315 24.381C72.9528 24.381 76.7165 20.616 76.7165 15.9672C76.7165 11.3187 72.9528 7.55366 68.315 7.55366ZM68.315 20.9233C65.5862 20.9233 63.3785 18.7103 63.3785 15.975C63.3785 13.2395 65.5938 11.0268 68.315 11.0268C71.0441 11.0268 73.2516 13.2395 73.2516 15.975C73.2516 18.7028 71.0441 20.9233 68.315 20.9233ZM86.9193 11.5876C84.5201 11.5876 82.5807 13.5392 82.5807 15.9365V23.9122H78.9854V8.03008H82.5807V10.4735C82.5807 10.4735 84.1138 8.02229 87.2643 8.02229H88.3681V11.5876H86.9193ZM98.985 15.3527C101.537 13.908 103.27 11.1649 103.27 8.02229H99.6746C99.6746 10.6731 97.5285 12.8246 94.8839 12.8246H94.4008V0.361664H90.8059V23.912H94.4008V16.4283H94.8303C95.1829 16.4283 95.6428 16.6589 95.8498 16.943L100.955 23.9122H105.263L98.985 15.3527Z" fill="black"></path>
              </svg> 
            </div>
            <div class="reviews__badge-views" style={{marginLeft:"33px"}}>
              165 REVIEWS
            </div>
          </div>
          </div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
<HireBanner 
cap="Wordpress"
/>
<TypeOfService/>
<WhyTemplate
  title="Wordpress technologies"
  cap="Wordpress"
  desc="Higher ROI"

/>

<HirePageSer 
  title="Hire Our WordPress Developers For FullStack Services"
  he1="Plugin Development"
  he2="eCommerce Solutions"
  he3="PSD To WordPress"
  he4="WordPress Theme Development"
  he5="WordPress Migration Services"
  he6="WordPress Support and Maintenance"
  p1="If you want extended functionality for your websites, you can rely on our custom plugin development services. Hire dedicated WordPress developers to build customized plugins for your business."
  p2="Hire remote offshore WordPress engineers from the USA to integrate WooCommerce into your websites. Create a fully functional, tailored eCommerce website for your business and build a robust online presence."
  p3="Want to convert your PSD designs to WordPress? We can make your PSD to WordPress conversions flawless. Hire remote WordPress engineers to convert PSD to interactive WordPress."
  p4="Do you want a unique theme for your website to represent your business brand? Hire dedicated WordPress developers from India to create a customized theme for your WordPress website."
  p5="So, you have decided to port to WordPress. If you want to migrate to WordPress seamlessly with no data loss and downtime, rely on our offshore WordPress experts."
  p6="You have launched your WordPress website but are worried about its smooth maintenance. Do not bother; hire dedicated WordPress developers from iCoderz for long-term support and maintenance."
/>


<HowToHire/>

{/* <Accordian/> */}
<Footer/>
    </div>
  )
}

export default HireWordpress