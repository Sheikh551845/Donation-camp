import React, { useState, useEffect } from 'react';
import HomeCard from './HomeCard';

export default function Cards({data}) {

    // const [value, setValue] = useState([]);
   

    // useEffect(() => {
    //   fetch('/data.json')  
    //     .then(response => response.json())
    //     .then(man =>setValue(man) );
    // }, []);

   


    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-0 pt-8 ml-32 ">
      {
        data?.map((data,idx)=> <HomeCard key={idx} data={data}></HomeCard>)
      }
    </div>
  )
}
