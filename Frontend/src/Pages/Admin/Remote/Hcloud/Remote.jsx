import React from 'react'
import { Outlet , NavLink} from 'react-router-dom'

export default function Remote() {
  return (
    <div className='remote'>
      <nav className='flex py-3  items-center gap-4 border-b border-slate-800  px-2 catagory-cont'>
        <NavLink to='catagory'>Catagory</NavLink>
        <NavLink to='deshbord'>Deshbord</NavLink>
        <NavLink to='geoinfo'>Geo info</NavLink>
        </nav>
      <div className='mt-2'>
        <Outlet/>
      </div>
    </div>
  )
}
