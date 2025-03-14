import React from 'react'
import { IoSettings } from 'react-icons/io5'
import {NavLink, Outlet} from 'react-router-dom'
 export default function GeoInfo() {
  return (
    <div>
        
     <header className='flex geo items-center ese-anim gap-3'>
        <NavLink to="addinfo">
        <button className="py-1 px-4 rounded-full bg-slate-800 text-xs text-white">Add Info</button>
        </NavLink>
      <NavLink to="viewinfo">
      <button  className="py-1 px-4 rounded-full bg-slate-800 text-white flex items-center text-xs "><IoSettings/> <b>Settings</b></button>
        </NavLink> 
        
     </header>


<div className='mt-3'>
<Outlet/>
</div>

    </div>
  )
}
