import React, { useState , useEffect} from 'react'
import Discount from './Home/Discount'
import Imformation from './Home/Imformation'
// import Limitedsale from './Home/Limitedsale'
import axios from 'axios'
import Shopbycategory from './Home/Shopbycategory'

import Sheincampign from './Home/Sheincampign'
import StyleGallery from './Home/StyleGallery'
import Buttons from './Home/Buttons'
import Trandingproduct from './Home/Trandingproduct'
import Topproducts from './Home/Topproducts'
import {servepratham} from '../config/AppConfig'
import Featureproduct from './Home/Featureproduct'
import Nearby from './Home/Nearby'
import Daydeals from './Home/Daydeals'
import Details from './Home/Details'

function Home() {

  const acccesstoken = sessionStorage.getItem('accesstoken')
  const [hellouser, setHellouser] = useState()

useEffect(() => {

    axios.get(`${servepratham.apidata}user/myWishlist`, 
    {headers: {
      'Authorization' : `Bearer ${acccesstoken}`,
    }})
    .then((response) => {
    })
    .catch((error) => {
    })

    axios.get(`${servepratham.apidata}user/auth/access-token-user`, 
    {headers: {
      'Authorization' : `Bearer ${acccesstoken}`,
    }})
    .then((respo) => {
      setHellouser(respo?.data?.user)
    })
    .catch((error) => {
    })
  },[])
  

  return (
  
    <>
        <Imformation/>
        <Daydeals/>
        <Shopbycategory/>
        <Discount/>
        <Featureproduct/>
        <Trandingproduct />
        <Topproducts/>
        <Sheincampign/>
        <Nearby nearby={hellouser}/>
        {/* <StyleGallery /> */}
        {/* <Buttons/> */}
        <Details/>
    </>   
  )
}

export default Home