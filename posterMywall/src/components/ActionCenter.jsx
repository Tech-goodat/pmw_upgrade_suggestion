import React, { useEffect, useState } from 'react'
import { LuAlertCircle } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'




const ActionCenter = () => {

  const navigate=useNavigate()

const [actOnDesigns, setActOnDesigns]=useState([])
const [selectedId, setSelectedId]=useState([])

useEffect (()=>{
fetch('http://127.0.0.1:5555/designs')
.then((response)=>{
  if(!response.ok){
    throw new Error("error fetching designs", Error)
  }
  return response.json()
})
.then((data)=>{
  console.log("serving your designs.........", data)
  setActOnDesigns(data)
})

.catch(error=>{console.error("error fetching data", error)})
},[])

const HandleClick =(id)=>{
  navigate(`/categorize design/${id}`)
}

  return (
    <div className='flex  flex-col w-full items-center'>
      <div className='flex w-full items-center'>
        <h1 className=' text-[26px] '>Action Center</h1>
      </div>
      <div className='flex text-gray-400 w-full mt-2 items-center gap-5'>
        <h1>Improve templates</h1>
        <h1>Rejected templates</h1>
       
      </div>
      <div className='flex w-full mt-2'> <hr className='flex w-full'/>
      </div>
      <div className='flex w-full gap-5 items-center bg-[#f0f9ff] h-[140px] mt-5 rounded-md'>
        <div className='flex flex-col text-gray-500 justify-center  ml-5 rounded-md w-[600px] bg-white h-[110px] items-center'>
          <div className='w-full flex ml-8 font-bold '><h1>Add design styles to boost your template visibility</h1></div>
         <div className='flex w-full ml-8 mt-3 text-sm'><h1>Help the right audience find your designs faster by adding up to 2 design styles to your templates. Get started by simply clicking a template preview.</h1></div>
        </div>
        <div className='flex w-[400px] mr-5 rounded-md bg-white h-[110px] items-center'>
          <div className='grid grid-cols-2'>
            <div className='flex ml-8 text-gray-500 gap-5 flex-col'>
              <h1 className='font-bold'>Templates updated</h1>
              <h1 className='text-sm text-[#0284c7]'>172 / 1994</h1>
            </div>
          </div>

        </div>

      </div>
      <div className='flex  w-full items-center justify-center bg-gray-100 h-[70px] mt-5 rounded-md'>
        <div className='ml-5 bg-gray-200 p-2 rounded-full'>
        <LuAlertCircle />
        </div>
        <div className='text-[12px] mr-4 ml-4 '>
          <h3>
          Your designs remain visible in the gallery without any changes. Adding design styles now will make them easier to find once we launch the filter. Remember, design styles aren't replacing categories – your template's visibility in a category relies on the keywords you use.
          </h3>
        </div>

      </div>
      <div className='flex justify-between w-full mt-8'>
        <h1 className='text-sm'>Showing 50 of 1822 templates</h1>
        <button className='border border-gray-400 flex rounded-md w-[85px] text-[12px] items-center justify-center p-[5px]'><CiFilter size={20}/>Sort by</button>
      </div>
      <div className='grid grid-cols-5 w-full gap-4'>
      {actOnDesigns.map(design=>(
        <div key={design.id} onClick={()=>HandleClick(design.id)} className='grid grid-cols-1 gap-2 h-[140px]   bg-gray-50  rounded-lg mt-4  items-center justify-center '>
          <div className="flex w-full items-center justify-center ">
            <div className="flex w-[100px] h-[100px] object-cover items-center justify-center rounded-md">
          <img src={design.image_url} alt='design image' className='w-auto rounded-md  mt-2  h-full'/>
          </div>
          </div>
          <div className='flex   text-sm items-center justify-center h-full  w-full'>
            <div className="flex w-full text-[12px] rounded-lg items-center ">
            <button className='flex bg-[#10b981] h-full w-[50%]   p-1 items-center justify-center text-white '>{design.uses} Uses</button>
            <button className='flex bg-[#059669] w-[50%] h-full p-1  items-center justify-center text-white'>{design.sales} Sales</button>
            </div>
          </div>
        </div>
       
      ))}
       </div>
    </div>
  )
}

export default ActionCenter