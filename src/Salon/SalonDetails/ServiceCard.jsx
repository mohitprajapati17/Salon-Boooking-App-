import React from 'react'
import { Button } from '@mui/material'
import { FiberManualRecord } from '@mui/icons-material'

function ServiceCard() {
  return (
    <div className='w-full'> 
    <div className='flex items-center justify-between gap-5'>
        <div  className='space-y-1 flex-1'>
            <h1 className='font-bold text-2xl'>Stylish Beared</h1>
            <p>Professional haircut and styling tailored to your preferences.</p>
            <div className='flex items-center gap-2'>
                <p> $39</p>
                    <FiberManualRecord sx={{fontSize:"10px" ,color:"grey"}}/>
            <p> 45 mins</p>
            </div>
        </div>

        <div className='space-y-3'>
            <img className ="w-32 h-32 object-cover rounded-md" src="https://i.pinimg.com/736x/85/5d/24/855d2428573f8b3d38d79c8254d24e8c.jpg" alt="" />
            <Button fullWidth variant='outlined'>Add</Button>
        </div>
        
    </div>
    <div>

    </div>
    </div>
  )
}

export default ServiceCard