import React from 'react'
import './FeaturedCard.css'
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";

export default function FeaturedCard({image,imageWriter,category,date,title,writer,position,delay}) {
  return (
    <div data-aos="fade-down"  data-aos-delay={delay}   className='AA-featured-card h-100'>
        <img src={image} className="img-fluid" alt="" />
        <div className='AA-featured-body'>
            <div className='d-flex justify-content-between align-items-center flex-wrap'>
                <p className='AA-featured-body-category'>{category}</p>
                <p className='A-featured-body-date'>{date}</p>
            </div>
            <h4>{title}</h4>
            <div className='d-flex justify-content-between align-items-center flex-wrap pt-3'>
                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    <img src={imageWriter} alt="" />
                    <div className='AA-writer ps-3'>
                        <h6 className='m-0'>{writer}</h6>
                        <span>{position}</span>
                    </div>
                </div>
                
                <button><FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}
