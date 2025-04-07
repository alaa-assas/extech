import React, { useEffect, useState }  from 'react'
import './NavBar.css'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { BsFileExcel } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyButton from '../MyButton/MyButton';


export default function NavBar({ishome}) {
  const [isOpen , setIsOpen] = useState(false)
  const [isSecrol , setIsSecrol] = useState(false)
  const handleopen = () => {
    setIsOpen(!isOpen)
  } 
  useEffect (()=>{
    window.addEventListener('scroll' ,handlesecrol)
  })
  const handlesecrol = ()=> {
    setIsSecrol(window.scrollY>0)
  }
  return (
    <nav className='position-relative'>
        {
            !ishome && (
              <img src="/assets/images/plane.webp" className='AA-image-nav-pos' alt=""/>
            )
          }
      <Container>
    <div className={`AA-navbar ${isSecrol ? "Scrol" :""} ${ishome? "AA-navbar-rounded" : ""}`}>
        <div>
          <img src={`${!isSecrol ? '/assets/images/logo.svg' :'/assets/images/logo-white.svg'}`} alt="" className='logo-nav'/>
        </div>
        <ul className={`AA-nav-Links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to ="#" > Services</Link>
          </li>
          <li>
            <Link to="#"> Pages </Link>
          </li>
          <li>
            <Link to="#"> Blog </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link to="#"> <CiSearch /></Link>
          </li>
          {
            ishome &&(
              <Link to="#"><SlBasket /></Link>
            )
          }
          {
            isOpen && (
              <li>
                <BsFileExcel onClick={handleopen}  />
              </li>
            )
          }
        </ul>

        <div>
          <MyButton title="GET A QUOTE" color="bg-blue-color" extraClass="d-none d-xl-block" IshowIcon={true} textColor="text-white"></MyButton>
        </div>
        <CiSearch className='AA-icon'/>
          {
            ishome &&(
              <SlBasket  className='AA-icon' />
            )
          }
        <FiAlignJustify className='AA-icon' onClick={handleopen}/>
    </div>
    </Container>
    </nav>
      )
}
