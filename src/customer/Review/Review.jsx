import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'
import RatingCard from './RatingCard'
function Review() {
  return (
    <div className='pt-10 px-5 lg:px-20'>
        <h1 className='text-lg pb-4 font-semibold'>Reviews & Rating</h1>
        
        <div className='flex flex-col lg:flex-row gap-10'>
            {/* Left side - Rating Summary */}
            <section className='w-full lg:w-[35%]'>
                <RatingCard/>
            </section>
            
            {/* Right side - Reviews List */}
            <section className='w-full lg:w-[65%]'>
                <div className='space-y-5'>
                    {[1,1,1,1,1,1,1,1].map((item, index)=>{
                        return(
                            <div key={index} className='space-y-3'>
                                <ReviewCard/>
                                <Divider/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    </div>
  )
}

export default Review