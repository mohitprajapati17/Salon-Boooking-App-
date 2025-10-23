import React from 'react'
import SalonDrawerList from './components/SalonDrawerList'
import Navbar from '../AdminSalon/Navbar'
import BookingTable from './Booking/BookingTable'
import ServiceTable from './Services/ServiceTable'
function SalonDashboard() {
  return (
    <div className='min-h-screen'> 
    <Navbar DrawerList={SalonDrawerList}/>
    <section className="lg:flex lg:h-[90vh] ">

        <div className="hidden lg:block h-full">
            <SalonDrawerList/>

        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
            {/* <BookingTable/> */}
            <ServiceTable/>
        </div>
    </section>
    </div>
  )
}

export default SalonDashboard