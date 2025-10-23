import React from 'react'
import SalonDetail from './SalonDetail'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Divider } from '@mui/material'
import Review from '../../Review/Review'
import CreateReviewForm from '../../Review/CreateReviewForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import SalonServiceDetails from './SalonServiceDetails'
const tabs=[{name:"AllServices"},{name:"Reviews"},{name:"Create Review"}]
function SalonDetails() {
    const formik=useFormik({
        initialValues:{
            ReviewText:"",
            ReviewRating:0
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    const[activeTab , setActiveTab]=useState(tabs[0])
    const handleActiveTab=(tab)=>{
        setActiveTab(tab)
    }
  return (
    <div className='px-5 lg:px-20'>
    <div><SalonDetail/></div>
    <div className='space-y-4'> 
        <div>
        {tabs.map((tab, index)=><Button key={index} variant ={tab.name==activeTab.name?"contained":"outlined"} onClick={()=>handleActiveTab(tab)}>{tab.name}</Button>)}
            
        
    </div>
    <Divider/>
    </div>
    <div>
        {activeTab.name==="AllServices"? <div>
            <SalonServiceDetails/> 
            </div>:activeTab.name==="Reviews"? <div>
            <Review/>
            </div>:<div  className='flex justify-center'> <CreateReviewForm/></div>}
    </div>
    
    </div>
  )
}

export default SalonDetails