import React, { useEffect, useReducer, useState } from 'react'
import { http } from '../../../http/http'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { path } from '../../../lib/path'
import HTMLReactParser from 'html-react-parser/lib/index'
import { useNavigate } from 'react-router-dom'

export default function Chart() {
  const [blogs ,setBlogs] =useState('')
  const [pinid , setPinid] =useState(null)
  const [msg , setMsg] =useState('')
  const [update ,setUpdate] =useReducer(x=> x+1)
  const [search ,setSearch] =useState('')
  const navigate = useNavigate()
useEffect(()=>{
 
GetBlogs()
},[update])

const GetBlogs = async()=>{
   await http.get('shihab/blogs')
    .then(res=>{
      console.log(res.data)
      setBlogs(res.data.blogs)
    })
    .catch(err=>{
      console.log(err.message)
    })
}

const MakePined = async()=>{
  
  if(pinid){
    
   await http.put(`shihab/makepined/`+pinid)
    .then(res=>{
      console.log(res.data)
      setMsg(res.data.msg)
      setUpdate()
      navigate('/me/chart')
    })
    .catch(err=>{
      console.log(err.messsage)
    })



  }

}


// delete blogs

const DeleteBlog = async()=>{
  if(pinid){
    
   await http.delete(`shihab/blog/`+pinid)
    .then(res=>{
      console.log(res.data)
      setMsg(res.data.msg)
      setUpdate()
    })
    .catch(err=>{
      console.log(err.messsage)
    })
}
}

// change status
const Status = async()=>{
  if(pinid){
    
   await http.put(`shihab/blogstatus/`+pinid)
    .then(res=>{
      console.log(res.data)
      setMsg(res.data.msg)
      setUpdate()

    })
    .catch(err=>{
      console.log(err.messsage)
    })



  }
}

  return (
<div>






<div className="grid col-span-1  blog-container grid-cols-1 border lg:max-h-[90vh] lg:overflow-y-scroll  border-slate-800 rounded-lg">
 <div className=" flex flex-col gap-2 px-2 py-3 rounded-lg">







 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  bg-gray-900">
        <div>
            <button  className="inline-flex items-center relative   border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>


            </button>
       
           
        </div>
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" onChange={(e)=>{setSearch(e.target.value)}} className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right  ">
      <div className='py-1 px-2'>{msg&&msg}</div>
        <thead className="text-xs  uppercase  bg-slate-800">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Pined
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          
          {
            blogs? 
            Object.values(blogs).filter(items=>{return search.toLocaleLowerCase()==="" ? items: 
              items.title.toLocaleLowerCase().includes(search)
            }).map(blog=>{
              return(
                 
            <tr key={blog._id} onMouseDown={()=>{setPinid(blog._id)}} className=" bg-slate-900 shadow-lg border border-slate-800 ">
          
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
{/* img */}

<LazyLoadImage
    effect='blur'
    src={blog.imgid && path+ blog.imgid}
    width="100"
    className='rounded-lg shadow-sm'
/>


                <div className="ps-3">
                    <div className="text-base text-gray-50 font-bold ">{blog.title&&blog.title.slice(0 , 23)}</div>
                    <div className="font-normal text-xs text-gray-500">
                   {blog.createdAt && blog.createdAt.slice(0 , 10)}
                    </div>
                </div>
            </th>
            <td className="px-6 py-4">
              <button onClick={MakePined} className="border py-1 px-3 rounded-lg border-slate-800">{blog.pined? "True":"False"}</button>
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${blog.pined? `bg-green-500` :`bg-red-500`} me-2`}></div>               <button onClick={MakePined} className="border py-1 px-3 rounded-lg border-slate-800">{blog.pined? "Online":"Offline"}</button>
                </div>
            </td>
            <td className="px-6 py-4">
               <div className="flex items-center gap-3"><button className="py-1 px-4 rounded-lg bg-sky-500">Edit</button>
               <button onClick={DeleteBlog} className="py-1 px-4 rounded-lg bg-orange-500">Delete</button></div>
            </td>
        </tr>
              )
            })



            :"No Blogs found"
          }
          
          
        </tbody>
    </table>
</div>

 



 </div>
  </div>
  
</div>
  )
}
