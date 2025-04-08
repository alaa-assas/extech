import React, { useEffect } from 'react'
import './Contact.css'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Col,Container,Row } from 'react-bootstrap'
import { IoPlayOutline } from "react-icons/io5";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { ContactData } from '../../Data/ContactData'
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contact() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Breadcrumb title="Contact Us"></Breadcrumb>
      <Container>
      <Row className='py-5'>
        <Col className='p-3'>
          <div className='bg-blue-color p-4 rounded-top'>
            {
              ContactData.map((e,i) => {
                return (
                  <div data-aos="fade-up" className={`d-flex justify-content-start align-items-center bg-blue-color ${e.haveBorder ? 'border-bottom' : ''} py-3`} >
                    <div className='rounded-circle p-3 AA-border'>
                      {e.iconWhite}
                    </div>
                    <div className='ps-2'>
                        <p className='text-white mb-1'>{e.title}</p>
                        <h6 className='text-white'>
                            {e.details}
                        </h6>
                    </div>
                  </div>
                )
              })
            }
          </div>
          
          <div className='position-relative'>
            <img src="/extech/assets/images/video.webp" className="rounded-bottom w-100" alt=""/>
            <div className="AA-video-link">
                <a href="#" className='rounded-circle p-4 bg-white'>               
                    <IoPlayOutline />
                </a>
            </div>
          </div>
        </Col>
        <Col className='px-3 py-5'>
          <h3 className='AA-title-contact'>
            Ready to Get Started?
          </h3>
          <p>
            Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices,
          </p>
          <Row>
            <ContactForm></ContactForm>
          </Row>
        </Col>
      </Row>
      </Container>
      
      <iframe className="AA-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106449.29008581267!2d36.3592213127069!3d33.51333505436019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2suk!4v1723925001550!5m2!1sar!2suk" 
          allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>   
      <Footer></Footer>
    </>
  )
}
