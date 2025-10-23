import React from 'react'
import { ListItemIcon, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

function DrawerList({menu,menu2  ,toggleDrawer}) {
    const navigate=useNavigate()
    const location=useLocation()
    const  handleClick=(item)=>{
        navigate(item.path)
        if(toggleDrawer){
            toggleDrawer(false)
        }
    }

  return (
    <div className='h-full'>
        <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
            <div className='space-y-2'>
                {menu.map((item,index) => (
                   <div key={index}  onClick={()=>handleClick(item)} className= ' cursor-pointer pr-9 '>
                    <div  className={`${item.path==location.pathname?"bg-primary-color text-secondary-color" : "bg-secondary-color text-primary-color"} flex items-center px-5 py-3 rounded-r-full `}>

                        <ListItemIcon>
                            {item.path==location.pathname?item.Activeicon:item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                        </div>
                        
                   </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>

        
        <div className='space-y-2'>
            {menu2.map((item,index) => (
                <div key={index} onClick={()=>handleClick(item)} className='cursor-pointer pr-9 '>
                <div className={`${item.path==location.pathname?"bg-primary-color text-secondary-color" : "bg-secondary-color text-primary-color"} flex items-center px-5 py-3 rounded-r-full gap-2`}>
                    <ListItemIcon>
                    {item.path==location.pathname?item.Activeicon:item.icon}
                    </ListItemIcon>
                    <ListItemText>
                        {item.name}
                    </ListItemText>
                </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default DrawerList