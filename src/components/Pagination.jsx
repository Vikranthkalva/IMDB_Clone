import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center gap-5'>
        
        <div className='hover:cursor-pointer' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div className='hover:cursor-pointer' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination