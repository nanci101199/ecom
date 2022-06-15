import React, { useState, useEffect } from 'react'
import { servepratham } from '../../config/AppConfig';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

function AddtoCart() {

  const access_token = sessionStorage.getItem('accesstoken')
  const user_id = sessionStorage.getItem('user_id')
  const [remove, setRemove] = useState()
  const [mycartlist, setMycartlist] = useState()

  useEffect(() => {
    let _formdata = new FormData();
    _formdata.append('session_id', user_id)
    axios.post(`${servepratham.apidata}user/cart/list`, _formdata,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      })
      .then((response) => {
        console.log(response?.data.data)
        setMycartlist(response?.data.data)
        console.log(mycartlist)
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const removeitem = (ele) => {
    let _formdata = new FormData();
    _formdata.append('product_id', ele.id)
    _formdata.append('vendor_id', ele.user_id)
    _formdata.append('quantity', ele.parent_cat_id)
    _formdata.append('orignal_price', ele.price)
    _formdata.append('offer_price', ele.offer_price)
    _formdata.append('session_id', user_id)
    // _formdata.append('product_option')
    axios.delete(`${servepratham.apidata}user/cart/remove/${ele.id}`, _formdata, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    })
      .then((response) => {
        setRemove(response?.data.data.data);
        console.log(response.data.data.data);

      })
      .catch((error) => console.error("error"));
  }
  return (
    <>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope='col'>Original Price</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {
              mycartlist?.map((ele) => (
                <tr>
                  <td scope="row">{ele.id}</td>
                  <td>{ele.orignal_price}</td>
                  <td>{ele.offer_price}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.offer_price * ele.quantity}</td>
                  <td>Action</td>
                  <td onClick={() => removeitem(ele)} ><CloseIcon /></td>
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