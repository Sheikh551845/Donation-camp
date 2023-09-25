import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import Banner from '../components/Banner'
import Cards from '../components/Cards';

export default function Home() {
  
  const data= useLoaderData();

  // console.log(data);

  return (
    <div >
      <Banner></Banner>
      <Cards data={data}></Cards>

      
    </div>
  )
}
