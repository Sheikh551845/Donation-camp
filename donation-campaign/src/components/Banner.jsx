import React from 'react'

export default function Banner() {
  return (
    <div className='h-[70vh] bg-cover bg-center flex items-center justify-center ' style={{
        backgroundImage: `url('https://i.ibb.co/WzRWD9B/8035401.jpg')`,
        backgroundColor: 'rgba(255, 255, 255, 0.70)',
        backgroundBlendMode: 'overlay',
           backgroundSize: '100% 100%'
      }}>         <div className="flex flex-col gap-5 items-center justify-center">
                    <p className="text-center text-4xl font-bold">I Grow By Helping People In Need</p>
                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 items-center justify-center">
                    <input type="text"  placeholder="Search here..."  style={{
                border: '1px solid #ccc', 
                padding: '8px', 
                width: '350px',
              }}/>
                    <button className="p-[9px] w-[100px] bg-[#FF444A] text-white">Search</button>
                    </div>
                 
                  </div>
                  
                 </div>
  )
}
