import React from 'react'
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-3 '>
        <img src="/assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-300 to-purple-800 text-xs text-white px-2.5 py-1.5 rounded-xl'>Hoster is hiring</button>
      </div>

      <div className='text-purple-500'>
      <FaBars />
      </div>
    </div>
  )
}

export default Header