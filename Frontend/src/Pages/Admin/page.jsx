import React, { useState, useTransition } from 'react'
import { NavLink, Outlet, redirect, useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BiArrowBack, BiArrowToRight } from 'react-icons/bi'
import Img from '../../assets/bg.png'
import { BiArrowToLeft } from 'react-icons/bi'

import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineDashboardCustomize } from 'react-icons/md'
import { ImStatsBars2 } from 'react-icons/im'
import { CgWebsite } from 'react-icons/cg'
import { RiRemoteControlFill } from 'react-icons/ri'

export default function page() {
  
  const back = useNavigate()
  const [isactiveslider, setSlider] = useState(true)
  const [isideshbord , setDeshbord] =useState(true)
  const [iswebsites , setWebsites] =useState(false)
  const [isposts ,setPosts] =useState(false)
  const Slider = () => {
    setSlider(!isactiveslider)
  }
  return (
    <div className='h-screen overflow-hidden bg-slate-900 text-white '>
      <nav className='grid grid-cols-3 items-center admin-link text-center w-full shadow  py-2 border-b border-slate-600 justify-around'>
        <div className="flex justify-around items-center">
          <BiArrowBack className='text-xl cursor-pointer text-white fw-bold' onClick={()=>{back(-1)}}/>
          <h1 className='text-2xl font-bold cursive'> AS-SHIHAB</h1>
        </div>
        <div className="py-1 px-2 flex items-center justify-center  border-2 border-sky-500 rounded-lg shadow-sm ">
          {/* <NavLink to="/me" className="active:bg-slate-900 py-1 px-5 rounded active:border border-slate-400">Deshbord</NavLink>
         <NavLink to="/me/project" className="active:bg-slate-900 py-1 px-5 rounded active:border border-slate-400">Projects</NavLink>
         <NavLink to="/me/story" className="active:bg-slate-900 py-1 px-5 rounded active:border border-slate-400">Story</NavLink>
         <NavLink to="/me/gallery" className="active:bg-slate-900 py-1 px-5 rounded active:border border-slate-400">Gallery</NavLink> */}
          <i className="fa fa-search text-slate-400"></i>
          <input type="text" placeholder='Type to find services' className='bg-slate-800 w-full border-none outline-none px-2 ' />
        </div>



        <div className="flex justify-end items-center px-12 ">
          <button className='text-white  rounded-lg bg-sky-500 px-2 mx-2 py-1 'onClick={()=>{localStorage.removeItem('admintoken') ; location.reload();}}>Logout</button>
          <div className="rounded-full border-4  border-sky-700 overflow-hidden h-[40px] w-[40px] bg-cover">
            <LazyLoadImage
              src={Img}
              effect='blur'
              width="100%"
              height="100%"
              className='rounded-full h-full  w-full '
            />
          </div>

        </div>

      </nav>
      <div className="outlet flex  h-full items-start justify-start transition-all viewer  ">
        <div className={`slider ${isactiveslider ? `active-slider px-2 transition-all` : `px-5`} relative  py-2 border-r border-slate-800 shadow-lg h-full `} >
          <span onClick={Slider} className='arrow-slider bg-slate-900 border-r border-slate-800 flex justify-center items-center p-2 cursor-pointer'>{
            !isactiveslider ? <BiArrowToLeft className='text-slate-400' /> : <BiArrowToRight className='text-slate-400' />
          }</span>


          <div className="sliders  text-slate-400">
            <h1 className={`${!isactiveslider ? `px-4 ` : `px-1`} text-2xl text-center text-sky-500 py-2 my-7 rounded-lg bg-sky-950 `}>{!isactiveslider ? "All Options" : "Menu"}</h1>

   

<div className="gap-2 flex flex-col sidebar-nav ">

<div className={`flex flex-col py-2 bg-slate-800 ${isideshbord? `active-menu` : `not-menu`} rounded-lg px-4 cursor-pointer`} >
<NavLink to="card">
<b className={` ${isideshbord? `text-sky-500` : null} text-xl justify-between flex items-center gap-1 select-none`} onClick={()=>{setDeshbord(!isideshbord)}} >  <ImStatsBars2 /> Deshbord <MdKeyboardArrowDown className={`text-xl ${isideshbord? `text-blue-400` : `text-slate-300`}`} /> </b>
</NavLink>
 <div className="ml-2 mt-2  menus">
<NavLink to="card">
<li className='list-none flex justify-center items-center '>Statics View</li>
</NavLink>
<NavLink to="chart">
<li className='list-none px-7'>View Blogs</li>
</NavLink>

 </div>
</div>



<div className={`flex flex-col py-2 bg-slate-800 ${isposts? `active-menu` : `not-menu`} rounded-lg px-4 cursor-pointer`} >
  <b className='text-xl flex items-center gap-1 select-none' onClick={()=>{setPosts(!isposts)}} >  <CgWebsite/> Manage <MdKeyboardArrowDown className='text-slate-300 text-xl '  /> </b>
 <div className="ml-2 mt-2 menus">
 <NavLink to={`website/blog`}>
<li className='list-none flex justify-center items-center '>Create</li>
</NavLink>
<NavLink to={`website/12`}>
<li className='list-none flex justify-center items-center'>Statics</li>
</NavLink>
 </div>
</div>


{/* navbar */}
<div className={`flex flex-col py-2 bg-slate-800 ${iswebsites? `active-menu` : `not-menu`} rounded-lg px-4 cursor-pointer`} >
  <b className='text-xl flex items-center gap-1 select-none' onClick={()=>{setWebsites(!iswebsites)}} >  <RiRemoteControlFill/>Remote <MdKeyboardArrowDown className='text-slate-300 text-xl '  /> </b>
 <div className="ml-2 mt-2 menus">
 <NavLink to={`remote/catagory`}>
<li className='list-none flex justify-center items-center '>Hcloud</li>
</NavLink>

 </div>
</div>
{/* navbar */}

<div className={`flex flex-col py-2 bg-slate-800 ${isposts? `active-menu` : `not-menu`} rounded-lg px-4 cursor-pointer`} >
  <b className='text-xl flex items-center gap-1 select-none' onClick={()=>{setPosts(!isposts)}} >  <MdOutlineDashboardCustomize/> Customize {isposts? <MdKeyboardArrowUp className='text-slate-300 text-xl '  />: <MdKeyboardArrowDown className='text-slate-300 text-xl '  />} </b>
 <div className="ml-2 mt-2 menus">
 <NavLink to="card">
<li className='list-none flex justify-center items-center '>Add Kit</li>
</NavLink>
<NavLink to="project">
<li className='list-none px-7'>View Chart</li>
</NavLink>
 </div>
</div>
</div>
     

          </div>

        </div>

        <div className="view w-full p-7 h-screen overflow-y-scroll ">
          <Outlet />
        </div>


      </div>
    </div>
  )
}
