import React from 'react'
import './MemberCard.css'
import { CiShare2 } from "react-icons/ci";

export default function MemberCard({img,memberName,memberPosition,delay}) {
  return (
    <>
        <div className='AA-member-card position-relative' data-aos="fade-up"  data-aos-delay={delay}>
            <div className='AA-member-img'>
                <img src={img} alt="" className='rounded w-100 h-100'/>
                <div className='AA-member-card-share'>
                    <CiShare2 className='text-white' />
                </div>
            </div>
            
            <div className='AA-member-card-info bg-blue-dark-color p-4 rounded w-100 position-relative' >
                
                <h4 className='text-white text-center'>    
                    {memberName}
                </h4>
                <p className='text-white text-center mb-0'>
                    {memberPosition}
                </p>
            </div>
        </div>
    </>
  )
}
