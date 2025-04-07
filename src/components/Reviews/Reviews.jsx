import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ReviewsData } from '../../Data/ReviewsData'
import Review from '../Review/Review';
import './Reviews.css'
export default function Reviews () {
  return (
    <Row className='AA-reviews-cards w-100 p-4 rounded-top-3'>
        {
            ReviewsData.map((e,i)=>{
                return (
                    <Col sm={12} md={6} lg={6}>
                        <Review img={e.img} websiteName={e.websiteName} reviewNumber={e.reviewNumber} iconStar={e.iconStar}></Review>
                    </Col>
                );
            })
        }
    </Row>
  )
}
