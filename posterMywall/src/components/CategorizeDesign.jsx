import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const CategorizeDesign = () => {
    const {id}=useParams()

    const [fetchedDesign, setFetchedDesign]=useState([])
    const [category, setCategory]=useState([])

    useEffect(()=>{
        fetch(`http://127.0.0.1:5555/design_by_id/${id}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("error fetching design", Error)
            }
            return response.json()
        })
        .then((data)=>{
            console.log("fetched design...............", data)
            setFetchedDesign(data)
        })
        .catch(error=>{
            console.error("error fetching design", error)
        })
    },[])

    useEffect(()=>{
        fetch('http://127.0.0.1:5555/categories')
        .then((response)=>{
            if(!response.ok){
                throw new Error("error fetching categories", Error)
            }
            return response.json()
        })
        .then((data)=>{
            console.log("serving category............", data)
            setCategory(data)

        })
        .catch(error=>{
            console.error("error fetching categories", error)
        })
    },[])

  return (
    <div className="flex flex-col w-full items-center">
        <div className="flex flex-col w-full items-center ">
            <h1 className="text-lg font-bold">Design Style</h1>
            <p className="text-sm">Choose up to 2 design styles that best describe the visual aesthetic of your template.</p>
        </div>
    <div className="grid grid-cols-2 gap-7 mt-5 items-center w-full ">
        <div className="flex flex-col h-full w-full items-center">
            <input type='text' placeholder='Search your design ............' className="text-sm italic outline-none p-2 rounded-md border w-full"/>
            <div className="grid w-full mt-4 grid-cols-2 gap-4">
                {category.map(item=>(
                    <div className="flex p-4 bg-gray-50 w-full rounded-lg flex-col  items-center">
                        <h1 className="text-lg font-bold">{item.name}</h1>
                        <p className="text-[10px] text-center">{item.description}</p>
                        <div className="flex gap-2 mt-4 w-full  items-center">
                            <img className="h-[130px]  w-auto"  src={item.image_url_1}/>
                            <img className="h-[130px]   w-auto" src={item.image_url_2}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center h-[500px] rounded-lg  p-[30px]">
            {fetchedDesign && <div className="w-full flex items-center  justify-center">
                <img src={fetchedDesign.image_url} className="h-[450px] border-gray-50  mb-[500px] rounded-lg w-auto "/>
                </div>}
        </div>

    </div>
    </div>
  )
}

export default CategorizeDesign