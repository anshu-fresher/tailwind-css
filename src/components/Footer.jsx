import React from 'react'

const Footer = () => {
  return (
    <div className='font-serif text-gray-600'>
    <div className='flex  flex-col gap-12'>
        <ul className='flex gap-4'>
          <li>
            <a href="#">FACEBOOK</a>
          </li>
          <li>
            <a href="#">INSTAGRAM</a>
          </li>
          <li>
            <a href="#">LINKEDIN</a>
          </li>
        </ul>

      <div className='flex gap-4'>
        <img  className='' src="/assets/Help-Avatar.svg" alt="avatar" />
        <div className=''>
          <p> HAVE ANY QUESTION?</p>
          <a href="#">talk with specialist</a>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default Footer