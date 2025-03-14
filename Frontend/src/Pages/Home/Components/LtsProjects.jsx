import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Img from '../../../assets/bg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Card_Loader from '../../../lib/card_loader'
export default function LtsProjects() {
    const [loading , setLoading] =useState(true)
    
  return (
    <div className='mt-20 text-center'>

        <b className="text-3xl font-semibold text-sky-400"> <span className="text-orange-400">LTS</span> -Projects</b>

<div className={loading? `` : `grid lg:grid-cols-4 mt-20 gap-2 sm:grid-cols-1 md:grid-cols-2`}>

{
    loading ?


   <div className="grid gap-4 mt-5 w-[95%] m-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />

          </div>


:


<div className="card p-2 overflow-hidden relative rounded-lg bg-slate-700">

<LazyLoadImage 
src={Img}
effect='blur'
/>

<div className="flex justify-between items-center">
    <div className="text-left">
    <div className="mt-2 px-2 ">Relesed : 12 AUG</div>
    <div className="mt-2 px-2 flex items-center">Code : <a href="" className='dark:text-white light:text-gray-500  flex flex-row items-center px-3 rounded'><i className="fa-brands fa-github"></i></a></div>
    </div>

    <button className='px-5 py-1 rounded-lg border hover:bg-sky-900 '>View</button>
</div>

</div>

}









</div>





    </div>
  )
}
