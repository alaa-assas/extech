import React, { useEffect } from 'react'
import { Container ,Col ,Row } from 'react-bootstrap'
import BusinesseCard from '../BusinesseCard/BusinesseCard'
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";
import './Businesses.css'
import Title from '../Title/Title';
import { BusinesseData } from '../../Data/BusinesseData';

export default function Businesses() {
    
  return (
    <section className='AA-sec-businesses border-top'>
        <Container>
        <div className='AA-title-sec'>
            <div className='AA-sub-title'>
                <Title title="Our Services" color="blue-color-text"></Title>
                <h2>Elevating Businesses With IT Ingenuity</h2>
            </div>
            <div className='AA-actions-service'>
                <div><FaArrowLeft /></div>
                <div className='active'><FaArrowRight /></div>
            </div>
        </div>
        <Row>
            { BusinesseData.map((e, index) => {
                var countDelay = 400 * index;
                        return (
                            <Col className={e.class}>
                                <BusinesseCard 
                                    image={e.img} 
                                    title={e.title} 
                                    body={e.body}
                                    delay={countDelay}>                         
                                </BusinesseCard>
                            </Col>
                        )
                    })}
        </Row>
    </Container>
    </section>
  )
}
