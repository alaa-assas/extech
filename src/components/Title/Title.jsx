import React from 'react'
import { FaArrowLeft ,FaArrowRight  } from "react-icons/fa";
import './Title.css'
export default function Title({title,IsCenter,color}) {
  return (
    <p className={`AA-title ${IsCenter ? "text-center" : ""} ${color}`}><FaArrowLeft /> <span>{title}</span><FaArrowRight /></p>
  )
}
