import React from 'react'
import NotificationCard from './NotificationCard'
function Notifications() {
  return (
    <div  className ="px-5 md:flex flex-col items-center mt-10 min-h-screen">
        <div>
            <h1 className ="text-3xl font-bold py-5">Notifications</h1>
        </div>        

        <div className="space-y-4 md:w-[35rem]">
            {[1,1,1,1,1,1,1,1].map((item,index)=>{
                return <NotificationCard/>
            })}
        </div>
    </div>
  )
}

export default Notifications