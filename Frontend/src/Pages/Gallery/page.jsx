import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header'
import Img from './bg.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Collage from './collage'
import Collage_loader from '../../lib/collage_loader'
export default function page() {
  return (


    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>


      <div className='min-h-screen dark:bg-slate-900'>
         <Header />

      <div className=" w-full m-auto h-[100vh] md:h-[70vh] lg:h-[70vh] overflow-hidden relative sm:flex-col">
     <div className="blur-3xl select-none flex justify-around  gallery-blur relative h-full text-center w-full">
     <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-sky-500 ... h-56 w-56 rounded-full"></div>
     <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-900 ... lg:h-56 lg:w-56 rounded-full"></div>
     </div>

     <div className="flex justify-between mt-7 lg:mt-0 md:mt-0 lg:flex-row items-center w-11/12 top-content absolute sm:gap-7 flex-col left-[50%] top-[50%] sm:flex-col">
     <div className="cloud_header md:w-[60%] w-full lg:w-[60%]">
        <h1 className="text-8xl text-center font-extrabold ">
          Wecome to Shihab <span className="text-green-500 animate-pulse text-8xl">
            Cloud
          </span>
        </h1>
       </div>
<div className='lg:w-2/5 gap-1  grid grid-cols-2 md:w-2/4 sm:w-full'>

<LazyLoadImage
       effect='blur'
      className='rounded-lg'
      src={Img}
      />

<LazyLoadImage
       effect='blur'
      className='rounded-lg'
      src={Img}
      />


<LazyLoadImage
       effect='blur'
      className='rounded-lg'
      src={Img}
      />


<LazyLoadImage
       effect='blur'
      className='rounded-lg'
      src={Img}
      />

</div>
     </div>
      </div>

     <Suspense fallback={<Collage_loader/>}>
<Collage/>
     </Suspense>
   
    </div>
    
    </>
  )
}
