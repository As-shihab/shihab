import React, { useEffect, useState } from 'react'
import { BiLoader, BiPlus } from 'react-icons/bi'
import { http } from '../../../../../http/http'
import axios from 'axios'

export default function AddGeoInfo() {
    const [msg, setMsg] = useState("")
    const [type, SetType] = useState("")
    const [country, setCountry] = useState({
        continent: "",
        name: "",
        lat: "",
        lon: ""
    })

    const [division, setDivison] = useState({
        country: "",
        name: "",
        ltc: "",
        lon: ""
    })

    const [district, setDistrict] = useState({
        division: "",
        label: "",
        value: "",
        ltc: "",
        lon: ""
    })

    const [upozilla, setUpozilla] = useState({
        district: "",
        name: "",
        ltc: "",
        lon: ""
    })
    // add country 
    const AddCountry = async () => {
        http.post("/hcloud/new-country", country)
            .then(res => {
                setMsg(res.data.msg)
            })
    }

    useEffect(() => {
        if (type === "division") {
            GetCountry()
        } if (type === "district") {
            GetDivision()
        }
        if (type === "upozilla") {

        }
    }, [type])

    // get country 
    const [con, setSel] = useState(null)
    const GetCountry = async () => {
        await http.get("/hcloud/get-country")
            .then(res => { setSel(res.data) })
    }

    // get diviosn

    const [dib, setDiv] = useState(null)
    const GetDivision = async () => {
        await http.get('/hcloud/get-division/' + division.country)
            .then(res => {
                setDiv(res.data)
                console.log(res.data)

            })
    }
    // GET DATA-> || <-TODO




    const division_data = {
        label: division.name,
        value: division.name,
        country: division.country,
        ltc: division.ltc,
        lon: division.lon
    }
    const AddDivisoin = async () => {
        await http.post("/hcloud/new-division", division_data)
            .then(res => {
                setMsg(res.data.msg)
                console.log(res.data)
            })
    }

    const AddDistrict = async () => {
        const district_data = {
            division: district.division,
            label: district.name,
            value: district.name,
            ltc: district.ltc,
            lon: district.lon


        }

        console.log(district_data)


        await http.post("/hcloud/new-district", district_data)
            .then(res => {
                setMsg(res.data.msg)
                console.log(res.data)
            })
            .catch(err => {
                setMsg(err.message)
            })
    }

    const AddUpozilla = async () => {

    }



    return (<>

        <div className='lg:grid-cols-3 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>

            <div className="card border border-slate-700 flex justify-around items-center rounded-lg shadow-lg p-4">
                <h1 className='text-4xl font-bold '>Country</h1>
                <BiPlus onClick={() => { SetType("country") }} className='text-white  text-3xl font-extrabold cursor-pointer  rounded-lg' />
            </div>

            <div className="card border border-slate-700 flex justify-around items-center rounded-lg shadow-lg p-4">
                <h1 className='text-4xl font-bold '>Divisions</h1>
                <BiPlus onClick={() => { SetType("division") }} className='text-white  text-3xl font-extrabold cursor-pointer  rounded-lg' />
            </div>

            <div className="card border border-slate-700 flex justify-around items-center rounded-lg shadow-lg p-4">
                <h1 className='text-4xl font-bold '>Districts</h1>
                <BiPlus onClick={() => { SetType("district") }} className='text-white   text-3xl font-extrabold cursor-pointer  rounded-lg' />
            </div>

            <div className="card border border-slate-700 flex justify-around items-center rounded-lg shadow-lg p-4">
                <h1 className='text-4xl font-bold '>Upozila</h1>
                <BiPlus onClick={() => { SetType("upozilla") }} className='text-white  text-3xl font-extrabold cursor-pointer  rounded-lg' />
            </div>




        </div>


        <div className='relative flex justify-center items-center text-center w-full mt-4'>
            {/* country */}


            {
                type == "country" ?
                    <div className="rounded-lg w-2/3 text-left p-4 shadow-lg border border-slate-700 ">
                        <h1>Add country</h1>
                        <b className='text-white  py-1 rounded-lg text-center my-3 bg-orange-500'>{msg && msg}</b>
                        <div className='py-1 px-3 text-left '>
                            <label htmlFor="">Select Continent</label><br />
                            <input type="text" onChange={(e) => { setCountry({ ...country, continent: e.target.value }) }} placeholder='Type to Continent' className=' rounded-lg px-2 outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                        </div>

                        <div className='py-1 px-3 text-left '>
                            <label htmlFor="">Select Country</label><br />
                            <input type="text" onChange={(e) => { setCountry({ ...country, name: e.target.value }) }} placeholder='Type to country' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                        </div>


                        <div className='py-1 px-3 text-left '>
                            <label htmlFor="">Select LAT</label><br />
                            <input type="number" onChange={(e) => { setCountry({ ...country, lat: e.target.value }) }} placeholder='Type to country' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                        </div>


                        <div className='py-1 px-3 text-left '>
                            <label htmlFor="">Select LON</label><br />
                            <input type="number" onChange={(e) => { setCountry({ ...country, lon: e.target.value }) }} placeholder='Type to country' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                        </div>


                        <button onClick={AddCountry} className='py-1 px-4 mt-4 ml-3 rounded-lg bg-green-400 '>Add Country</button>

                    </div>

                    : type == "division" ?

                        <div className="rounded-lg w-2/3 text-left p-4 shadow-lg border border-slate-700 ">
                            <h1>Add division</h1>
                            <b className='text-white  py-1 rounded-lg text-center my-3 bg-orange-500'>{msg && msg}</b>
                            <div className='py-1 px-3 text-left '>
                                <label htmlFor="">Select Country</label><br />
                                {
                                    con ?
                                        <select name="" value={division.country} onChange={(e) => { setDivison({ ...division, country: e.target.value }) }} className='bg-transparent text-white' id="">
                                            {
                                                Object.values(con).map(todo => {
                                                    return (
                                                        <option key={todo.id} className='bg-sky-500 text-white' value={todo.value && todo.value}>{todo.value && todo.value}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        :
                                        <span className='flex items-center'><BiLoader className='animate-spin text-xl mr-2 text-sky-500' /> Loading Countrys.....</span>
                                }
                            </div>

                            <div className='py-1 px-3 text-left '>
                                <label htmlFor=""> Division Name</label><br />
                                <input type="text" onChange={(e) => { setDivison({ ...division, name: e.target.value }) }} placeholder='Type to division' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={division.country} />
                            </div>


                            <div className='py-1 px-3 text-left '>
                                <label htmlFor="">Select LAT</label><br />
                                <input type="number" onChange={(e) => { setDivison({ ...division, ltc: e.target.value }) }} placeholder='Type to ltc' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={division.country} />
                            </div>


                            <div className='py-1 px-3 text-left '>
                                <label htmlFor="">Select LON</label><br />
                                <input type="number" onChange={(e) => { setDivison({ ...division, lon: e.target.value }) }} placeholder='Type to lon' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                            </div>


                            <button disabled={con ? false : true} onClick={AddDivisoin} className='py-1 px-4 mt-4 ml-3 rounded-lg bg-sky-400 '>{con ? "Add Division " : <BiLoader className='animate-spin text-xl mr-2 text-sky-500' />}</button>

                        </div>

                        : type == "district" ?
                            <div className="rounded-lg w-2/3 text-left p-4 shadow-lg border border-slate-700 ">
                                <h1>Add Dsitrtict</h1>
                                <b className='text-white  py-1 rounded-lg text-center my-3 bg-orange-500'>{msg && msg}</b>
                                <div className='py-1 px-3 text-left '>
                                    <label htmlFor="">Select Division</label><br />
                                    {
                                        dib ?
                                            <select name=""  defaultValue={division.country}  onChange={(e) => { setDistrict({ ...district, division: e.target.value }) }} className='bg-transparent text-white' id="">
                                                {
                                                    Object.values(dib).map(todo => {
                                                        return (
                                                            <option key={todo.id} className='bg-sky-500 text-white' value={todo.value && todo.value}>{todo.value && todo.value}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            :
                                            <span className='flex items-center'><BiLoader className='animate-spin text-xl mr-2 text-sky-500' /> Loading Countrys.....</span>
                                    }
                                </div>

                                <div className='py-1 px-3 text-left '>
                                    <label htmlFor="">District Name</label><br />
                                    <input type="text" onChange={(e) => { setDistrict({ ...district, value: e.target.value, label: e.target.value }) }} placeholder='Type to district' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={division.name} />
                                </div>


                                <div className='py-1 px-3 text-left '>
                                    <label htmlFor="">Select LTC</label><br />
                                    <input type="number" placeholder='Type to ltc' onChange={(e) => { setDistrict({ ...district, ltc: e.target.value }) }} className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={division.ltc} />
                                </div>


                                <div className='py-1 px-3 text-left '>
                                    <label htmlFor="">Select LON</label><br />
                                    <input type="number" placeholder='Type to lon' onChange={(e) => { setDistrict({ ...district, lon: e.target.value }) }} className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={division.lon} />
                                </div>


                                <button disabled={con ? false : true} onClick={AddDistrict} className='py-1 px-4 mt-4 ml-3 rounded-lg bg-blue-400 '>add</button>

                            </div>

                            :
                            type == "upozilla"
                                ?
                                <div className="rounded-lg w-2/3 text-left p-4 shadow-lg border border-slate-700 ">
                                    <h1>Add Upozilla</h1>
                                    <b className='text-white  py-1 rounded-lg text-center my-3 bg-orange-500'>{msg && msg}</b>
                                    <div className='py-1 px-3 text-left '>
                                        <label htmlFor="">Select District</label><br />
                                        <select name="" className='bg-transparent' id="">
                                            {
                                                con ?
                                                    <select name="" value={division.country} onChange={(e) => { setDivison({ ...division, country: e.target.value }) }} className='bg-transparent text-white' id="">
                                                        {
                                                            Object.values(con).map(todo => {
                                                                return (
                                                                    <option className='bg-sky-500 text-white' value={todo.name && todo.name}>{todo.name && todo.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    :
                                                    <span className='flex items-center'><BiLoader className='animate-spin text-xl mr-2 text-sky-500' /> Loading Countrys.....</span>
                                            }
                                        </select>
                                    </div>

                                    <div className='py-1 px-3 text-left '>
                                        <label htmlFor=""> Upozilla Name</label><br />
                                        <input type="text" placeholder='Type to name' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={district.name} />
                                    </div>


                                    <div className='py-1 px-3 text-left '>
                                        <label htmlFor="">Select LTC</label><br />
                                        <input type="number" placeholder='Type to ltc' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                                    </div>


                                    <div className='py-1 px-3 text-left '>
                                        <label htmlFor="">Select LON</label><br />
                                        <input type="number" placeholder='Type to long' className=' rounded-lg px-2  outline-none border-none py-2 bg-slate-600 w-full' defaultValue={country.country} />
                                    </div>


                                    <button onClick={AddUpozilla} className='py-1 px-4 mt-4 ml-3 rounded-lg bg-orange-400 '>Add Upozilla</button>

                                </div>
                                : null
            }

            {/* end */}

        </div>
    </>
    )
}

