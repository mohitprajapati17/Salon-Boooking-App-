import React from 'react'
import SalonDrawerList from './components/SalonDrawerList'
import Navbar from '../AdminSalon/Navbar'

import SalonRoutes from '../routes/SalonRoutes'
function SalonDashboard() {
  return (
    <div className='min-h-screen bg-gray-50'> 
    <Navbar DrawerList={SalonDrawerList}/>
    <section className="lg:flex lg:h-[90vh]">

        <div className="hidden lg:block h-full">
            <SalonDrawerList/>
        </div>
        <div className="w-full lg:w-[80%] overflow-y-auto">
            <SalonRoutes/>
        </div>

    </section>
    </div>
  )
}

export default SalonDashboard