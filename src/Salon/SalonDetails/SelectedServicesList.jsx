import { IconButton } from '@mui/material'
import React from 'react'
import Close from '@mui/icons-material/Close';


function SelectedServicesList() {
  return (
    <div className='my-5 space-y-2'>
       {[1,1,1,1,1,1,1,1].map((item)=>{
         return<div className='py-3 px-5 rounded-md bg-slate-100 flex items-center justify-between'>
            <h1 className='font-thin'> Stylish Beared</h1>
            <p>$39</p>
            <IconButton/>
            <Close/>
            <IconButton/>

        </div>
       })}
        </div>
  )
}

export default SelectedServicesList