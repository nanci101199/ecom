import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { servepratham } from '../../config/AppConfig'

function Wishlist() {

  const access_token = sessionStorage.getItem('accesstoken')
  const [mywishlist, setMywishlist] = useState()
  const [wishes, setWishes] = useState()

useEffect(() => {
  axios.get(`${servepratham.apidata}user/myWishlist`, 
  {headers: {
    'Authorization' : `Bearer ${access_token}`,
  }})
  .then((response) => {
      console.log(response?.data?.data?.products.data)
      setMywishlist(response?.data.data.products.data)
      setWishes(response?.data.data.products.data.id)
  })
  .catch((error) => {
    console.log(error)
  })
},[])


  

  return (
    <>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Status</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Offerprice</th>
    </tr>
  </thead>
  <tbody>
    {
     mywishlist?.map((wishlist) => (
       <>
       <tr>
         <td>{wishlist.status}</td>
         <td>{wishlist.product_name}</td>
         <td>{wishlist.price}</td>
         <td>
           {wishlist.offer_price}
         </td>
       </tr>
       </>
     ))
   } 
  </tbody>
</table>
      </div>
    </>
  )
}

export default Wishlist