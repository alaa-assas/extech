import React from 'react'
import './MyButton.css'
import { FaArrowRight } from "react-icons/fa";

export default function MyButton({title,color,extraClass,IshowIcon,textColor}) {
  return (
    <button className={`AA-button ${extraClass} ${color} ${textColor}`}>
        <span className='pe-2'>{title}</span>
        {
            IshowIcon &&(
                <FaArrowRight className={`${textColor}`} />
            )
        }
    </button>
  )
}
