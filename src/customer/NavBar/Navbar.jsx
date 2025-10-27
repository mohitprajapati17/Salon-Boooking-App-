import React from 'react'
import { Badge, Button, IconButton } from '@mui/material'
import { Notifications, NotificationsActive } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Logout } from '@mui/icons-material'


function Navbar() {
    const [anchorEl , setAnchorEl]=useState(null)
    const navigate=useNavigate();
    const open = Boolean(anchorEl)
    const handleClick=(event)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
  return (
    <div className='z-50 px-6 flex items-center justify-between py-2'>
        <div className ="flex items-center gap-10">
            <h1 className="cursor-pointer font-bold  text-2xl"> Salon service </h1>
            <div  className ="flex items-center gap-5">
                <h1>Home</h1>

            </div>

        </div>
        <div className="flex items-center gap-3  md:gap-6">
            <Button  variant ="outlined">Become Partner</Button>
            <IconButton  onClick={()=>navigate("/notifications")}>
                <Badge badgeContent={4}>
                    <NotificationsActive  color="primary"/>
                </Badge>
            </IconButton>
           {false? <div className="flex gap-1 item-center">
                <h1 className="font-bold my-3"> Mohit</h1>
                <IconButton id="basic-button" aria-controls={open?'basic-menu':undefined} aria-expanded={open?true:undefined} aria-haspopup="true" onClick={handleClick}>
                    <Avatar sx={{bgcolor:"green"}}>
                        M
                    </Avatar>

                </IconButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                <MenuItem onClick={()=>{navigate("/bookings")
                    handleClose()}}>Bookings</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>

                </Menu>

            </div>
            :<IconButton>
                <AccountCircle sx={{color:"green" , fontSize:"45px"}}/>
            </IconButton>


}
        </div>

        
        </div>
  )
}

export default Navbar