import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { servepratham } from '../../config/AppConfig'
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Wishlist() {


  const [open, setOpen] = React.useState(false);

  const user_id = sessionStorage.getItem('user_id')
  console.log(user_id)
  const access_token = sessionStorage.getItem('accesstoken')
  const [mywishlist, setMywishlist] = useState()
  const [addedtocart, setAddedtocart] = useState()

  useEffect(() => {
    axios.get(`${servepratham.apidata}user/myWishlist`,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      })
      .then((response) => {
        console.log(response?.data?.data?.products.data)
        setMywishlist(response?.data.data.products.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  const addtocart = (ele) => {
    console.log(ele)
    let _formdata = new FormData();
    _formdata.append('product_id', ele.id)
    _formdata.append('vendor_id', ele.user_id)
    _formdata.append('quantity', ele.parent_cat_id)
    _formdata.append('orignal_price', ele.price)
    _formdata.append('offer_price', ele.offer_price)
    _formdata.append('session_id', user_id)
    // _formdata.append('product_option')
    axios.post(`${servepratham.apidata}user/cart/save`, _formdata, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    })
      .then((response) => {
        setAddedtocart(response?.data.data.data);
        console.log(response.data.data.data);
        //   console.log(response) 
        setOpen(true);

      })
      .catch((error) => console.error("error"));
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className='m-5'>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" >Status</th>
              <th scope="col">Product</th>
              <th scope='col'>Image</th>
              <th scope="col">Price</th>
              <th scope="col">Offerprice</th>
              <th scope="col">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {
              mywishlist?.map((wishlist) => (
                <>
                  <tr>
                    <td className='text-success'>{wishlist.status} <CircleIcon fontSize='small' /></td>
                    <td>{wishlist.product_name}</td>
                    <td><img src={wishlist.ImageSrc} style={{ height: "100px", width: "100px" }} alt="" /></td>
                    <td>₹{wishlist.price}</td>
                    <td>
                      ₹{wishlist.offer_price}
                    </td>
                    <td><button onClick={() => addtocart(wishlist)} className='btn border-dark bg-dark text-light'>Add To Cart</button></td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           Item Added to cart successfully 
          </Alert>
        </Snackbar>
      </div>
    </>
  )
}

export default Wishlist