import React from 'react'
import './ContactSec.css'
import { FaArrowRight  } from "react-icons/fa";
import Title from '../Title/Title';
import MyButton from '../MyButton/MyButton';

export default function ContactSec() {
  return (
    <section className="AA-Contact-sec pb-0 position-relative">
      <div className="container">
         <div className="AA-sec-position-contact p-5 bg-blue-color position-relative rounded">
            <div className="AA-img-cta-shape"><img src="/assets/images/ctaShape1_1.webp" alt="shape" /></div>
            <div className="row gy-5">
               <div className="col-xl-3">
                  <div className="">
                     <img src="/assets/images/ctaThumb1_1.webp" alt="thumb" />
                  </div>
               </div>
               <div className="col-xl-6 d-flex align-items-center">
                  <div className="section-title">
                    <Title title="Contact US" color="text-white"></Title>
                    <h2 className="text-white">24/7 Expert Hosting Support Our Customers Love</h2>
                    </div>
               </div>
               <div className="col-xl-3 d-flex align-items-center">
                  <MyButton title="Talk to a Specialist" color="bg-blue-white" extraClass="d-lg-block d-md-none d-sm-none" IshowIcon={true}></MyButton>
               </div>
            </div>
         </div>
      </div>
   </section>
  )
}
