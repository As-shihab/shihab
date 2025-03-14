import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header'
import LtsProjects from './Components/LtsProjects'
import Overview from './Components/Overview'
import PinedBlog from './Components/PinedBlog'
import Container from './Components/Overview/Container'

export default function page(props) {
 
  return (


    <>
       <Helmet>
        <title>Home</title>

      </Helmet>

      <div className=''>
       <Header  />
   
      

      <div className=" flex justify-center items-center flex-col lg:font-extrabold w-full pt-12 lg:pt-36 text-center ">
  <h1 className='lg:text-8xl text-7xl pt-5 font-extrabold dark:home_lg_text_p light:home_lg_text_dark dark:text-white'>Bring The World Closer <span className='home_lg_text'>Togather!</span></h1>
</div>


<div className=" lg:w-1/2 m-auto  text-center pt-12 px-12">Hi, I'm abdus salam shihab a coplete website designer and developer || i've 3 years experience in full-stuck web development <br />
<div className="mt-3"><button className="rounded-lg dark:bg-slate-800 border animate-pulse  mt-4 py-2 px-4">Get into  in  </button>
<button className='rounded-lg dark:bg-slate-800 border  ml-2 mt-4 py-2 px-4'>Download cv <i className="fa fa-arrow-down ml-1"></i></button>
</div>
 </div>

{/* overivew */}
<Container/>
{/* lts projects */}


<div className="lg:mt-36 lg:px-4  mt-24 ">

<Overview/>

{/* pined blogs */}

<PinedBlog/>
 
<div>
<LtsProjects/>
</div>
</div>


{/* end lts projects */}

    </div>
    
    </>
  )
}
