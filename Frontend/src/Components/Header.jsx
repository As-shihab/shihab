import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import User from '../Pages/Contact/User/Guyst'
import { IoMdClose } from "react-icons/io";
import { UserContext } from '../Context/AuthContext';
export default function Header(props) {
    const [mode , setMode] =useState(true)
    const [mobile ,setMobile]=useState(false)

    const {isuser} =useContext(UserContext)

  

    useEffect(()=>{
      if(mobile){
        document.body.style.height="100vh";
        document.body.style.overflow="hidden"
      }
      else{
        document.body.style.height="100%";
        document.body.style.overflow="auto"
      }
    }, [mobile])

    localStorage.setItem("mode" , "dark")

 if(localStorage.getItem("mode")=="dark"){
  document.documentElement.classList.add("dark");
 }else{
  document.documentElement.classList.remove("dark")
 }


 
  return (
   <header className={`  ${mobile? `h-screen` :  `h-auto`}  top-0 left-0 w-full z-40 nav-blur backdrop-blur-xl shadow-sm py-3 justify-around dark:border-b border-slate-600 items-center  dark:text-white`}>

<div className='flex justify-around items-center   '>
<div className='lg:hidden cursor-pointer md:hidden' onClick={()=>{setMobile(!mobile)}}>{!mobile? <i className="fa fw-bold text-bold text-2xl fa-bars"></i> : <IoMdClose className='text-2xl'/>}</div>
<h1 className="logo text-4xl font-extrabold text-gray-200 ">شهاب </h1>
    <nav className={`flex md:block items-center desktop px-5 bg-slate-700 py-2 rounded-lg  justify-around `}>
    <NavLink to="/" className="px-3 hover:text-sky-400 navlink rounded-lg py-1">Exelency</NavLink>
    <NavLink to="/Project" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Projects</NavLink>
    <NavLink to="/Gallery" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Gallery</NavLink>
    <NavLink to="/Blogs" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Blogs</NavLink>
    
    </nav>


    
   

    <div className="toggle flex items-center justify-center">
      
       <button onClick={()=>{alert("localStorage.setItems('dark')")}} className="mr-3 dark:text-white  p-2 rounded-lg"><i className="fa-solid dark:text-white fa-moon"></i></button> <Link to={isuser? "/contact" : "/contact/login"}><button className="contact px-4 py-1  ml-2 shadow-sm cursor-pointer bg-blue-500 dark:text-white rounded">Let's talk</button></Link>
      <Link to="/me"> <button className='px-3 py-1 mx-2 lg:block md:block hidden xl:block rounded shadow-lg border border-slate-500 '>Admin</button></Link>
       </div>

</div>

{
  mobile?
<div className='h-full w-full mob-navlink text-center justify-center items-center flex flex-col relative'>
    <NavLink to="/" className="px-3 hover:text-sky-400 navlink rounded-lg py-1">Exelency</NavLink>
    <NavLink to="/Project" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Projects</NavLink>
    <NavLink to="/Gallery" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Gallery</NavLink>
    <NavLink to="/Blogs" className="px-3 navlink hover:text-sky-400 rounded-lg py-1">Blogs</NavLink>
    <Link to="/me" className='w-4/5 '> <button className='px-3 py-2 bg-blue-500 text-gray-100 mx-2 w-full   rounded shadow-lg border border-slate-500 '>Admin</button></Link>
</div>

:null
}

   </header>
  )
}
