import React from 'react'
import SalonDetail from './SalonDetail'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Divider } from '@mui/material'
import Review from '../../customer/Review/Review'
import CreateReviewForm from '../../customer/Review/CreateReviewForm'


import SalonServiceDetails from './SalonServiceDetails'
const tabs=[{name:"AllServices"},{name:"Reviews"},{name:"Create Review"}]
function SalonDetails() {
    const[activeTab , setActiveTab]=useState(tabs[0])
    const handleActiveTab=(tab)=>{
        setActiveTab(tab)
    }
  return (
    <div className='px-5 lg:px-20'>
    <div><SalonDetail/></div>
    <div className='space-y-4'> 
        <div>
        {tabs.map((tab)=><Button variant ={tab.name==activeTab.name?"contained":"outlined"} onClick={()=>handleActiveTab(tab)}>{tab.name}</Button>)}
            
        
    </div>
    <Divider/>
    </div>
    <div>
        {activeTab.name==="AllServices"? <div>
            <SalonServiceDetails/> 
            </div>:activeTab.name==="Reviews"? <div>
            <Review/>
            </div>:<div> <CreateReviewForm/></div>}
    </div>
    
    </div>
  )
}

export default SalonDetails