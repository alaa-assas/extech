import React from 'react'
import './ContactSec2.css'
import MyButton from '../MyButton/MyButton'
export default function ContactSec2() {
  return (
    <section className="AA-Contact-sec pb-0 position-relative">
      <div className="container">
         <div className="AA-sec-position-contact p-5 bg-blue-color position-relative rounded">
            <div className="AA-img-cta-shape"><img src="/assets/images/ctaShape1_1.webp" alt="shape" /></div>
            <div className="row gy-5">
               <div className="col-xl-4 d-none d-lg-block position-relative">
                  <div className="AA-custom-img-pos-back position-absolute">
                     <img src="/assets/images/ctaShape2_1.webp" alt="" />
                  </div>
                  <div className="AA-custom-img-pos position-absolute">
                     <img src="/assets/images/ctaThumb.webp" alt="thumb" />
                  </div>
               </div>
               <div className="col-xl-4 d-flex align-items-center">
                  <div className="section-title">
                    <h2 className="text-white">Stay Connected With Cutting Edge IT</h2>
                    </div>
               </div>
               <div className="col-xl-4 d-flex align-items-center">
                  <MyButton title="Talk to a Specialist" color="bg-blue-white" extraClass="d-lg-block d-md-none d-sm-none" IshowIcon={true}></MyButton>
               </div>
            </div>
         </div>
      </div>
   </section>
  )
}
