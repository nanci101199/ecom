import React, { useState , useEffect} from 'react'
import Discount from './Home/Discount'
import Imformation from './Home/Imformation'
import Poster from './Home/Poster'
import Productcarousels from './Home/Productcarousels'
// import Limitedsale from './Home/Limitedsale'
import axios from 'axios'
import Shopbycategory from './Home/Shopbycategory'
import Daydeals from './Home/Daydeals'
import Dailydrops from './Home/Dailydrops'
import Sheincampign from './Home/Sheincampign'
import StyleGallery from './Home/StyleGallery'
import Buttons from './Home/Buttons'
import Trandingproduct from './Home/Trandingproduct'
import Topproducts from './Home/Topproducts'
import {servepratham} from '../config/AppConfig'

function Home() {

  const acccesstoken = sessionStorage.getItem('accesstoken')

useEffect(() => {

    axios.get(`${servepratham.apidata}user/myWishlist`, 
    {headers: {
      'Authorization' : `Bearer ${acccesstoken}`,
    }})
    .then((response) => {
    })
    .catch((error) => {
    })
  },[])
  

  return (
  
    <>
        <Imformation/>
        <Poster/>
        <Shopbycategory/>
        {/* <Dailydrops/> */}
        <Productcarousels  />
        <Trandingproduct />
        <Topproducts/>
        <Sheincampign/>
        <StyleGallery />
        <Buttons/>
    </>   
  )
}

export default Home