import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Appdata } from '../../config/AppConfig'
import { useGeolocated } from "react-geolocated";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Nearby({nearby}) {
const [location , setLocation] = useState()
const access_token = sessionStorage.getItem('accesstoken')
// console.log(nearby)
    useEffect(() => {
        let _formdata = new FormData();
        // _formdata.append('location_lat:',nearby.location_lat)
        // _formdata.append('location_long',nearby.location_long )
        _formdata.append('city', 'udaipur' )
        _formdata.append('state',' rajasthan' )

         axios.post(`${Appdata.api}user/nearBy/vendors`, _formdata, {
            headers: {
              'Authorization' : `Bearer ${access_token}`,
            }})
        .then((response) => {
            setLocation(response?.data);
                console.log(response)
            })
        .catch((error) => console.error("error"));
    },[])

  return (
    <>
        <div className="App my-2 my-5 mx-5">
            <div className="d-flex justify-content-between my-4">
           <div className="fs-3 ">
              NearBy Search
            </div>
            <div >   
                <button className="p-2" > <RemoveRedEyeIcon/> View All </button>
            </div>
           </div>
           <div className='text-center fs-3 fw-bold'>
             NO DATA AVAILABLE
           </div>
        </div>
    </>
  )
}

export default Nearby