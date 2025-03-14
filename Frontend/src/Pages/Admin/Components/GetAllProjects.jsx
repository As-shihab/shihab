import React from 'react'
import { http } from '../../../http/http'

export default function GetAllProjects() {
    http.get('shihab/project/getprojects')
    .then(res=>{console.log(res.data)})
  return (
    <div>GetAllProjects</div>
  )
}
