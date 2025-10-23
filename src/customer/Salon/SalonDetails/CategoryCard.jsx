import React from 'react'

function CategoryCard({handleCategoryClick,selectCategory, item}) {
  return (
    <div onClick={handleCategoryClick} className={`px-3 py-2 cursor-pointer flex gap-2 items-center ${selectCategory==item?'bg-green-500 text-white rounded-md':""} `}>
        <img className ='w-14  h-14 object-cover rounded-full'src="https://i.pinimg.com/1200x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg" alt="" />

        <h1>Bridal  Makeup</h1>
        </div>
  )
}

export default CategoryCard