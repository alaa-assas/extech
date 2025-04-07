import React from 'react'
import './About.css'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import {Col ,Row} from 'react-bootstrap'
import MemberCard from '../../components/MemberCard/MemberCard';
import Title from '../../components/Title/Title';
import MyButton from '../../components/MyButton/MyButton';
import { MemberData } from '../../Data/MemberData'
import { AboutFieldData } from '../../Data/AboutField'

export default function About() {
  return (
    <>
      <NavBar></NavBar>
      <Breadcrumb title="About Us"></Breadcrumb>
      <section className='py-5'> 
      <div className='AA-container-scroller'>
        <ul class="horizontal-scrolling-items">
          {
            AboutFieldData.map((e,i) => {
              return(
                <>
                  <li><img src="/assets/images/asterisk.svg" alt="img" /></li>
                  <li class="AA-fields-row">{e.title}</li>
                </>
              )
            }
            )
          }
        </ul>
        </div>
        <div className='container'>
          <div className='AA-title-sec'>
            <div className='AA-sub-title'>
                <Title title="TEAM MEMBERS" color="blue-color-text"></Title>
                <h2>Our Dedicated Team Members</h2>
            </div>
            <MyButton title="All Members" color="bg-blue-color" extraClass="text-end" IshowIcon={true} textColor="text-white"></MyButton>
        </div>
        <Row className='pb-2 gy-2'>
          {
            MemberData.map((e,i) => {
              var countDelay = 400 *i;
              return (
                <Col lg={3} md={6} sm={12} className='py-3'>
                  <MemberCard delay={countDelay} img={e.img} memberName={e.name} memberPosition={e.position}></MemberCard>
                </Col>
              )}
            )
          }
        </Row>
          <p className='text-center'>1k + Brands Trust Us</p>
          <Row className=''>
            <Col className='d-none d-lg-block text-center AA-grey-img'>
              <img src="/assets/images/envato.png" alt="" className='img-fluid'/>
            </Col>
            <Col className='d-none d-md-block text-center AA-grey-img'>
              <img src="/assets/images/envato.png" alt="" className='img-fluid'/>
            </Col>
            <Col className='text-center'>
              <img src="/assets/images/envato.png" alt="" className='img-fluid'/>
            </Col>
            <Col className='d-none d-md-block text-center AA-grey-img'>
              <img src="/assets/images/envato.png" alt="" className='img-fluid'/>
            </Col>
            <Col className='d-none d-lg-block text-center AA-grey-img'>
              <img src="/assets/images/envato.png" alt="" className='img-fluid'/>
            </Col>
          </Row>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}
