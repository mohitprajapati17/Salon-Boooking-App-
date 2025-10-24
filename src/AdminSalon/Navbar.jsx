import React from 'react'
import { Menu, NotificationsActive } from '@mui/icons-material'
import { IconButton, Badge } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'


export default function Navbar({DrawerList}) {
    const [open,setOpen]=useState(false)
    const toggle=(value)=>{
        setOpen(value)
    }
  return (


    <div className ="h-[80px] flex items-center justify-between px-5 border-b bg-white shadow-sm">
        <div className="flex items-center gap-3">
            <IconButton onClick={() => toggle(true)}>
                <Menu color="primary"/>
            </IconButton>
            <h1 className="font-bold text-2xl">Salon Booking</h1>
            </div>
            <IconButton>
                <Badge color="secondary">
                    <NotificationsActive color="primary" />

                </Badge>
            </IconButton>

            <Drawer open={open} onClose={() => toggle(false)}>
                <DrawerList toggleDrawer={toggle} />
            </Drawer>


       
    </div>
  )
}
