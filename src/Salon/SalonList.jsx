import React from 'react'
import SalonCard from './SalonCard'

function SalonList() {
  return (
    <div className='flex gap-5 flex-wr'>
        {[1,1,1,1,1,1,1].map((item)=><SalonCard/>)}
        
    </div>
  )
}

export default SalonList