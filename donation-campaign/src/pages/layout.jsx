
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, createContext } from 'react';

export default function Layout() {
    const [value, setValue] = useState([]);
   

    useEffect(() => {
      fetch('/data.json')  
        .then(response => response.json())
        .then(data =>setValue(data) );
    }, []);
   
    const globalContext= createContext(value);

  return (
    <div className="max-w-6xl lg:max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <globalContext.Provider value={value}>
      <Outlet></Outlet>
      </globalContext.Provider>
      
    </div>
  )
}
