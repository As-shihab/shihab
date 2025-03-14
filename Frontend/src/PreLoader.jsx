import React from 'react'
import { CgSpinner } from 'react-icons/cg'
export default function PreLoader(props) {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-slate-900 '><CgSpinner className='text-blue-500 text-9xl animate-spin'/>
<br /> <p className='text-white'>{props.msg&&props.msg}</p>
    </div>
  )
}
