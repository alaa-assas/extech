import React from 'react'
import { FaStar } from "react-icons/fa";
import './Review.css'

export default function Review({img,websiteName,reviewNumber,iconStar}) {
  return (
    <div className='d-flex justify-content-start flex-column'>
        <h4 className='text-white'>{iconStar} {websiteName}</h4>
        <div className='d-flex justify-content-start align-items-center flex-wrap'>
            <img src={img} alt='' className='img-fluid'/>
            <div className='ps-2'>
                <div className='AA-icons-group'>
                    <FaStar className='color-yellow'/>
                    <FaStar className='color-yellow'/>
                    <FaStar className='color-yellow'/>
                </div>
                <p className='text-white AA-review-number'>
                    {reviewNumber} reviews
                </p>
            </div>
        </div>
    </div>
  )
}
