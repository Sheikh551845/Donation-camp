import React, { useState } from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import Banner from '../components/Banner'
import Cards from '../components/Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  
  const allCards= useLoaderData();

  const [filteredCards, setFilteredCards] = useState(allCards);

  const handleFilterSubmit = (filterText) => {
    const filtered = allCards.filter(card => filterText.toLowerCase()==card.category.toLowerCase());

    if((filtered.length) == 0)
    {
      setFilteredCards(allCards);
      toast.error("This Category not found");
    }

    else{
      setFilteredCards(filtered); 
    }
    
    // console.log(filterText)
  };
  
//   console.log(allCards);
// console.log(filteredCards);

  return (
    <div >
      <Banner onFilterSubmit={handleFilterSubmit}></Banner>
      <Cards filteredCards={filteredCards} ></Cards>
      <div >
      <ToastContainer />
      </div>
    

      
    </div>
  )
}
