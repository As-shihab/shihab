import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../assets/bg.png'

import { Link,  useParams } from 'react-router-dom'

import { http } from '../../http/http'
import { path } from '../../lib/path'
import HTMLReactParser from 'html-react-parser/lib/index'


export default function viewblog() {
  const [isloading, setLoading] = useState(true)
  const { id } = useParams()
  const [blog, setBlog] = useState('')

  useEffect(() => {

    ViewBlog()

  }, [])

  const ViewBlog = async () => {
    await http.get('shihab/blog/' + id)
      .then(res => {
        if (res.data.get) { setBlog(res.data) }
        console.log(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }
  return (

    <> <Helmet>
      <title>Blogs</title>

    </Helmet>
      <Header />




      <div className=' h-full grid mt-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-2 dark:bg-slate-900'>

        <div className=" lg:col-span-2 grid blog-container p-2 lg:max-h-[90vh] lg:overflow-y-scroll rounded-lg   md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1">

          {
            isloading ?
              <div className=''>
                <div className="p-2 bg-slate-800 rounded-lg min-h-[40vh] animate-pulse shadow-lg">



                </div>
                <div className='min-h-12 bg-slate-800 animate-pulse rounded-lg  my-3'></div>

                <div className="content my-1 py-2 animate-pulse shadow-lg min-h-[50vh] bg-slate-800 p-2 rounded-lg ">

                </div>
              </div>

              :

              <div className=''>
                <div className="p-2 bg-slate-800 rounded-lg overflow-hidden flex flex-col shadow-lg">
                  <LazyLoadImage
                    className='rounded-lg w-full bg-cover '
                    src={blog.blog[0].imgid && path + blog.blog[0].imgid}
                    width="100"
                    effect='blur'
                  />
                  <font className='py-2 text-gray-50 px-1'>Relesed : {blog.blog[0].
                    createdAt && blog.blog[0].createdAt.slice(0 , 10)}</font>
                  <h1 className='lg:text-3xl md:text-2xl text-2xl my-3 font-bold text-gray-100'>{blog.blog[0].title && blog.blog[0].title}</h1>
                </div>

                <div className="content my-1 py-2 shadow-lg bg-slate-800 p-2 rounded-lg ">
                  {blog.blog[0].content && HTMLReactParser(JSON.parse(blog.blog[0].content))}
                </div>
              </div>}






        </div>
        <div className="grid col-span-1  blog-container grid-cols-1 border lg:max-h-[90vh] lg:overflow-y-scroll  border-slate-800 rounded-lg">
          <div className=" flex flex-col gap-2 px-2 py-3 rounded-lg">
            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>

            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>


            <div className="flex shadow-sm items-start  bg-slate-800 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>


            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>
            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>
            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>
            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>


            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>


            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>
            <div className="flex shadow-sm items-start  bg-slate-600 px-4 py-2 rounded-lg gap-2"><LazyLoadImage
              src={Img}
              effect='blur'
              width="300"
              className='rounded-lg'
            />
              <b className=''>Once upon a time when i had done my hsc but not my expections</b>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}
