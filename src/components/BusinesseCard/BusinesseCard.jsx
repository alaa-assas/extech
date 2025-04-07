import React from 'react'
import './BusinesseCard.css'
import MyButton from '../MyButton/MyButton'
export default function BusinesseCard({image,title,body,delay}) {
  return (
    <div className='AA-busines-card' data-aos="fade-down"  data-aos-delay={delay}>
        <img src={image} alt=""/>
        <h3>{title}</h3>
        <p>{body}</p>
        <MyButton title="Read more >>" color="bg-color-white" extraClass="" IshowIcon={false}></MyButton>
    </div>
  )
}
