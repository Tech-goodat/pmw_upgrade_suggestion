import React from 'react'
import { Link } from 'react-router-dom'
import { PiDiamondsFour } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { SlSocialStumbleupon } from "react-icons/sl";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { TbBrandAsana } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";

const SideNav = () => {
    
  return (
    <div className=' flex flex-col w-[240px] h-screen  justify-center   ml-3 border-r border-gray-300 '>
        <div className='grid grid-cols-3 items-center justify-center mt-3 mr-3 rounded-md bg-[#f0fdfa] h-[65px] w-[225px]'>
            <div className='flex col-span-2 text-gray-600 flex-col ml-3'>
                <h1  className='font-bold text-lg'>$32.02</h1>
                <h1 className='text-sm '>Balance since payout</h1>
            </div>  
            <div>
        
        </div>
        </div>
       
        <div className='flex text-sm text-gray-500 gap-7 flex-col'>
              <Link className='flex p-1 w-full items-center gap-4' to='/designs'><PiDiamondsFour />Designs</Link>
              <Link className='flex p-1 w-full items-center gap-4' to='/emails'><AiOutlineMail />Emails</Link>
              <Link className='flex p-1 w-full items-center gap-4' to='/social media posts'><SlSocialStumbleupon />Social Media Posts</Link>
              <Link className='flex p-1 w-full items-center gap-4' to='/content planner'><LuClipboardEdit />Content Planner</Link>
              <hr className='w-[225px]'/>
              <Link className='flex p-1 w-full items-center gap-4' to='/dashboard'><RiDashboardLine />Dashboard</Link>
              <Link className='flex p-1 w-full items-center gap-4' to='/team'><RiTeamLine />Team</Link>
              <Link className='flex p-1 w-full items-center gap-4' to='/brand kits'><TbBrandAsana />Brand Kits</Link>

              <Link className='flex  bg-[#f0f9ff] rounded-md w-[225px] text-[#0284c7] h-[39px] p-2  items-center gap-4' to='/action center'><FiAlertTriangle />Action Center <span className='bg-[#7f1d1d] text-white p-1 w-[49px] rounded-full flex items-center justify-center'>100+</span></Link>
            </div>
    </div>
  )
}

export default SideNav