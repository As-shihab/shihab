import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../../../assets/profile.jpg'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MdCastForEducation } from 'react-icons/md'
import { BsFacebook, BsGithub, BsJournalBookmark, BsLinkedin, BsTwitter, BsX, BsYoutube } from 'react-icons/bs'

import { SiAboutdotme } from 'react-icons/si'
export default function Container() {
  document.addEventListener('mousemove' , (e)=>{
    let top = e.pageX;
    let left = e.pageY;
      let blur = document.querySelector('.effect')
      blur.style.top = left-122+"px";
      blur.style.left = top-122+"px";
     
  })
  return (
<div className='relative h-screen overflow-hidden'>
  <div className=" h-1/4 effect opacity-8 w-1/4 relative blur-lg rounded-full top-1/4 opacity-35 bg-sky-900 z-0">
    
  </div>
<div className='absolute backdrop-blur-2xl top-0 left-0 w-full h-full '>
<div className='relative  h-screen   p-3 px-7 flex justify-between items-start   '>
        <div className="profile  h-[90vh] relative w-[40%]">
             <div className='flex flex-col'>
                <LazyLoadImage
                src={Img}
                effect="blur"
                className="w-[90px] h-[90px] rounded-full  shadow-lg  border-solid profile-pic border-4 border-white"
                />
                <p className='font-black   text-6xl mt-2 '>As Shihab</p>
                <b className='text-green-400 text-2xl py-2'>FullStack Web and App developer</b>
                <p className='text-gray-50'>
                Experienced Software Developer proficient in coding and debugging, consistently delivering project objectives through the creation of refined, scalable, and production-ready code. Adept at collaborating within Agile and Scrum frameworks to achieve team goals effectively.
                </p>

                <div className="linkes flex mt-4 text-center flex-col text-green-300 gap-1">
                    <NavLink to="/overview/about" className='link flex gap-2 text-xl items-center'><SiAboutdotme/> About </NavLink>
                    {/* <Link to="#about" className='link flex gap-2 text-xl items-center'><BiLink/> About </Link> */}
                    <NavLink to="/overview/education" className='link flex gap-2 text-xl items-center'><MdCastForEducation/> Education </NavLink>
                  <NavLink to="/overview/experience" className='link flex gap-2 text-xl items-center'><BsJournalBookmark/> Experience </NavLink>
                  <NavLink to="/overview/skill" className='link flex gap-2 text-xl items-center'><BsJournalBookmark/> Skills </NavLink>
                </div>

             </div>


<div className="absolute bottom-2  flex items-center gap-7">
<a href="https://github.com/As-shihab" target='_blank'><BsGithub className='text-4xl'/></a>
<a href="https://www.linkedin.com/in/as-shihab/" target='_blank'><BsLinkedin className='text-4xl'/></a>
<a href="https://www.facebook.com/asshihab45/" target='_blank'><BsFacebook className='text-4xl'/></a>
<a href="https://github.com/As-shihab" target='_blank'><BsTwitter className='text-4xl'/></a>
<a href="https://www.youtube.com/@Asshihab." target='_blank'><BsYoutube className='text-4xl'/></a>

</div>

        </div>
        <div  className="details w-[53%] ">
         <Outlet/>
        </div>
    </div>
</div>
</div>
  )
}
