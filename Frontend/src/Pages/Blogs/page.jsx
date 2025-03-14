import React, { Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header'
import Story_loader from '../../lib/Story_loader'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BiComment, BiLike,  BiShareAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IoMdEye } from 'react-icons/io'
import { http } from '../../http/http'
import HTMLReactParser from 'html-react-parser/lib/index'
import { path } from '../../lib/path'
import LoadingImg from '../../assets/loader.gif'

export default function page() {
  const [isloading , setLoading] =useState(true);
  const [blogs ,setBlogs] =useState('')
  const [msg , setMsg] =useState()

  useEffect(()=>{
    

GetBlogs()
  },[])
  const GetBlogs = async()=>{
    await http.get('shihab/blogs')
    .then(res=>{if(res.data.get || res.datacode==200){
      setBlogs(res.data.blogs)
      setLoading(false)
      setMsg(res.data.msg)
  
      
    }})
      .catch(err=>{console.log(err)})
  }
  console.log(blogs)
  return (

    <> <Helmet>
    <title>Blogs</title>
    
  </Helmet>
  <Header />

{
  !isloading ?


  <div className=' h-full grid mt-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2 dark:bg-slate-900'>
         
  <div className=" lg:col-span-2 grid blog-container p-2 lg:max-h-[90vh] lg:overflow-y-scroll rounded-lg gap-2  md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2">



{/* fetch dynamic ly */}
{
  Object.values(blogs).map((blog)=>{
    return(
      <div>
      <div className='border p-2 shadow-sm flex flex-col border-slate-800 h-auto bg-slate-800  rounded-lg'>
      <LazyLoadImage
      src={blog.imgid? path+blog.imgid : LoadingImg}
      effect='blur'
      className='rounded-lg max-h-[300px] overflow-hidden w-full'
      width="100"
      alt={blogs.blogfile}
      
      />
      <Link to={`/Blogs/viewblog/` + blog._id}><span className='text-gray-200 my-1 cursor-pointer hover:text-sky-300'>{blog.title ? blog.title: "No paragraph found"}</span></Link>
      
      <div className="border-t border-slate-700 mx-3 text-xl lg:text-2xl py-2 flex items-center justify-around ">
      <div className="flex items-center gap-1">  <BiLike className='cursor-pointer animate-bounce text-3xl text-fuchsia-500'/> <span className="text-green-400 text-xs">232</span></div>
      
        <div className="flex items-center gap-1">    <BiComment  className='cursor-pointer text-sky-500'/> <span className="text-green-400 text-xs">232</span></div>
        <div className="flex items-center gap-1">     <IoMdEye  className='cursor-pointer text-orange-400'/> <span className="text-green-400 text-xs">232</span></div>
        <div className="flex items-center gap-1">      <BiShareAlt  className='cursor-pointer text-cyan-400'/> <span className="text-green-400 text-xs">232</span></div>
      
      
      </div>
      </div>
      </div>
    )
  })
}









  </div>
  <div className="grid col-span-1  blog-container grid-cols-1 border lg:max-h-[90vh] lg:overflow-y-scroll  border-slate-800 rounded-lg">
 <div className=" flex flex-col gap-2 px-2 py-3 rounded-lg">








{
  Object.values(blogs).map(allblog=>{
    return(
      <Link to={`/Blogs/viewblog/` + allblog._id} className='hover:text-blue-300'>
         <div className="grid grid-cols-2 shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2">
       
          <LazyLoadImage
      src={allblog.imgid? path+allblog.imgid : LoadingImg}
      effect='blur'
   
     className='rounded-lg w-full h-full max-h-44'
     alt={allblog.blogfile}
      />
    
      <b className=''>{allblog.title&& allblog.title}</b>
      </div>
      </Link>
     
    )
  })
}



 



 </div>
  </div>

    </div>
    : <Story_loader/>
}
    
    </>
  )
}
