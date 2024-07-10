"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeSwithcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted,setMounted]=useState(false)


  useEffect(()=>setMounted(true),[])

  if(!mounted) return <span className='w-8 h-8 rounded-full'></span>
  return (
    <div className='w-8  h-8 flex justify-center items-center'>
      {
      theme === "dark" ? <FiSun onClick={() => setTheme('light')}/> 
      :  <FiMoon onClick={() => setTheme('dark')}/>
      }
      
     
    </div>
  )
}

export default ThemeSwithcher