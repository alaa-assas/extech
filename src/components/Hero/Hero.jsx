import React from 'react'
import './Hero.css'
import { Container ,Col ,Row } from 'react-bootstrap'
import MyButton from '../../components/MyButton/MyButton'
import { CiWavePulse1 } from "react-icons/ci";
import Reviews from '../Reviews/Reviews';
import { GiCheckMark } from "react-icons/gi";


export default function Hero() {
  return (
    <div className='hero'>
        <Container className="h-100 pt-5">
          <Row className='d-flex flex-wrap justify-content-end align-items-end flex-md-row-reverse flex-sm-row flex-lg-row-reverse h-100'>
            <Col lg={6} md={12} sm={12} className='first-column text-center h-100'>
              <img className="img-fluid h-100" src="/extech/assets/images/heroThumb1_1.webp" alt="" />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className='AA-secound-col'>
                <div>
                <p className='AA-text-style-title text-white border border-4 rounded-pill p-2'>
                  <CiWavePulse1 className='AA-font-size' />
                  <span className='ps-2'>Everything You Need To Create A Website</span>
                </p>
                <h1 className='text-white'>
                  Business Innovation With IT Services Expertise
                </h1>
                <div className='w-75 d-flex flex-wrap justify-content-between mb-1'>
                  <ul className='list-unstyled'>
                      <li className='text-white'>
                        <GiCheckMark /> Development and Support
                      </li>
                      <li className='text-white'>
                        <GiCheckMark /> Discovery and Analysis
                      </li>
                    </ul>
                    <ul className='list-unstyled'>
                      <li className='text-white'>
                        <GiCheckMark /> Flexibility and Adaptability
                      </li>
                      <li className='text-white'>
                        <GiCheckMark /> Competitive Advantage
                      </li>
                    </ul>
                </div>
                 
                <MyButton title="GET STARTED" color="bg-color-yellow" extraClass="" IshowIcon={true} textColor="text-white"></MyButton>
                </div>
                
                <Reviews></Reviews>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
