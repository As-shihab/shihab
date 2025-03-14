import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { http, path } from '../../../../../http/http'
import { UserContext } from '../../../../../Context/AuthContext'
import { BiLoader } from 'react-icons/bi'

export default function Catagory() {
  const [state ,setSate] =useState(0)
    const {gmsg , setGmsg} =useContext(UserContext)
    const [file ,setFile] =useState(null)
    const [viewfile ,setView] =useState(null)
    const [newcat ,setNew] = useState(false)
    const [loader ,setLoader] =useState(false)
    const [category , setCategory] =useState({
        title:"",
        details:"",
        
    })
    const [msg , setMsg] =useState("")
    const [viewCategory , setViewCategory] =useState('')

    const GetFile = ()=>{
        document.querySelector('.file').click()
    }

     if(file){
        let reader = new FileReader()
        reader.readAsDataURL(file);
        reader.addEventListener('load', (e)=>{
            setView(e.target.result)
        })

     }
// all categorys state
    
     const Create = async()=>{
        setLoader(true)
      if(file){
        const formdata = new FormData()
        formdata.append('title' , category.title)
        formdata.append('details' , category.details)
        formdata.append('image' ,file)
      
        await http.post('/hcloud/category' , formdata)
        .then(res=>{
         console.log(res.data)
         setGmsg(res.data.msg)
         setFile(null)
         setView(null)
         setLoader(false)
         setSate(state=> state+1)
         setMsg(res.data.msg)
        })
        .catch(err=>{
         setGmsg(err.message)
         console.log(err.message)
        })
      }else{
        setGmsg("Select image for category")
      }
     }
 
     useEffect(()=>{
GetCategory()
     },[state])

     const GetCategory = async ()=>{
       await http.get('/hcloud/get-categorys')
        .then(res=>{
            setViewCategory(res.data.category)
            console.log(res.data)
        })
        .catch(err=>{
            setGmsg(err.message)
        })
     }

   const [del, setDel] =useState(false)
     const DeleteList= async(id)=>{
      setDel(true)
      await http.delete("/hcloud/del-category/" + id)
      .then(res=>{
        console.log(res.data)
        setMsg(res.data.msg)
        setDel(false)
        setSate(state=> state+ 1)
      })
      .catch(err=>{
        setMsg(err.message)
        setDel(false)
      })
     }

  return (
    <div className='relative overflow-x-scroll h-[80vh]'>
   
  

     <header className='flex items-center ese-anim gap-3'>
        <button className="py-2 px-5 rounded-full bg-slate-800 text-white">All Cataogry</button>
        <button onClick={()=>{setNew(true)}} className="py-2 px-5 rounded-full bg-gray-50 text-black">Create new</button>
        
     </header>

<b className='py-2'>{msg&&msg}</b>
<table className='table w-full mt-4 shadow-lg p-3 rounded-lg bg-slate-800'>
    <tr>
        <th>Name </th>
        <th>Details</th>
        <th>published</th>
        <th>CreatedAT</th>
        <th>UpdatedAt</th>
        <th>Action</th>
    </tr>

    { viewCategory?
Object.values(viewCategory).map(todo=>{
    return (
        <tr className='bg-slate-900 hover:bg-slate-700 rounded-lg hover:rounded-lg '>
        <th className='text-center'>
            <div className=" flex flex-col items-center py-2 gap-2 justify-center">
              <LazyLoadImage
              src={todo.image? path+todo.image :""}
              effect='blur'
width="70"
height="70"
              />
              <b className='text-2xl font-semibold'>{todo.title&&todo.title}</b>
                </div>
                
                 </th>
                 <th>{todo.details&&todo.details}</th>
        <th><button className='py-2 px-3 rounded-lg border border-slate-500 hover:text-blue-400'>{todo.published ? "True" :"False"}</button></th>
       
        <th>{todo.created&&todo.created}</th>
        <th>{todo.updated&&todo.updated}</th>
        <th><button className='border px-4 py-2 rounded-lg shadow-sm text-orange-400' onClick={()=>{DeleteList(todo.id)}}> {del? <BiLoader className='text-xl animate-spin'/> : "Delete"}</button></th>
    </tr>
    )
})
   : "Not category found" }
</table>



{
    newcat&&
    <div className={`absolute ese-anim w-full h-[80vh] grid grid-cols-2 left-2/4 top-2/4 -translate-x-2/4  overflow-hidden backdrop-blur-3xl p-4 rounded-lg shadow-lg -translate-y-2/4 `}>
      
      
      
      <div className='w-full text-center relative'>
     {
        viewfile?

        <LazyLoadImage
        src={viewfile}
        effect='blur'

        />

        :<div>
               <input type="file" hidden className='file' onChange={(e)=>{setFile(e.target.files[0])}} />
      <button onClick={GetFile} className="py-2 px-5 rounded-full absolute top-2/4 hover:bg-gray-100  bg-gray-50 text-black">Select Photo</button>
      <div className='w-full h-full overflow-hidden'>
      
      </div>
        </div>
     }
      </div>
      {/* content site */}

     <div className='h-full '>
     
     <div>
     <div className="h-full text-right">
      <button onClick={()=>{setNew(false)}} className="py-1 px-4 rounded-lg shadow-lg border border-slate-700 ">Close</button>
      </div>

   {
    viewfile&&

    <div className='flex flex-col w-full gap-1 p-3 '>
        <label>Title</label>
        <input type="text" placeholder='Type to title ' onChange={(e)=>{setCategory({...category , title: e.target.value})}} className='py-2 px-4 rounded-lg bg-transparent border border-slate-500'/>
        <textarea  name="" id="" className='bg-transparent border border-slate-500 p-2 rounded-lg h-2/4 ' placeholder='Type description (optional)'
onChange={(e)=>{setCategory({...category , details: e.target.value})}}
        ></textarea>

        <button onClick={Create} className="py-2 px-5 rounded-full absolute top-2/4 hover:bg-gray-100  bg-gray-50 text-black">{loader? "Creating...":"Create"}</button>
    </div>
   }


     </div>
    
     </div>
      
      </div>
}

    </div>
  )
}
