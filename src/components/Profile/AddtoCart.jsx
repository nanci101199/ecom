import React, {useState, useEffect} from 'react'
import {servepratham} from '../../config/AppConfig';
import axios from 'axios';

function AddtoCart() {

  const access_token = sessionStorage.getItem('accesstoken')
  const [mycartlist, setMycartlist] = useState()

useEffect(() => {
  axios.post(`${servepratham.apidata}user/cart/list`, 
  {headers: {
    'Authorization' : `Bearer ${access_token}`,
  }})
  .then((response) => {
      console.log(response?.data.data)
      setMycartlist(response?.data.data)
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
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      mycartlist?.map((elem) => (
        <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
      ))
    }
  
  </tbody>
</table>
      </div>
    </>
  )
}

export default AddtoCart