import React from 'react'
import { FaStar ,FaRegStar} from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import './ClientCard.css'

export default function ClientCard({isactive,description,name,position,img,delay}) {
  return (
    <div data-aos="fade-down"  data-aos-delay={delay}  className={`AA-client-card ${isactive ? 'bg-blue-color' : 'bg-white'}`}>
        <div className="pb-3">
            <FaStar className='color-yellow'/>
            <FaStar className='color-yellow'/>
            <FaStar className='color-yellow'/>
            <FaStar className='color-yellow'/>
            <FaRegStar className='color-yellow'/>
        </div>
        <p className={`${isactive ? 'text-white' : 'color-grey'}`}>
            {description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <img src={img} alt=""/>
                <div className="ps-3">
                    <h4 className={`m-0 ${isactive ? 'text-white' : 'text-black'}`}>{name}</h4>
                    <p className={`${isactive ? 'text-white' : 'color-grey'}`}>{position}</p>
                </div>
            </div>
            <RiDoubleQuotesR  className={`AA-apostrophe ${isactive ? 'text-white' : 'color-grey'}`} />
        </div>
    </div>
  )
}
