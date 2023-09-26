import React from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function HomeCard({filteredCards}) {
    
    const {picture,category,title,card_bg_color,text_button_bg_color,id}=filteredCards || {};
  return (
    <div>
      <Link to={`/Details/${id}`}> 
      <div className="card w-80 lg:w-96 shadow-xl" style={{ backgroundColor: `${card_bg_color}` }}>
       <figure><img src={picture} alt=""  className='w-full h-48'/></figure>
       <div className="card-body">
       <button className="text-white p-3 w-fit rounded-lg" style={{ backgroundColor: `${text_button_bg_color}` }}>{category}</button>
       <h2 className="card-title pt-5" style={{ color: `${text_button_bg_color}` }}>{title}</h2>
      </div>
      </div>
      </Link>
    </div>
  )
}
