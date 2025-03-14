

import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Websites() {
  return (
    <div>
      <header className='py-2 website gap-3 my-2 flex justify-center items-center '>
        <NavLink className="px-4 py-1 border  border-slate-800 rounded-lg" to="blog">Blog</NavLink>
        <NavLink className="px-4 py-1 border border-slate-800 rounded-lg" to="project">Project</NavLink>

        <NavLink  className="px-4 py-1 border border-slate-800 rounded-lg" to="kit">Gallery</NavLink>
      </header>

      <Outlet/>
    </div>
  )
}
