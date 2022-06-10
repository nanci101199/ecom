import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {servepratham} from '../../config/AppConfig'

function Shopbycategory() {
  const [sarvapratham, setSarvapratham] = useState([])
  
      useEffect( () => {

        axios .get(`${servepratham.apidata}user/getcategory`)
        .then((response) => {
          setSarvapratham(response?.data?.data);
          console.log(response.data.data);
        })
        .catch((error) => console.error("error"));
      
      },[])

  return (
    <>
        <div className=' my-2 my-5 mx-5'>
            <div className='row m-auto mx-auto w-100 justify-content-center' style={{backgroundImage: "linear-gradient(to left, rgb(255,10,10), rgb(255,127,8))"}}>
                { sarvapratham.map((Cdata) => (
                    <div className='col-lg-3 col-md-6 col-12 p-3' 
                    >
                       <div className='bg-white mx-2 p-3 fw-bold fs-6 '> {Cdata.name}  </div>
                    </div>
                ))
                }
                { sarvapratham.map((Cdata) => (
                    <div className='col-lg-3 col-md-6 col-12 p-3' 
                    >
                       <div className='bg-white mx-2 p-3 fw-bold fs-6 '> {Cdata.name}  </div>
                    </div>
                ))
                }
            </div>
        </div>
    </>
  )
}

export default Shopbycategory
