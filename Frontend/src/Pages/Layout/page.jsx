import React from 'react'

import { Outlet} from 'react-router-dom'
export default function page() {
  return (
    <div>

    <div className=' w-full h-full  '>
    <Outlet/>
    </div>
   
    </div>
  )
}
