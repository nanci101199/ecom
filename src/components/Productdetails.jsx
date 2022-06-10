import React from 'react'
import { useLocation } from 'react-router-dom'

function Productdetails() {

  const location = useLocation()
  const demo = location?.state
  const data = location?.data
  console.log(demo)
  console.log(data)
  return (
    <>
     <div>
      
      <div></div>
      <div className='row'>
        <div className='col-lg-7 col-12'>

        </div>

      </div>
     </div>
    </>
  )
}

export default Productdetails