import React from 'react'
import { Divider } from '@mui/material'
import ProfileFieldCard from './ProfileFieldCard'
function Profile() {
  return (
    <div className='lg:px-20 lg:bottom-20 space-y-20'>
        <div className=' w-full h-[40vh]'>
        <section className="grid grid-cols-2  gap-3">
      <div className="col-span-2">
        <img
          className="w-full rounded-md h-[15rem] object-cover"
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1732934194/barber-1453064_1280_o1vfee.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[15rem] object-cover"
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1732934203/barber-5497152_1280_zgcao8.jpg"
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full  rounded-md h-[15rem] object-cover"
          src="http://res.cloudinary.com/dxoqwusir/image/upload/v1732934217/beauty-salon-4043096_1280_itrjdr.jpg"
          alt=""
        />
      </div>
    </section>
        </div>
        <div className='mt-10 lg:w-[70%]'>
            <div className ='flex items-center justify-between pb-3 '>
                <h1  className="font-2xl font-bold  text-gray-800">
                    Salon Details
                </h1>

            </div>
            <div>
                <ProfileFieldCard  keys={"salon name"} values={"Monu Salon"}/>
                <Divider/>
                <ProfileFieldCard  keys={"salon Address"} values={" ambavadi mumbai"}/>
                <Divider/>
                <ProfileFieldCard  keys={"open Time"} values={"10:00 AM"}/>
                <Divider/>
                <ProfileFieldCard  keys={"close Time"} values={"8:00 PM"}/>
            </div>

        </div>
    </div>
  )
}

export default Profile