import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/page'
import Layout from "./Pages/Layout/page"
import Project from './Pages/Project/page'
import Story from './Pages/Blogs/page'
import Gallery from './Pages/Gallery/page'
import Error from './Pages/Error/page'
import Admin from './Pages/Admin/page'
import MeStory from './Pages/Admin/Story'
import Chart from './Pages/Admin/Components/Chart'
import MeDeshbord from './Pages/Admin/Components/Deshbord'


//  child route

import PreLoader from './PreLoader'
import Websites from './Pages/Admin/Components/Websites'
import { UserContext } from './Context/AuthContext'
import Auth from './Pages/Auth/Layout'
import ViewBlog from './Pages/Blogs/ViewBlog'
import Contact from './Pages/Contact/Contact'
import SignIn from './Pages/Contact/Login/page'
import SignUp from './Pages/Contact/SignUp/page'
import { http } from './http/http'
import Guyst from './Pages/Contact/User/Guyst'
import CreateBlog from './Pages/Admin/Components/CreateBlog'
import CreateProject from './Pages/Admin/Components/CreateProject'
import Container from './Pages/Home/Components/Overview/Container'
import About from './Pages/Home/Components/Overview/About'
import Education from './Pages/Home/Components/Overview/Education'
import Experience from './Pages/Home/Components/Overview/Experience'
import Skils from './Pages/Home/Components/Overview/Skils'
import Remote from './Pages/Admin/Remote/Hcloud/Remote'
import Catagory from './Pages/Admin/Remote/Hcloud/Components/Catagory'
import Deshbord from "./Pages/Admin/Remote/Hcloud/Components/Deshbord"
import GeoInfo from './Pages/Admin/Remote/Hcloud/Components/GeoInfo'
import AddGeoInfo from './Pages/Admin/Remote/Hcloud/Components/AddGeoInfo'
import ViewGeoInfo from './Pages/Admin/Remote/Hcloud/Components/ViewGeoInfo'

export default function App() {
  const [loader ,setLoader] =useState(true)
  const [islogin ,setLogin] =useState(false)
  const [isuser, setUser] =useState(false)
  const [userdata ,setUserData] =useState('')
  const [isactiveuser , setIsactiveUser] =useState(false)
  const [msg ,setMsg] =useState()
  const [gmsg , setGmsg] = useState('')

 
setTimeout(() => {
  setLoader(false)
}, 3000);




 const CheckAdmin = async ()=>{
setLoader(true)
await http.get('admin/verifytoken')
.then(res=>{
  setLoader(false)
if(res.data.admin || res.data.verify){
  setLogin(true)
  
}
}).catch(err=>{set})


}
// chekck user

const CheckUser = async ()=>{
  await http.get('shihab/isguyst')
  .then(res=>{if(res.data.user){
    console.log(res.data)
      setUser(true)
    setUserData(res.data)
  }else{setUser(false)}
})
  .catch(err=>{setMsg(err.message)})
}
// check if user is active

useEffect(()=>{
CheckAdmin()
CheckUser()
},[])

if(gmsg){
  setTimeout(() => {
    setGmsg(null)
  }, 9000);
}

  return (
    <div className='dark:bg-slate-900 min-h-screen relative  dark:text-white'>
    <UserContext.Provider value={{islogin , setLogin , isuser , userdata , isactiveuser , setGmsg , gmsg}}>

   
    {
      loader? <PreLoader msg={msg}/> : 

      <BrowserRouter>
      <Layout/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Blogs' element={<Story/>} />
       <Route path="/Blogs/viewblog/:id" element={<ViewBlog/>} />
       <Route path='/Project' element={<Project/>} />
       <Route path='/Gallery' element={<Gallery/>} />
       <Route path='*' element={<Error/>} />
     
       <Route path='/Contact' element={!isuser? <Contact/> :<Guyst/> } >
     <Route path='login' element={<SignIn/>} />
      <Route path='signup' element={<SignUp/>} />
      </Route>
     
  
         <Route path='/overview' element={<Container/>}>
            <Route index path='about' element={<About/>} />
            <Route path='education' element={<Education/>} />
            <Route  path='experience' element={<Experience/>} />
            <Route path="skill" element={<Skils/>} />
          </Route>


       <Route path='/me' element={islogin? <Admin/> : <Auth/>} >
        <Route path='card' element={<MeDeshbord/>} />
        <Route path='story' element={<MeStory/>} />
        <Route path='remote' element={<Remote/>}>
        {/* remote components */}
        <Route path='catagory' element={<Catagory/>} />
        <Route path ="deshbord" element={<Deshbord/>} />
        <Route path ="geoinfo" element={<GeoInfo/>}>
        <Route path="addinfo" element={<AddGeoInfo/>} />
        <Route path='viewinfo' element={<ViewGeoInfo/>} />
        </Route>
        {/* end remote remote components */}

        </Route>


        
        <Route path='chart' element={<Chart/>} />
      <Route path="website/" element={<Websites/>}>
       <Route path='blog' element={<CreateBlog/>} />
       <Route path='project' element={<CreateProject/>} />
      </Route>
  
       </Route>
      </Routes>
      
      </BrowserRouter>


    }
</UserContext.Provider>
{
gmsg? <div className="absolute ese-anim bottom-4 right-4 p-2 px-3 backdrop-blur-3xl rounded-lg shadow-lg text-white z-50 ">{gmsg&&gmsg}</div>
:null
}
    </div>
  )
}
