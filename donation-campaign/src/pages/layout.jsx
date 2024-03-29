
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, createContext } from 'react';

export default function Layout() {
    
  return (
    <div className="max-w-6xl lg:max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
