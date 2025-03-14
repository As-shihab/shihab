import React, { useEffect, useState } from 'react'
import { GoNumber } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import { http } from '../../http/http'
import SpinLoader from '../../lib/SpinLoader'

export default function Layout() {

  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('Write  Email')
  const [code, setCode] = useState(false)
  const [smscode, setSmsCode] = useState('')
  useEffect(() => {
    if (email.length > 3) {
      setMsg('try')
      if (email > 5) {
        setMsg('again')
      } if (email.includes("study.shihab@.shihab")) {
        setMsg("ok")
      } if (!email.includes("study.shihab@gmail.com")) {
        setMsg('not')
      }
      else {
        setMsg("Sent Code")
      }
    }
  }, [email])

  const data = { email: "html.shihab@gmail.com" }
  const GetCode = async () => {

    if (email.includes('study.shihab@gmail.com')) {
      setLoader(true)
      // setMsg("Code has been sent ")
      await http.post('admin/getadmin', data)
        .then(res => {
          setLoader(false)
          console.log(res.data)
          if (res.data.otp) {
            setCode(true)
          }
        })
    }

  }

  const Verify = async () => {
    setLoader(true)
    await http.post("admin/verifycode", { code: smscode })
      .then(res => {
        setLoader(false)
        if (res.data.login) {
          localStorage.setItem('admintoken', res.data.token)
          location.reload()
        }
        console.log(res.data)
      })
  }

  return (
    <div className='bg-slate-900 h-screen '>
      <div className="absolute top-2/4 left-2/4 lg:w-2/5 md:w-3/5 sm:w-full w-full px-4  sm:px-4 m-auto  text-center -translate-x-2/4 -translate-y-2/4 text-white">
        <h1 className='text-4xl bold my-5 font-bold text-gray-50'>{loader ? "" : msg == "try" ? "Go on" : msg == "again" ? "Keep going" : msg == "not" ? "Not match admin Email" : msg == "ok" ? "This is valid email" : msg ? msg : code ? "Write Code" : null}</h1>
        {
          loader ?
            <SpinLoader />
            : code ? <div className="flex gap-2 items-center justify-between border border-slate-800 py-1 rounded-lg px-2"><GoNumber className='text-4xl text-gray-300' /> <input type="text" placeholder='Type recived code here'
              className='bg-slate-900 py-3 px-2 outline-none border-none h-full w-full'
              onChange={(e) => { setSmsCode(e.target.value) }}
              value={smscode}
            />
              <button onClick={Verify} className='py-2 focus:bg-slate-800 focus:text-white  rounded-lg shadow-sm bg-sky-600 px-4 text-white '>Submit</button>
            </div> :

              <div className="flex gap-2 items-center justify-between border  border-slate-800 py-1 shadow-xl rounded-lg px-2"><MdEmail className='text-4xl sms ' /> <input type="text" placeholder='Type email to sent code'
                onChange={(e) => { setEmail(e.target.value) }}
                className='bg-slate-900 py-3 px-2 outline-none  border-none h-full w-full' value={email} />
                <button onClick={GetCode} className='py-2  rounded-lg shadow-sm bg-orange-400  text-white px-3  hover:bg-slate-800 hover:text-white transition-colors '>Get </button>
              </div>
        }



      </div>
    </div>
  )
}
