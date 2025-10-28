import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Notifications from '../customer/Notification/Notifications'
import Booking from '../customer/Booking/Booking'
import SalonDetails from '../customer/Salon/SalonDetails/SalonDetails'
import SalonDashboard from '../Salon/SalonDashboard'
import NotFound from '../NotFound/NotFound'
import Navbar from '../customer/NavBar/Navbar'
import Home from '../customer/Home/Home'

function CustomerRoutes() {

  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/salon-dashboard/*" element={<SalonDashboard/>}/>
    <Route path="/notifications" element={<Notifications/>}/>
    <Route path="/bookings" element={<Booking/>}/>
    <Route path="/salon/2" element={<SalonDetails/>}/>
    <Route path="*" element={<NotFound/>}/>
    

    </Routes>
    </div>
  )
}

export default CustomerRoutes