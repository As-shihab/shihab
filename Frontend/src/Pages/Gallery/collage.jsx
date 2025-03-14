import React from 'react'
import Img from '../../assets/bg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function collage() {
  return (
    <div className="grid gap-3 p-4 rounded border border-slate-700  grid-cols-2 md:grid-cols-2 lg:grid-cols-4">


    <LazyLoadImage src={Img}
        effect='blur'
      />

  </div>

  )
}
