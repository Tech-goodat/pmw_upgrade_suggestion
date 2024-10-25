import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";


const NavBar = () => {
  const [item, setItem]=useState([])
  const handleInputChange =(e)=>{
    setItem(e.target.value)
  }
  return (
    <div className='flex w-full items-center h-[60px] bg-[#38bdf8]'>
        <div>
           <Link to='/'> <img src='https://www.postermywall.com/assets/images/logo-postermaker.svg?ts=1729581047' alt='postermywall-logo' className='text-sm w-[155px] ml-3 h-[50px]'/></Link>
        </div>
        <div className='flex  items-center w-[620px] justify-center text-white ml-8 gap-12'>
          <Link to='/my stuff'>My Stuff </Link>
          <Link className='flex items-center justify-center' to='/templates'>Templates <RiArrowDropDownLine size={30}/></Link> 
          <Link className='flex items-center justify-center' to='/promote'>Promote <RiArrowDropDownLine size={30} /></Link>
          <Link className='flex items-center justify-center' to='/discover'>Discover <RiArrowDropDownLine size={30}/></Link>
          <Link className='flex items-center justify-center' to='/pricing'>Pricing <RiArrowDropDownLine size={30}/></Link>
        </div>
        <div className='flex gap-3  ml-[150px]'>
        <form className='bg-white flex items-center justify-center rounded-md'>
          <input value={item} onChange={handleInputChange} placeholder='Search for a Template ' type='text' className=' rounded-md text-sm  p-2.5 w-[200px] outline-none '/><CiSearch size={20} className='mr-4 hover:cursor-pointer'/>
          
        </form>
       <Link to='/new design'> <button className='flex p-2.5 items-center justify-center rounded-md text-sm bg-[#3b82f6] text-white w-[80px]'>Create</button></Link>
        </div>
    </div>
  )
}

export default NavBar