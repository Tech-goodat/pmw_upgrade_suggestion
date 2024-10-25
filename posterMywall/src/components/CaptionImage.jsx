import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SiTicktick } from "react-icons/si";



const CaptionImage = () => {
    const navigate=useNavigate()
    const {id}=useParams()

    const [design, setDesign]=useState([])
    const [patchDesign, setPatchDesign]=useState({
        name:"",
        uses:"",
        sales:""
    })
    

    const handleAddName=(e)=>{
        const {name, value}=e.target
        setPatchDesign((prevData)=>({
            ...prevData, [name]:value
        }))
        
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        fetch(`http://127.0.0.1:5555/design_by_id/${id}`,{
            method:'PATCH',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(patchDesign)
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("error submitting your response", Error)
            }

            return response.json()
        })
        .then((data)=>{
            console.log('this is my patch data........', data);
            setPatchDesign({
                name: data.name ,
                uses: data.uses,
                sales: data.sales ,
            });
            navigate('/')

        })
        .catch(error=>{
            console.error("error submitting form", error)
        })
    }

    useEffect(()=>{
        fetch(`http://127.0.0.1:5555/design_by_id/${id}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("error fetching data")
            }
            return response.json()
        })
        .then((data)=>{
            console.log('this is my data........', data);
            setDesign(data);
            
        })

        .catch(error=>{console.log("error fetching data", error)})
    },[])
  return (
    <div className=' flex  w-full  flex-col h-full items-center justify-center '>
    <div className=' flex w-full flex-col items-center justify-center'>
            <h1 className='text-[22px] text-center mt-2 italic'>Template name</h1>
            <h1 className='text-[15px] text-center mt-1 '>Add a name that best describes the topic of your design.</h1>
        </div>
    <div className='grid grid-cols-2 gap-5 mt-[20px] w-full h-full '>
        <form>
            <input type='text' name='name' value={patchDesign.name} onChange={handleAddName} placeholder='Enter a name that best describes your design' className='text-sm w-[500px] hover:border-blue-300 p-2 border rounded-md outline-none'/>
            <div className='flex flex-col w-full   h-[270px] shadow-sm mt-8 bg-blue-50 rounded-md'>
                <h1 className='mt-5 ml-6 font-bold'>What is a good name?</h1>
                <p className='ml-6 text-sm italic mt-3'>A good name is descriptive and incorporates the following:</p>
                
                <div className='flex w-full items-center gap-4 text-gray-500'><SiTicktick size={30} className='flex items-center ml-6  mt-3 bg-blue-100 rounded-full '/><p>Color Palette</p></div>
                <div className='flex w-full items-center gap-4 text-gray-500'><SiTicktick size={30} className='flex items-center ml-6  mt-3 bg-blue-100 rounded-full '/><p>Design Style</p></div>
                <div className='flex w-full items-center gap-4 text-gray-500'><SiTicktick size={30} className='flex items-center ml-6  mt-3 bg-blue-100 rounded-full '/><p>Primary Topic</p></div>
                <div className='flex w-full items-center gap-4 text-gray-500'><SiTicktick size={30} className='flex items-center ml-6  mt-3 bg-blue-100 rounded-full '/><p>Design Size</p></div>
            <div className='flex mt-12 items-center gap-5'>
                <input type='text' name='uses' value={patchDesign.uses} onChange={handleAddName} placeholder='Enter uses' className='text-sm w-[152px] hover:border-blue-300 p-2 border rounded-md outline-none'/>
                <input type='text' name='sales' value={patchDesign.sales} onChange={handleAddName} placeholder='Enter sales' className='text-sm w-[152px] hover:border-blue-300 p-2 border rounded-md outline-none'/>
                <button onClick={handleSubmit} className='w-[153px] bg-[#3b82f6] text-white p-2 items-center justify-center text-sm rounded-md'>Submit</button>
                </div>
            </div>


        </form>
        
        {design && <div className='flex items-center w-full justify-center bg-gray-50 rounded-md p-[30px]'>
            <img className='h-[400px] w-auto' src={design.image_url}  alt='design image'/>
            </div>}
    </div>
    </div>
  )
}

export default CaptionImage