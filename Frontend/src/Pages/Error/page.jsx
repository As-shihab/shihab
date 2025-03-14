import React from 'react'
import { Link } from 'react-router-dom'

export default function page() {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col justify-center items-center'>
<h1 className='text-9xl font-extrabold'>404</h1>
<br />
<div className="text-8xl">Not Found</div>
<Link to="/"><button className="border py-2 px-5 rounded-lg mt-3 border-slate-300">Back to Home</button></Link>
    </div>
  )
}
