import React from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function DonatedCard({donation}) {
    const {picture,category,title,card_bg_color,text_button_bg_color,id,price,category_color}=donation;
    console.log(donation)
  return (
    <div>
      <div className="card w-[300px] h-[250px] md:h-[260px] md:w-[600px] shadow-xl flex flex-row lg:gap-5" style={{ backgroundColor: `${card_bg_color}` }}>
       <figure><img src={picture} alt=""  className="w-[250px] h-[250px] md:w-[260px] md:h-[260px] rounded-none"/></figure>
       <div className="card-body">
        <div className="pb-4">
        <button className="text-white p-3 w-fit text-sm lg:text-lg" style={{ backgroundColor: `${category_color}` }}>{category}</button>
       <h2 className="lg:card-title " >{title}</h2>
       <h2 className="pt-0 font-bold lg:text-lg" style={{ color: `${text_button_bg_color}` }}>{price}</h2>
        </div>
       
       <div className="lg:mt-3"> 
       <Link to={`/Details/${id}`}> 
       <button className="text-white px-5 py-3 w-fit rounded-lg text-sm lg:text-lg" style={{ backgroundColor: `${text_button_bg_color}` }}>Details</button>
      </Link>
       
       
       </div>
      
      </div>
      </div>

     
    </div>
  )
}
