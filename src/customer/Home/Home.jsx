import React from 'react'
import Banner from './Banner'
import { services } from '../../Data/service'
import SalonList from '../Salon/SalonList'
import HomeServiceCard from './HomeServiceCard'
import SalonCard from '../Salon/SalonCard'
function Home() {
  return (
    <div className='space-y-20 bg-[#f5f5dc]'>
        <section>
            <Banner/>
        </section>
        <section className='space-y-10 lg:space-y-0  lg:flex items-center gap-5 px-20'>
            <div className='w-full lg:w-1/2'>
            <h1 className='text-2xl font-semibold pb-9'>What are  you looking for?</h1>
                <div className='flex flex-wrap gap-5 justify-center items-center'>
                    {
                        services.map((item, index)=><HomeServiceCard key={index} item={item}/>)
                        
                    }
                </div>
            </div>
            
            <div className='w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh]' >
            <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/3331488/pexels-photo-3331488.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div className="row-span-7">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/5069455/pexels-photo-5069455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-md"
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          
            
            </div>
        </section>

        <section className="px-20">
            <h1 className='text-3xl font-bold pb-10'> Book you favourite salon </h1>
                    <SalonList/>
        </section>

        <section>
            <SalonCard/>
        </section>


    </div>
  )
}

export default Home