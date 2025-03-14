import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'
export default function Contact() {
  return (
    <div className='min-h-screen relative w-full z-0'>
      <Header/>
      
      <div className="top-2/4 w-full left-2/4 -translate-y-2/4 px-3 py-2 -translate-x-2/4 absolute">
        
      <Outlet/></div></div>
  )
}
