import React from 'react'
import './Footer.css'
import { FaFacebookF,FaTwitter ,FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FiChevronsRight } from "react-icons/fi";
import { Col, Container, Row } from 'react-bootstrap'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FooterLinks } from '../../Data/FooterLinks';
import { Link } from 'react-router-dom';
import RecentPost from '../RecentPost/RecentPost';
import { RecentPostData } from '../../Data/RecentPost';
import { ContactData } from '../../Data/ContactData';


export default function Footer({ishome}) {
  return (
    <footer>
        <div className={`bg-blue-dark-color pb-5 ${ishome ? "padding-extra" : "pt-5"} `} >
        <Container>
            {!ishome && (
              <Row className='AA-contact-info bg-blue-color p-4 mb-5 rounded'>
                {
                    ContactData.map((e,i)=>{
                        return (
                            <Col className={`d-flex justify-content-start align-items-center ${e.haveBorder ? 'border-end border-light' : ''}`}>
                                <div className='rounded-circle p-3 bg-white '>
                                    {e.iconBlue}
                                </div>
                                <div className='ps-2'>
                                    <p className='text-white'>{e.title}</p>
                                    <h6 className='text-white'>
                                        {e.details}
                                    </h6>
                                </div>
                            </Col>
                        )
                    })
                }
              </Row>
            )}
            <Row className='gy-5'>
                <Col xs={12} md={6} lg={3} className='ms-0'>
                    <img src='/assets/images/logo-white.svg' alt="" className='pb-4'/>
                    <p class="AA-desc-footer text-white pb-3">
                         Extexh IT is a Phasellus ultricies aliquam volutpat ullamcorper
                         laoreet neque, a lacinia curabitur lacinia mollis
                    </p>
                    <ul class="list-unstyled d-flex justify-content-start flex-wrap text-white">
                        <li class="px-2 border p-2 me-2">
                        <Link to="#"  target="_blank">
                            <FaFacebookF className='text-white'/>
                        </Link>
                        </li>
                        <li class="px-2 border p-2 me-2">
                        <Link to="#"  target="_blank">
                            <FaTwitter className='text-white'/>
                        </Link>
                        </li>
                        <li class="px-2 border p-2 me-2">
                        <Link to="#"  target="_blank">
                            <FaYoutube className='text-white'/>
                        </Link>
                        </li>
                        <li class="px-2 border p-2 me-2">
                        <Link to="#"  target="_blank">
                            <CiInstagram className='text-white'/>
                        </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={2} className='ms-0'>
                    <h5 class="text-white pb-3">Quick Links</h5>
                    <ul class="list-unstyled">
                        {
                            FooterLinks.map((e, index) => {
                                return (
                                    <li class="mb-2">
                                        <Link className="link-secondary link-underline-opacity-0 text-white" to={e.to}>
                                            <FiChevronsRight />
                                            <span className='ps-2'>{e.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={3} className='ms-0 '>
                    <h5 class="text-white pb-3">Recent Posts</h5>
                    {RecentPostData.map(
                        (e, index) => {
                            return (
                                <RecentPost
                                    title={e.title}
                                    img={e.img}
                                    date={e.date}
                                >
                                </RecentPost>
                            )
                        }
                    )}
                </Col>
                <Col xs={12} md={6} lg={3} className='offset-lg-1'>
                    <h5 class="text-white pb-3">Contact Us</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a class="link-secondary link-underline-opacity-0 text-white" href="#">
                                <MdEmail />
                                <span className='ps-2'>info@example.com</span>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a class="link-secondary link-underline-opacity-0 text-white" href="tel://+228-666-0112">
                                <BsFillTelephoneFill />
                                <span className='ps-2'>+228-666-0112</span>
                            </a>
                        </li>
                    </ul>
                    
                    <div>
                    <div className="input-wrapper rounded mb-3">
                        <input type="email" placeholder="your email address" />
                        <button className={`AA-button-footer`}><FaArrowRight /></button>
                    </div>
                    </div>
                    <input class="form-check-input mb-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                    <span className='text-white ps-2'>
                        I agree to the 
                        <a class="link-secondary text-white" href="tel://+228-666-0112">
                                    <span className='ps-2'>Privacy Policy.</span>
                        </a>
                    
                    </span>
                    
                </Col>
            </Row>
        </Container>
        </div>
        
        <div className="bg-blue-color">
            <Container>
                <div class="d-flex justify-content-between align-items-center flex-wrap pt-3">
                    <p class="text-center text-white">
                            &copy;  All Copyrights 2024 by Extech.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center align-items-center">
                            <li class="pe-4">
                                <a class="link-secondary link-underline-opacity-0 text-white" href="#">
                                    Terms&Condition
                                </a>
                            </li>
                            <li class="">
                                <a class="link-secondary link-underline-opacity-0 text-white" href="#">
                                    Privacy Policy
                                </a>
                            </li>                        
                    </ul>
                </div>
            </Container>
        </div>
       
    </footer>
  )
}
