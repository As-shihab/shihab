import React from 'react'

export default function Story_loader() {
  return (
    <div className='min-h-screen grid mt-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-1 dark:bg-slate-900'>
         
    <div className=" col-span-2 grid p-2  rounded-lg gap-2   grid-cols-2">
  <div className='border border-slate-800 animate-pulse bg-slate-800 rounded-lg'></div>
  <div className='border border-slate-800 animate-pulse bg-slate-800 rounded-lg'></div>
  
  <div className='border border-slate-800 animate-pulse bg-slate-800 rounded-lg'></div>
  <div className='border border-slate-800 animate-pulse bg-slate-800 rounded-lg'></div>
    </div>
    <div className="grid lg:col-span-1 md:col-span-1 col-span-full p-2 md:p-0 lg:p-0 border animate-pulse bg-slate-800 border-slate-800 rounded-lg">

    </div>
  
      </div>
  )
}
