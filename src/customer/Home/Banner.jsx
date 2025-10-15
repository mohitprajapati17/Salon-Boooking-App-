import React from 'react'


function Banner() {
  return (
    <div className=' w-full relative h-[80vh]'>
        <video className='w-full h-full object-cover'
        src="https://booksy-public.s3.amazonaws.com/horizontal_.webm"
        autoPlay
        loop
        muted
        />

        <div className='textPart absolute flex flex-col justify-center items-center inset-0 text-white z-20 space-y-3 px-5'>
            <h1 className='text-5xl font-bold'>Be Yourself</h1>
            <p className='text-slate-400 text-2xl text-center font-semibold'>Discover the best salons and spas near you</p>
            <input type="text" placeholder=' Search salon service ...' className='border-none bg-white rounded-md py-4 w-[15rem]  md:w-[33rem]  outline-none text-black px-5'/>
        </div>
        
        
    </div>
  )
}

export default Banner