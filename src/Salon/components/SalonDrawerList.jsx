import { AccountBox, Inventory } from '@mui/icons-material'
import React from 'react'
import { Dashboard } from '@mui/icons-material'
import { ShoppingBag } from '@mui/icons-material'
import { AccountBalanceWallet } from '@mui/icons-material'
import { Receipt } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import { Category } from '@mui/icons-material'
import { Notifications } from '@mui/icons-material'


import { Logout } from '@mui/icons-material'
import DrawerList from '../../AdminSalon/DrawerList'
const menu=[
    {
        name:"Dashboard",
        path:"/salon-dashboard",
        icon:<Dashboard className='text-primary-color'/>,
        Activeicon:<Dashboard className='text-secondary-color'/>,
    },
    {
        name:"Shopping",
        path:"/salon-dashboard/shopping",
        icon:<ShoppingBag className='text-primary-color'/>,
        Activeicon:<ShoppingBag className='text-secondary-color'/>,
    },
    {
        name:"Services",
        path:"/salon-dashboard/services",
        icon:<Inventory className='text-primary-color'/>,
        Activeicon:<Inventory className='text-secondary-color'/>,
    },
    
    {
        name:"Add Services",
        path:"/salon-dashboard/add-services",
        icon:<Add className='text-primary-color'/>,
        Activeicon:<Add className='text-secondary-color'/>,
    },
    {
        name:"Payment",
        path:"/salon-dashboard/payment",
        icon:<AccountBalanceWallet className='text-primary-color'/>,
        Activeicon:<AccountBalanceWallet className='text-secondary-color'/>,
    },
    {
        name:"Transaction",
        path:"/salon-dashboard/transaction",
        icon:<Receipt className='text-primary-color'/>,
        Activeicon:<Receipt className='text-secondary-color'/>,
    },
    {
        name:"Category",
        path:"/salon-dashboard/category",
        icon:<Category className='text-primary-color'/>,
        Activeicon:<Category className='text-secondary-color'/>,
    },
    {
        name:"Notifications",
        path:"/salon-dashboard/notifications",
        icon:<Notifications className='text-primary-color'/>,
        Activeicon:<Notifications className='text-secondary-color'/>,
    },
 
    
]

const menu2=[
    {
        name:"Account",
        path:"/salon-dashboard/account",
        icon:<AccountBox className='text-primary-color'/>,
        Activeicon:<AccountBox className='text-secondary-color'/>,
    },
    {
        name:"Logout",
        path:"/",
        icon:<Logout className='text-primary-color'/>,
        Activeicon:<Logout className='text-secondary-color'/>,
    },
]

function SalonDrawerList({ toggleDrawer }) {
  return (
    <div><DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/></div>
  )
}

export default SalonDrawerList
