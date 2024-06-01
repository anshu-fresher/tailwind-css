import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-center'>
        <img src="/assets/Blue-Shape.svg"  alt=" Blue" className='-rotate-45 h-64' />
        <img src="/assets/Pink-Shape.svg"  alt=" pink"  className='absolute -rotate-[30deg] h-64 '/>
        <img src="/assets/Purple-Shape.svg"  alt=" purple" className='absolute -rotate-[15deg] h-64'/>
        <img src="/assets/Hero-Model.png"  alt=" hero" className='absolute h-64'/>
      </div>
      <h1 className='text-5xl font-serif leading-tight text-gray-900'><b>Host your website in less than 5 minutes.</b></h1>
      <p className='font-lato leading-tight text-gray-500'>with Hoster,get your wensite up and running in less than 5 minutes with the most competative pricing packages availabel online</p>
      <form action="" className='flex flex-col gap-4'>
        <input className='rounded-md px-4 py-3 placeholder:text-purple-800 bg-purple-100' type="email" placeholder='Enter email address' />
        <button className='rounded-md px-4 py-3 bg-purple-300 hover:bg-purple-500 text-violet-500 hover:text-purple-900'>Join Waitlist</button>
      </form>
      <div className='flex gap-2'>
        <img src="/assets/Checkmark.svg" alt="check " />
        <p className='font-serif text-gray-500'>No spam, ever . unsubscribe anytime</p>
      </div>
      <div>
      </div>

      </div>
  )
}

export default Body