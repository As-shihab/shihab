import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../../Context/AuthContext'
import { http } from '../../../http/http'
import Home from './Home'

export default function Guyst() {
  const {  userdata } = useContext(UserContext)
  const [email ,setEmail] =useState('')
  const [msg  , setMsg] =useState('')
  const [isloading ,setLoading]=useState(false)
  const [code ,setCode] =useState('')
  const [iscode , setIsCode] =useState(false)
   
  // get code
  const GetCode = async ()=>{
    setLoading(true)
    if(!userdata.email.includes(email)){
      window.prompt("Would you like to update email?")
    }

   await http.post('/shihab/guyst/sentcode' , {email: email})
    .then(res=>{
      setLoading(false)
      console.log(res.data)
      if(res.data.sent){
        setMsg(res.data.msg)
        setIsCode(true)
      }
    })

    .catch(err=>{
      console.log(err.message)
    })

  }

  // submit code

const SubmitCode = async()=>{
  setLoading(true)
  await http.post('shihab/guyst/verifycode' , {code: code})
  .then(res=>{
    setLoading(false)
    if(res.data){
      setMsg(res.data.msg)

      if(res.data.verify){
        location.reload()
      }
    }
    setMsg(res.data.msg)
  })
}

  return (
    <div className='min-h-screen bg-slate-900 text-white'>

{

userdata.active?

<Home/>






:      <div className='absolute top-[40%]  left-2/4 flex flex-col -translate-x-2/4 lg:w-5/6 w-full m-auto text-center font-bold -translate-y-2/4 '>
<h1 className='lg:text-7xl text-5xl animate-pulse text-gray-50'>Thanks for Creating account </h1><br />
<span className='text-xl py-1 text-gray-100'>  {msg? msg : "To get started , i need to verify that you "}</span>
<font className="text-xs"> {iscode? "Place code and Submit":"Click on GetCode"}</font>

<br /><div className="flex justify-center  items-center mt-4">
 
{iscode?       <div className="flex border border-slate-700 shadow-lg py-2 md:w-4/5 px-2 lg:w-3/5 w-[95%] rounded-lg font-serif bg-slate-900 "><input placeholder='Type code to get verifyed' value={code} onChange={(e)=>{setCode(e.target.value)}} type="eamil" className='bg-transparent outline-none text-gray-300 px-2 py-1 w-full  ' /> <button className={`${isloading ? `bg-slate-700 ` : `bg-fuchsia-600`} text-gray-100 rounded-lg shadow-lg py-2 focus:bg-slate-700 px-3`}onClick={SubmitCode}>{isloading? "Loading...": "Submit"}</button></div>
:
<div className="flex border border-slate-700 shadow-lg py-2 px-2 md:w-4/5 lg:w-3/5 w-[95%] rounded-lg  bg-slate-900 "><input onChange={(e)=>{setEmail(e.target.value)}} value={userdata.email} placeholder='Type  email to get code' type="eamil" className='bg-transparent outline-none text-gray-300 px-2 py-1 w-full  ' /> <button className={` text-gray-100 rounded-lg shadow-lg py-2 ${isloading ? `bg-slate-700 ` : `bg-sky-500`} focus:bg-slate-700 px-3`} onClick={GetCode}>{isloading? "Loading..." : "GetCode" }</button></div>}
  </div>

<div className="w-full text-center  mt-5"> <button className='py-1 px-5  rounded-lg bg-sky-600' onClick={()=>{localStorage.removeItem('user-token') ;  location.reload(); Navigate('login')}}>Logout</button></div>

</div>

}
      
    </div>
  )
}
