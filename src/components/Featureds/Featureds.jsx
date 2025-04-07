import React from 'react'
import './Featureds.css'
import { Container ,Col ,Row } from 'react-bootstrap'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";
import Title from '../Title/Title';
import { FeaturedsData } from '../../Data/FeaturedsData';


export default function Featureds() {
  return (
    <section className='AA-sec-featured'>
        <Container>
        <div className='AA-title-sec'>
            <div className='AA-sub-title'>
                <Title title="BLOG & NEWS" color="blue-color-text"></Title>
                <h2>Featured News And Insights</h2>
            </div>
            <div className='AA-actions-featured'>
                <div><FaArrowLeft /></div>
                <div className='active'><FaArrowRight /></div>
            </div>
        </div>
        <Row>
            { FeaturedsData.map((e, index) => {
                var countDelay = 400*index;
                        return (
                            <Col sm={12} md={6} lg={4} className={e.class}>
                                <FeaturedCard 
                                    image={e.img} 
                                    imageWriter={e.imageWriter}
                                    category={e.category} 
                                    date={e.date} 
                                    title={e.title}
                                    writer={e.writer} 
                                    position={e.position}
                                    delay={countDelay}>
                                </FeaturedCard>
                            </Col>
                        )
                    })}
        </Row>
    </Container>
    </section>
  )
}
