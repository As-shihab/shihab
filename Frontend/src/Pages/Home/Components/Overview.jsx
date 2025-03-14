import React from 'react'
import Img from '../../../assets/bg.png'
export default function Overview() {
  return (
    <div className='text-center '>
       <div className="text-center w-full"> 
       <i className="fa-regular font-extrabold text-7xl shihab-ai py-4 animate-bounce fa-face-smile"></i>
       <h1 className='text-5xl font-semibold mb-10'>Everything about me <span className='text-sky-600 font-extrabold'>here</span></h1>
       
       </div>


      <div className="rounded-lg sm:border-b bg-slate-800 gap-2 w-11/12  m-auto grid md:grid-cols-2 lg:grid-cols-4 border border-slate-700 ">
      <div className="card lg:border-r   transition flex flex-col p-2 border-slate-500">
      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1  fa-school"></i>
      <b className='text-gray-200 font-semibold mb-1'>Education</b>
    <p className='text-sm text-gray-300'>I've completed HSC with GPA 5.0 from science group and currently studying in presidency university in Computer Science & Engineering</p>
      </div>
      <div className="card lg:border-r  flex p-2 flex-col border-slate-500">
      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1  fa-desktop"></i>
      <b className='text-gray-200 font-semibold mb-1'>Web design</b>
    <p className='text-sm text-gray-300'>I'm super excited about expressing that i've completed html css and venilla JavaScript and tailwind with flexeble functionality with paralax effext</p>
      </div>
      <div className="card p-2 flex-col flex ">      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1  fa-code"></i>
      <b className='text-gray-200 font-semibold mb-1'>Web Development</b>
    <p className='text-sm text-gray-300'>As logical functionality i've builded several project with Next, React , Express , Node  using MongoDb , MySql also with Laravel</p></div>
      <div className="card p-2 flex flex-col border-l border-slate-500">
      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1  fa-language"></i>
      <b className='text-gray-200 font-semibold mb-1'>Language</b>
    <p className='text-sm text-gray-300'>I've been preparning for IELTS about 6 month for migrate to abroad causing i can apparently express anything with english and with my native language bangla</p>
      </div>
      <div className="card p-2 flex-col  flex border-r border-t  border-slate-500">
      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1 mt-3 fa-chart-simple"></i>
      <b className='text-gray-200 font-semibold mb-1'>Markating</b>
    <p className='text-sm text-gray-300'>I'd super history about marketing that once me and my friend reflected about selling somthing on social and this harvest eventualy goes extreme benifit</p>
      </div>
      <div className="card p-2 flex-col  flex lg:border-r sm:border-t border-t border-slate-500">      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1 mt-3  fa-user-ninja"></i>
      <b className='text-gray-200 font-semibold mb-1'>Speaking</b>
    <p className='text-sm text-gray-300'>I'v been teaching 1 year in a english medium school as english teacher , also have done to acqured speaking way by IELTS</p></div>
      <div className="card p-2 flex-col flex border-t border-slate-500">      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1 mt-3 fa-pen"></i>
      <b className='text-gray-200 font-semibold mb-1'>Writing</b>
    <p className='text-sm text-gray-300'>Writing was the best habit sinc learning english | activity on web and social media demonstrate audience provided inspire </p></div>
      <div className="card p-2 flex-col flex sm:border-t border-t lg:border-l border-slate-500">      <i className="fa-solid text-sky-500 text-4xl cursor-pointer my-1  mt-3 fa-star"></i>
      <b className='text-gray-200 font-semibold mb-1'>Favorite</b>
    <p className='text-sm text-gray-300'>Playing football is favorite from my childhood also teaching student | from starting code now it's my one of the favorite thinks to implement products</p></div>
      </div>
    </div>
  )
}
