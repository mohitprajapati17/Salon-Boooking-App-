import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Salon/Home/HomePage'
import BookingTable from '../Salon/Booking/BookingTable'
import ServiceTable from '../Salon/Services/ServiceTable'
import TransactionTable from '../Salon/Transaction/TransactionTable'
import Category from '../Salon/Category/Category'
import CreateServiceForm from '../Salon/Services/CreateServiceForm'
import Notifications from '../customer/Notification/Notifications'
import Profile from '../Salon/Profile/Profile'
import Payment from '../Salon/Payment/Payment'
function SalonRoutes() {
  return (
    <div>

    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<BookingTable/>}/>
        <Route path="/services" element={<ServiceTable/>}/>
        <Route path="/transaction" element={<TransactionTable/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/add-services" element={<CreateServiceForm/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/account" element={<Profile/>}/>
        <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </div>
  )
}

export default SalonRoutes