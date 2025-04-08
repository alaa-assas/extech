import React from 'react'
import './PricingPlans.css'
import { Col, Container, Row } from 'react-bootstrap'
import PricingPlan from '../PricingPlan/PricingPlan'
import Title from '../Title/Title';
import { PricingPlansData } from '../../Data/PricingPlansData';

export default function PricingPlans() {
  return (
    <section className='AA-sec-pricing-plan'>
        <Container>
            <Title title="OUR PRICING" IsCenter={true} color="blue-color-text"></Title>
            <h2 className="text-center">Our Awesome Pricing Plans</h2>
            <div className='d-flex justify-content-center align-items-center flex-wrap my-3'>
                <div className='AA-tab-pricing'>
                    <span className='AA-active'>Monthly</span>
                    <span>Yearly</span>
                </div>
                <img src='/extech/assets/images/pricingIcon1_2.svg' alt="" className='h-25'/>
                <p className='m-0'>Save 25%</p>
            </div>
            <Row className='gy-3'>
            { PricingPlansData.map((e, index) => {
                var countDelay = 400*index;
                        return (
                            <Col>
                                <PricingPlan 
                                    isactive={e.isactive}
                                    data={e.data}
                                    title={e.title}
                                    price={e.price}
                                    delay={countDelay}
                                >                         
                                </PricingPlan>
                            </Col>
                        )
                    })}
            
            </Row>
        </Container>
    </section>
  )
}
