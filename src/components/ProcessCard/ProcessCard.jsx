import React from 'react'
import './ProcessCard.css'

export default function ProcessCard({step,title,body,delay}) {
  
  return (
    <div class="AA-process-card" data-aos="fade-down"  data-aos-delay={delay}>
        <div class="step">{step}</div>
        <h3 class="title">{title}</h3>
        <p class="body">{body}</p>
    </div>
  )
}
