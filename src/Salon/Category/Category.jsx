import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'
import CategoryTable from './CategoryTable'
import CategoryForm from './CategoryForm'

function Category() {
    const [activeTab,setActiveTab]=useState(1);
    const handleTabClick=(tab)=>()=>{
        setActiveTab(tab)

    }
  return (
    <div>

        <div className ='flex items-center gap-5'>
            <Button onClick={handleTabClick(1)} variant={activeTab===1?"contained":"outlined"}>All Category
            </Button>
            <Button onClick={handleTabClick(2)} variant={activeTab===2?"contained":"outlined"}>Create Category
            </Button>
            

        </div>
        <div>
            {activeTab===1? <CategoryTable/> : <CategoryForm/>}

        </div>

    </div>
  )
}

export default Category