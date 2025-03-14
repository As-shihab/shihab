import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser/lib/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { SiSpinrilla } from 'react-icons/si';
import { http } from '../../../http/http';


export default function CreateBlog() {
  const editor = useRef(null)
  const [content ,setContent] =useState()
  const [dimg , setDimg] =useState(null)
  const [viewimg , setView] =useState(null)
  const [title ,setTitle] =useState('')
  const [isLoading ,setLoading] = useState(false)
  const [msg , setMsg ]= useState('')



       const BlogFile = ()=>{
        document.querySelector('.blogfile').click()
        
       }
       
      //  file convert to data url 
            if(dimg){
              let filerader = new FileReader();
              filerader.readAsDataURL(dimg);
             filerader.addEventListener('load' , (e)=>{
                
                  setView(e.target.result)
             })
              
            }
      // end converting
      // -----------------
// creating blog using async

const CreateBlog = async ()=>{
  setLoading(true)

  const formdata = new FormData();
        formdata.append('title' , title);
        formdata.append('blogfile' , dimg);
        formdata.append('content' , JSON.stringify(content))
        console.log(formdata)

       http.post('shihab/blog' , formdata)
        .then(res=>{console.log(res.data); 
          setLoading(false)
          setMsg(res.data.msg)
        })
        .catch(err=>{console.log(err);
             setMsg(err.message)
          
           setLoading(false)}) 

}

// end createing
  return (
    <div className='bg-slate-800 p-2 py-7 rounded-lg shadow-lg'>
      <div>{msg&&msg}</div>
<div className="my-2 text-xl py-1">{isLoading ? <div className='flex items-center gap-2 '><SiSpinrilla className='animate-spin'/>  Wait... </div>: "Create Blog"}</div>
<div className={`drug-photo bg-slate-900 rounded-lg shadow-lg grid overflow-hidden justify-center ${dimg? `h-[40vh] ` : `h-[20vh] `} items-center`}>
  <input type="file" accept='image/*' className='blogfile' onChange={(e)=>{setDimg(e.target.files[0])}} hidden/>
{
  dimg? <LazyLoadImage
  src={viewimg}
  effect='blur'
  width="100"
  height="100"
  className='w-full bg-cover h-full select-none'
  />
  : <FaCloudUploadAlt onClick={BlogFile} className='lg:text-7xl md:text-5xl w-full h-full cursor-pointer sm:text-4xl text-3xl font-bold text-gray-100 shadow-sm '/>
}

</div>
<div className="title my-1 rounded-lg ">
  <label htmlFor="" className='text-gray-100 '>Blog title</label>
  <div className=" w-full overflow-hidden"><input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} className='w-full py-3 px-2  text-gray-800  outline-none border-none focus:outline-none' placeholder='Type blog title' /></div>
</div>
<JoditEditor
className='text-black bg-slate-900'
ref={editor}

background="#000"
onChange={(newContent) => { setContent(newContent)}}
/>
<div className="outut-tex text-white my-3">
  {content ?HTMLReactParser(content):  null}
</div>

<div className="submit "><button onClick={CreateBlog} className="bg-blue-500 text-gray-100 lg:px-7 lg:py-2 transition-all rounded-lg py-2 px-6 shadow-lg focus:bg-gray-700">{isLoading ?<SiSpinrilla className='animate-spin'/>: "Create" }</button></div>
    </div>
  )
}