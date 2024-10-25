import React, { useEffect } from 'react'


const DynamicRoute = ({element:Element, title}) => {

    useEffect(()=>{
        document.title=title
    },[title])

  return <>{Element}</>
  
}

export default DynamicRoute