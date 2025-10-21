import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../customer/Home/Home'
import Notifications from '../customer/Notification/Notifications'
import Booking from '../customer/Booking/Booking'
import SalonDetails from '../Salon/SalonDetails/SalonDetails'
import SalonDashboard from '../seller/SalonDashboard'
import NotFound from '../NotFound/NotFound'

function CustomerRoutes() {

  return (
    <div>
    <Routes>

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