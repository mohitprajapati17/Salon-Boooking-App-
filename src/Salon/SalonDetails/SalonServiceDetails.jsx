import React from 'react'
import CategoryCard from './CategoryCard'
import { useState } from 'react'
import ServiceCard from './ServiceCard'
import { Divider } from '@mui/material'
import SelectedServicesList from './SelectedServicesList'
import { Button } from '@mui/material'
import { RemoveShoppingCart, ShoppingCart } from '@mui/icons-material'
function SalonServiceDetails() {
    const [selectCategory,setSelectCategory]=useState(null)
    const handleCategoryClick=(category)=>()=>{
        setSelectCategory(category)
    }
  return (
    <div className='lg:flex gap-5 h-[90vh] mt-10'>
        <section className='space-y-5 border-r lg:w-[25%] pr-5'>
           {[1,1,1,1,1,1,1].map((item,index)=><CategoryCard handleCategoryClick={handleCategoryClick(index)} selectCategory={selectCategory} item={index}/>)}
        </section>
        <section className='space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto'>
            {[1,1,1,1,1,1,1].map((item)=><div className='space-y-4'>
                <ServiceCard/>
                <Divider/>
            </div>)}
        </section>

        <section className=' lg:w-[25%] '>
            <div className='border_rounded-md p-5'>
                {true?
                <div>
                    <div className='flex items-center gap-2'> 
                       <ShoppingCart sx={{fontSize:"30px",color:"green"}}/>
                       <h1 className ="font-thin text-sm">Selected Services</h1>

                    </div>
                    <SelectedServicesList/>
                    <Button  sx={{py:".8rem"}}fullWidth variant='contained'>
                        Book Now
                    </Button>

                </div>:
                <div className='flex flex-col gap-3 items-center  justify-center'>
                    <RemoveShoppingCart sx={{fontSize:"30px",color:"green"}}/>
                    <h1>Not selected</h1>
                </div>
                }    

            </div>

        </section>
    </div>
  )
}

export default SalonServiceDetails