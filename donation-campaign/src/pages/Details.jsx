import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams, useSubmit } from 'react-router-dom'

export default function Details() {
 
     const {id}=useParams()
     
     const cards= useLoaderData();

    

     const [card, setCard]=useState([])
     
     useEffect(()=>{
        const findCard = cards?.find(card=> card.id === id)

        setCard(findCard);
     }
     ,[id,cards])

    const{picture,text_button_bg_color,price,description,title}=card

    console.log(text_button_bg_color)

     
  return (
    <div className=" py-12">
      <div className="h-[500px] rounded-md flex flex-col bg-no-repeat bg-cover" style={{ backgroundImage: `url('${picture}')` }}>
        <div className="w-full h-[480px]">

        </div>
        <div className="w-full h-[120px]  bg-black bg-opacity-60 bg-blend-overlay">
             <button className="text-white rounded-lg p-4 text-lg  mt-5 ml-5"   style={{ backgroundColor: `${text_button_bg_color}` }}>Donate {price}</button>
        </div>
      </div>
      <div className="mt-12 p-5">
            <h2 className="text-3xl font-bold pb-3 ">{title}</h2>
            <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}
