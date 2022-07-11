import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins.min.css";
import Accordion from 'react-bootstrap/Accordion'

function Accordian(){
    return (
       <>
       <div class="wrapper faq-wrapper pt-10" >
        <div class="container">
           <div class="row">
                <div class="col-md-12" data-aos="fade-in" >
                    <h2 class="section-title mb-40"><span class="text-marked">Frequently Asked</span> Questions_</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-12">
       <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How Much it Costs To Develop A Multi Delivery App?</Accordion.Header>
    <Accordion.Body>
    
                                    The cost of developing a Multi Delivery app is dependent on the complexity of functionalities in the app. A multi-vendor app costs much more than a single vendor app.
                                   {/* <!-- <div class="bg-soft-green rounded-lg border px-4 py-3 mt-20">You’ll be sent a confirmation email to verify you so make sure you check your email.</div> --> */}
                                
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How long it takes to develop a Multi Delivery app?</Accordion.Header>
    <Accordion.Body>
    
                                    It usually takes around 2-3 working days that we can deliver and publish on the app stores.
                               
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Apart from app development, are there any additional charges?</Accordion.Header>
    <Accordion.Body>
    We like keeping things transparent and don’t have any hidden charges. We explain the cost of the development to our clients based on the type of model they choose. We don’t charge anything extra.
                                            
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>
    How about the cost after the support time?
    </Accordion.Header>
    <Accordion.Body>
    Once the support time is over, the customer can avail the support on paying according to the requirements.
             
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>
    How do we get updates in the future?
    </Accordion.Header>
    <Accordion.Body>
    We provide 6-months free support on updates, bugs, and requirements. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>
    What type of platform/framework is used?
    </Accordion.Header>
    <Accordion.Body>
    It is built with PHP 5 & MySQL using Core frame work along with scalable structural architecture with high emphasize given to JS, Ajax, JQuery, etc.                        
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>
    Whether the app runs in a single domain or multiple domains?
    </Accordion.Header>
    <Accordion.Body>
    Our product can run on one sub domain only. The client can choose the pricing package accordingly.       
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>
    Can we customize your product as per our needs?
    </Accordion.Header>
    <Accordion.Body>
    Our product can run on one sub domain only. The client can choose the pricing package accordingly.                      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="8">
    <Accordion.Header>
    Will You Upload My Application To The Play Store ?
    </Accordion.Header>
    <Accordion.Body>
    Yes, definitely we will upload your application to the Play Store as this is included in the development Multi Deliverys offered by us. We will submit your app for review as well as approval. As we hold wide experience in developing and deploying applications to different stores, we can do the uploading task easily and you can sit back, relax and use the app once it is uploaded.
                                               
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>
    How often can I get your support / service?
    </Accordion.Header>
    <Accordion.Body>
    Customer satisfaction is dominant for our team. Therefore, we have a dedicated technical team to provide you 24*7 customer support. Just drop your query by email, phone, or Skype. And then you will receive a prompt response within 24 business hours.                 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="10">
    <Accordion.Header>
    Where can I get the demo?
    </Accordion.Header>
    <Accordion.Body>
    We provide the live demo on our website itself. In the case of more details, reach us at support@cscodetech.com
                                                   
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="11">
    <Accordion.Header>
    Do the updates cost separate?
    </Accordion.Header>
    <Accordion.Body>
    During the support period, the updates are free of cost. Then after the support period, the updates are done with the payment.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="12">
    <Accordion.Header>
    How to purchase from CSCODETECH?
    </Accordion.Header>
    <Accordion.Body>
    Just contact our support team either by using mail [ support@cscodetech.com ] or skype[ CSCODETECH ].                                     
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        
                   
        </div>
    </div>
  </div>
  </div>
</>    

    );
}

export default Accordian;