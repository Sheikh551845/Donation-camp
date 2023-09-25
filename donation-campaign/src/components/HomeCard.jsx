import React from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function HomeCard({data}) {
    
    const {picture,category,title,card_bg_color,text_button_bg_color}=data || {};
  return (
    <div>
      <Link to={"/Details"}> 
      <div className="card w-96 shadow-xl" style={{ backgroundColor: `${card_bg_color}` }}>
       <figure><img src={picture} alt=""  className='w-full h-48'/></figure>
       <div className="card-body">
       <button className="text-white p-3 w-fit" style={{ backgroundColor: `${text_button_bg_color}` }}>{category}</button>
       <h2 className="card-title" style={{ color: `${text_button_bg_color}` }}>{title}</h2>
      </div>
      </div>
      </Link>
      
    </div>
  )
}
