import React from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import { BsFileArrowUp } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

export default function Deshbord() {
  return (
    <div className=' w-full'>
   <div className="grid gap-2 lg:grid-cols-4">
    <div className="card bg-slate-800 rounded-lg shadow-sm flex flex-col p-3">
<div className="flex gap-2 items-center">    <FaUserFriends className=' w-4 h-4 bg-slate-700  shadow-sm rounded-full' />
<b>Total User</b></div>

    <span className="text-6xl text-center mb-2 py-2">
      4
    </span>
    <span className='w-full border-t border-slate-600 flex items-center justify-around'>User ratio <span className="text-green-500 items-center justify-around flex gap-2">3434%  <BiArrowToTop/> </span> </span>
    </div>

    <div className="card bg-slate-800 rounded-lg shadow-sm flex flex-col p-3">
    <div className="flex gap-2 items-center">    <FaUserFriends className=' w-4 h-4 bg-slate-700  shadow-sm rounded-full' />
    <b>Total Earning</b></div>

    <span className="text-6xl text-center mb-2 py-2">
      $4.00
    </span>
    <span className='w-full border-t border-slate-600 flex items-center justify-around'>User ratio <span className="text-green-500 items-center justify-around flex gap-2">3434%  <BiArrowToTop/> </span> </span>
    </div>

    <div className="card bg-slate-800 rounded-lg shadow-sm flex flex-col p-3">
    <div className="flex gap-2 items-center">    <FaUserFriends className=' w-4 h-4 bg-slate-700  shadow-sm rounded-full' />
    <b>Total Platform</b></div>

    <span className="text-6xl text-center mb-2 py-2">
      4
    </span>
    <span className='w-full border-t border-slate-600 flex items-center justify-around'>User ratio <span className="text-green-500 items-center justify-around flex gap-2">3434%  <BiArrowToTop/> </span> </span>
    </div>
    <div className="card bg-slate-800 rounded-lg shadow-sm flex flex-col p-3">
    <div className="flex gap-2 items-center">    <FaUserFriends className=' w-4 h-4 bg-slate-700  shadow-sm rounded-full' />
    <b>Next Plan</b></div>

    <span className="text-6xl text-center mb-2 py-2">
      4
    </span>
    <span className='w-full border-t border-slate-600 flex items-center justify-around'>User ratio <span className="text-green-500 items-center justify-around flex gap-2">3434%  <BiArrowToTop/> </span> </span>
    </div>
    
 
   </div>





   
    </div>
  )
}
