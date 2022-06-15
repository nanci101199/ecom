import React, { useState } from 'react'

function Discount() {
  
const discount = [ 
  {
    id:1,
    discount:'15',
    title:'on order of 2000'
  },
  {
    id:2,
    discount:'30',
    title:'on order of 3000'
  },
  {
    id:3,
    discount:'40',
    title:'on order of 4000'
  }
]

  return (
    typeof discount!= undefined && (
    <>
      <div>
        <div className='row mx-5 py-3 bg-light'>
          { discount?.map((data) => (
              <div className='col-lg-3 col-6 col-12 text-center border-end border-dark ' >
             <div><a className='text-decoration-none text-dark fw-bolder fs-1' href="">  {data.discount } %  <span className='bg-black text-white px-1'> OFF </span> </a> </div> 
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