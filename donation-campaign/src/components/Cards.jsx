import React, { useState, useEffect } from 'react';
import HomeCard from './HomeCard';


export default function Cards({filteredCards}) {

    // const [value, setValue] = useState([]);
   

    // useEffect(() => {
    //   fetch('/filteredCards.json')  
    //     .then(response => response.json())
    //     .then(man =>setValue(man) );
    // }, []);

   


    
  return (
   
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-0 py-8 ml-14 md:ml-12  lg:ml-28 ">
           {
        filteredCards?.map((filteredCards,idx)=> <HomeCard key={idx} filteredCards={filteredCards}></HomeCard>)
      }
     
    </div>
  )
}
