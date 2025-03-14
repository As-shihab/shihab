import React, { useState } from 'react'
import { BiMessage } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../../assets/whatsap.jpg'

export default function Home() {
    const [show ,setShow] =useState(false)
    const [button ,setButton] =useState('')
  return (
    <div className='min-h-screen relative '>
     
     {
        show && 
        <div className="fixed top-2/4 left-2/4 p-3 rounded-lg shadow-lg
        backdrop-blur-lg -translate-y-2/4 lg:h-3/4 border border-slate-800 -translate-x-2/4 z-40 lg:w-3/4">
            <div className="w-full h-full relative">
                <button onClick={()=>{setShow(!show)}} className='border rounded shadow-lg border-slate-800 py-1 px-3  right-2 top-2'>Close</button>

               <div className="w-full flex flex-col lg:flex-row md:flex-col gap-4 text-center">
                <LazyLoadImage
                  src={Img}
                  effect='blur'
                />
                <div onClick={()=>{window.open(`https://wa.me/qr/ZK4T5NFMJQPUH1`)}} className="py-3 px-2 rounded-lg shadow-sm border border-slate-800 "><a target="_blank" rel="noopener noreferrer" href="https://wa.me/qr/ZK4T5NFMJQPUH1">https://wa.me/qr/ZK4T5NFMJQPUH1</a> <button className='py-1 px-2 bg-green-500 rounded-e-lg'>Open</button> </div>
               </div>
            </div>
        </div>
     }

        <div className="w-4/5 border gap-2 absolute top-[40%] p-3 left-2/4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 -translate-x-2/4 -translate-y-2/4 border-slate-600 rounded-lg shadow-lg backdrop-blur-lg">
        <div onClick={()=>{setShow(true); setButton('whatsapp')}} className="rounded-lg shadow-lg flex justify-center border hover:bg-slate-800 cursor-pointer p-2 border-slate-700 items-center flex-col">
           <BsWhatsapp className='text-9xl text-green-500  '/>
           <font className="mb-2">WhatsApp</font>
         </div>

         <div className="rounded-lg shadow-lg flex justify-center border  cursor-pointer hover:bg-slate-800 border-slate-700 items-center flex-col">
           <IoCall className='text-9xl text-sky-500 '/>
           <font className="mb-2">Native Call</font>
         </div>


         <div className="rounded-lg shadow-lg flex justify-center border cursor-pointer hover:bg-slate-800 border-slate-700 items-center flex-col">
           <MdEmail className='text-9xl text-sky-500 '/>
           <font className="mb-2">Direct Mail</font>
         </div>
      
         <div className="rounded-lg shadow-lg flex justify-center hover:bg-slate-800 cursor-pointer hover:text-white border border-slate-700 items-center flex-col">
           <BiMessage className='text-9xl text-sky-500 '/>
           <font className="mb-2">Message</font>
         </div>
      
        </div>
      
    </div>
  )
}
