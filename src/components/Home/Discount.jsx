import React, { useState } from 'react'

function Discount({discount}) {
  
  return (
    typeof discount!= undefined && (
    <>
      <div>
        <div className='row mx-5 py-3 bg-light'>
          { discount?.map((data) => (
              <div className='col-lg-3 col-6 col-12 text-center border-end border-dark ' >
             <div><a className='text-decoration-none text-dark fw-bolder fs-1' href=""> {data.start_discount} %  <span className='bg-black text-white px-1'> OFF </span> </a> </div> 
              <div className='fs-6 '> {data.title }</div>
            </div>
          ))}
          <div className='col-lg-3 m-auto text-center'>
          <div className='bg-black fw-bold fs-3 text-white text-center m-auto p-2 mx-4
          '>  CODE : HISUMMER </div> 
          </div>
          

        </div>
      </div>
    </>
    )
  )
}

export default Discount