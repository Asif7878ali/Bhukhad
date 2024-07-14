import React from 'react'
import { catagerious } from '../utils/categeriousData'

const Catagories = () => {
  const {categoryItems} = catagerious

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='text-center'>
            <h2 className='text-4xl md:text-5xl md:leading-snug font-bold my-2'>Popular Catagories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item) => (
                    <div key={item.id} className='shadow-lg rounded-md bg-white border border-slate-200 py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='p-5 rounded-full w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='font-bold'>{item.title}</h5>
                            <p className='text-red-600 text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories