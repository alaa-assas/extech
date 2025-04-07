import React from 'react'
import './ContactForm.css'
import MyButton from '../../components/MyButton/MyButton'
import { Col } from 'react-bootstrap'

export default function ContactForm() {
  return (
    <>
        <Col lg={6} md={6} sm={12} data-aos="fade-down" className="my-2">
            <label for="YourName" class="form-label">Your Name *</label>
            <input className="form-control p-2" type="text" id="YourName" aria-label="Disabled input example" />
        </Col>
        <Col lg={6} md={6} sm={12} data-aos="fade-down"  data-aos-delay="400" className="my-2">
            <label for="YourEmail" class="form-label">Your Email *</label>
            <input className="form-control p-2" type="email" id="YourEmail" aria-label="Disabled input example" />
        </Col>
        <Col  lg={12} md={12} sm={12} data-aos="fade-down"  data-aos-delay="800" className="my-2">
            <label for="Message" class="form-label">Write Message *</label>
            <textarea className="AA-text-area-custom form-control" id="Message" rows="6"></textarea>
        </Col>
        <Col data-aos="fade-down"  data-aos-delay="1200" className="mt-2">
            <MyButton title="Send Messages" color="bg-blue-color" extraClass="" IshowIcon={true} textColor="text-white"></MyButton>
        </Col>
    </>
  )
}
