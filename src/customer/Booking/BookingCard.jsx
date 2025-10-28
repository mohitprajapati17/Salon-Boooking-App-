import React from 'react'
import { ArrowRight } from '@mui/icons-material'
import { Button } from '@mui/material'
function BookingCard() {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">

    <div className ="space-y-2">
        <h1 className="font-bold text-2xl">
            Monika Salon
        </h1>
        <div>
            <l1>
                hair cut
            </l1>
            <l1>
                 massage therapy
            </l1>
            <l1> hair color</l1>
        </div>
        <div>
            <p>Time &  Date <ArrowRight/> 2025-01-15</p>
            <p> 12:00:00 To 12:45:00</p>
        </div>
        
    </div>

    <div className ="space-y-2">
        <img  className="h-28 w-28" src="https://i.pinimg.com/736x/f8/46/a6/f846a6e7fabd5ca988d643c35ff36869.jpg" alt=""/>
        <p className ="text-center">$56</p>
        <Button color="error" variant="outlined">Cancelled</Button>
    </div>

    </div>
  )
}

export default BookingCard