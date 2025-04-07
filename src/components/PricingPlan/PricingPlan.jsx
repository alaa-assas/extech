import React from 'react'
import './PricingPlan.css'
import { GiCheckMark } from "react-icons/gi";
import { FaRegQuestionCircle ,FaArrowRight } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";


export default function PricingPlan({isactive,title,price,data,delay}) {
  return (
    <div className='AA-pricing-plan-card' data-aos="fade-down"  data-aos-delay={delay}>
        <div className={`d-flex justify-content-between align-items-center AA-pricing-plan-card-title ${isactive ? 'bg-blue-dark-color' : 'bg-blue-color'}`}>
            <div>
                <h4>
                    {title}
                </h4>
                <p>
                    ${price}/ Month
                </p>
            </div>
            <img src='/assets/images/pricingIcon1_1.svg' alt="" className='h-25'/>
        </div>
        <ul className="list-unstyled w-100">
        { data.map((e, index) => {
                        return (
                            <li className="d-flex justify-content-between align-items-center pb-3">
                                <div>
                                    { e.ischeck ? (<GiCheckMark className='blue-color-text'/>) : (<IoIosClose className='red-color-text' />)} 
                                    <span className="ps-3">{e.name}</span>
                                </div>
                                <FaRegQuestionCircle /> 
                            </li>
                        )
                    })}
                </ul>
        <button className={`${isactive ? 'bg-blue-dark-color text-white' : 'bg-white blue-color-text'}`}>GET STARTED NOW <FaArrowRight /></button>
    </div>
  )
}
