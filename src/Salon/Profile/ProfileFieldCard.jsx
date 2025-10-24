import React from 'react'
import { Divider } from '@mui/material'

function ProfileFieldCard({values, keys}) {
  return (
    <div  className="p-5 flex items-center bg-slate-50 space-x-6">
        <p className ="w-20 lg:w-36 pr-5">{keys}</p>
        <Divider flexItem orientation="vertical"/>
        <p className="pl-4 lg:pl-10  font-semibold lg:text-lg">{values}</p>
        
    </div>
  )
}

export default ProfileFieldCard
