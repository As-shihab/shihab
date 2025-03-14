import React from 'react'

export default function SpinLoader() {
  return (
    <div className='flex gap-4 items-center justify-center'><div className=" flex gap-2 shadow-lg  w-[20px] h-[20px] rounded-full bg-slate-800 animate-pulse"></div>
    <div className="card w-[20px] h-[20px] rounded-full bg-slate-800 shadow-lg animate-pulse"></div>
    <div className="card w-[20px] h-[20px] rounded-full bg-slate-800 shadow-lg animate-pulse"></div></div>
  )
}
