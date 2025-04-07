import React from 'react'
import './RecentPost.css'
import { FaRegCalendarAlt } from "react-icons/fa";

export default function RecentPost({img,date,title}) {
  return (
    <div class="AA-recent-post d-flex justify-content-start align-items-center pb-3">
        <img src={img} className='img-fluid' alt="" />
        <div className='ps-3'>
            <p class="text-white mb-1">
                <FaRegCalendarAlt />
                <span  className='ps-2'>{date}</span>
            </p>
            <p class="AA-desc text-white mb-0">
                {title}
            </p>
        </div>
    </div>
  )
}
