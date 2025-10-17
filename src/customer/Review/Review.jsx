import React from 'react'
import ReviewCard from './ReviewCard'
function Review() {
  return (
    <div className='pt-10 flex flex-col gap-20 lg:flex-row'>
        <section className='w-full md:w-1/2 lg:w-[40%] space-y-2'>
        <h1 className='text-lg pb-4 font-semibold'>Reviews</h1>
            
        </section>
        <section className='w-full md:w-1/2 lg:w-[60%]'></section>
            <div className='mt-10'>
                <div className='space-y-5'>
                    <ReviewCard/>
                </div>

            </div>
        </div>
  )
}

export default Review