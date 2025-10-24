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
    <div className='h-full w-[280px] border-r bg-white shadow-sm'>
        <div className='flex flex-col justify-between h-full py-4'>
            <div className='space-y-1'>
                {menu.map((item,index) => (
                   <div key={index} onClick={()=>handleClick(item)} className='cursor-pointer mx-2'>
                    <div className={`${item.path==location.pathname?"bg-green-500 text-white" : "text-gray-600 hover:bg-gray-100"} flex items-center px-4 py-3 rounded-r-full transition-colors duration-200`}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            {item.path==location.pathname?item.Activeicon:item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </div>
                   </div>
                ))}
            </div>
            
            <div className='space-y-1'>
                {menu2.map((item,index) => (
                    <div key={index} onClick={()=>handleClick(item)} className='cursor-pointer mx-2'>
                        <div className={`${item.path==location.pathname?"bg-green-500 text-white" : "text-gray-600 hover:bg-gray-100"} flex items-center px-4 py-3 rounded-r-full transition-colors duration-200`}>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                {item.path==location.pathname?item.Activeicon:item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DrawerList