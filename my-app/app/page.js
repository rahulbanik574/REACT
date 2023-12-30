"use client";
import React, { useState } from 'react'//optional line


const page = () => {
  //let marks =80;-react mey humlog esa var nehi banate..we use react hook for making var
  const [marks, setmarks] = useState(99)
 
  return (
    //<></> called fragment ....rapper ka kam korta hey
   <>
<h1 className='font-bold'>My mark is {marks}</h1>
<button  onClick={()=>{
  setmarks(90)
}} className='bg-gray-400 py-6 px-6 rounded mt-5 text-white font-bold'>Update</button>
   </>
  )
}

export default page
