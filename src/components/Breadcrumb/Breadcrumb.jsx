import './Breadcrumb.css'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'

export default function Breadcrumb({title}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        }, []);
  return (
    <>
        <div className='AA-breadcrumb position-relative'>
            <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                <h2 data-aos="fade-right" className='text-white'>
                    {title}
                </h2>
                <nav data-aos="fade-right" data-aos-delay="400" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-white"><Link to='/'>Home</Link></li>
                        <li className="breadcrumb-item active text-white" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className='AA-first-img position-absolute h-100'>
            <img src='/extech/assets/images/element.webp' className="h-100 img-fluid" alt="" />
        </div>
        <div className='AA-secound-img position-absolute h-100'>
        <img src='/extech/assets/images/line-element.webp' className='h-100 img-fluid' alt="" />
        </div>
    </>
  )
}
