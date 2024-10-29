import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RamelaxLogo() {
    const navigateTo = useNavigate()
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer" onClick={() => navigateTo('/')}>
        <img src='/LOGO_blanco.png' className='h-10 '/>
        <span className="text-xl font-bold">Ramelax</span>
    </div>  
    )
}
