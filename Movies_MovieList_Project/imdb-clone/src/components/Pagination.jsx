// import React from 'react'

function Pagination({pageNo,handlePrev,handleForward}) {
  return (
    <div className='bg-blue-500 flex justify-center font-serif  p-1 mt-10'>
        <div onClick={handlePrev} className="px-8"><i className="fa-solid fa-arrow-left"></i></div> 
        <div className="text-xl font-bold">{pageNo}</div>
        <div onClick={handleForward} className="px-8"><i className="fa-solid fa-arrow-right"></i></div>
        
    </div>//px-4 padding harizontally 4 units
  )
}

export default Pagination