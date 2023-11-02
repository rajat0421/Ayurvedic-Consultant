import React, { useEffect } from 'react'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'


const LogOutComponent = () => {
    const router=useRouter();
    const [count,setCount]=useState(3)
    useEffect(()=>{
        setInterval(()=>{
            setCount(count-1)
        },1000)

        setTimeout(()=>{router.push('/')},3000) 
    })
  return (
    <>
        <div className="wrap flex items-center justify-center text-white text-[1.2rem] px-8 text-center md:text-[2rem]">
            <p>Logging out in {count} </p>
            
        </div>
    </>
  )
}

export default LogOutComponent
