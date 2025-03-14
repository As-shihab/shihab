
import { TbLoader3 } from "react-icons/tb";
export default function card_loader() {
  return (

<div className="card p-5 overflow-hidden shadow-sm border border-slate-800  relative rounded-lg bg-slate-900">

<div className='w-full h-52 bg-slate-800 flex justify-center items-center rounded animate-pulse'></div>

<div className="flex justify-between items-center">
    <div className="text-left">
    <div className="mt-2 px-2 w-full animate-pulse flex items-center "> <div className="h-3 w-32 ml-2 rounded-lg bg-slate-800 animate-pulse"></div></div>
    <div className="mt-2 px-2 animate-pulse flex items-center"> <div className="w-12 h-3  ml-2 rounded-lg animate-pulse   bg-slate-800"></div></div>
    </div>

    <button className='px-5 py-1  rounded-lg  hover:bg-sky-900 '><div className="h-3  ml-2 rounded-lg w-12 bg-slate-800 animate-pulse "></div></button>
</div>


</div>
  )
}
