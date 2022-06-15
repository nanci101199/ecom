import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { servepratham } from '../config/AppConfig'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import CabinIcon from '@mui/icons-material/Cabin';
import Rating from '@mui/material/Rating';
import GroupIcon from '@mui/icons-material/Group';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function Productdetails() {

  const location = useLocation()
  const access_token = sessionStorage.getItem('accesstoken')

  const param = useParams()
  console.log(param.id)

  const [cart, setCart] = useState()
  const [wishlistdata, setWishlistdata] = useState()
  const [addtocartdata, setAddedtocartdata] = useState()


  const user_id = sessionStorage.getItem('user_id')

  const getData = async () => {
    try {
      const data = await axios.get(`${servepratham.apidata}user/productById/${param.id}`, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      }
      ).then((res) => {
        setCart(res?.data.data.product)

      })


    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  const wishlist = (elem) => {
    let _formdata = new FormData();
    _formdata.append('product_id', elem)

    axios.post(`${servepratham.apidata}user/add/wishlist`, _formdata, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    })
      .then((response) => {
        setWishlistdata(response?.data.data.data);

      })
      .catch((error) => console.error("error"));

  }

  const Addtocart = (ele) => {

    let _formdata = new FormData();
    _formdata.append('product_id', cart.id)
    _formdata.append('vendor_id', cart.user_id)
    _formdata.append('quantity', cart.parent_cat_id)
    _formdata.append('orignal_price', cart.price)
    _formdata.append('offer_price', cart.offer_price)
    _formdata.append('session_id', user_id)

    axios.post(`${servepratham.apidata}user/cart/save`, _formdata, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    })
      .then((response) => {
        setAddedtocartdata(response?.data.data.data);

      })
      .catch((error) => console.error("error"));
  }

  console.log(cart)
  return (

    <>

      {cart !== undefined && (
        <div className='row p-5' style={{ background: " linear-gradient(90deg, rgba(236,168,200,1) 0%, rgba(228,93,107,1) 50%, rgba(196,74,76,1) 100%)" }}>
          {console.log(cart)}
          <div className='col-lg-6  col-12'>
            <div className='row'>
              <div className='col-4'>
                {cart.product_images.map((map) => (
                  <>
                    <div className='text-lg-end text-center'> <img src={map.ImageSrc} className='rounded m-1' style={{ height: "130px", width: "120px" }} alt="" /></div>
                  </>
                ))}
              </div>
              <div className='col-8'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner mr-3">
                    {cart.product_images.map((map) => (

                      <div className="carousel-item active">
                        <img src={map.ImageSrc} className=" w-100" style={{ height: '550px' }} alt={map.id} />
                      </div>

                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className='row my-2'>
                <div className='col-6 text-end'> <button className='bg-black text-white p-2' style={{ width: "-webkit-fill-available" }} onClick={() => wishlist(cart.id)}>Wishlist</button></div>
                <div className='col-6 text-start'><button className=' text-white p-2' style={{ width: "-webkit-fill-available", backgroundColor: "#AA0144", border: "1px solid #AA0144" }} onClick={() => Addtocart()}> <KeyboardDoubleArrowRightIcon /> Add To Cart</button></div>
              </div>
            </div>

          </div>
          <div className='col-lg-6  col-12 '>
            <div class="card mb-3">
              <div class="card-body">
                <div className='d-flex my-auto justify-content-between'>
                  <div>{cart.product_name}</div>
                  <div className='text-end' >
                    <Tooltip title="Wishlist">

                      <span className='rounded-circle p-1 mx-2 ' onClick={() => wishlist(cart.id)}> <FavoriteBorderIcon /> </span>

                    </Tooltip>
                  </div>
                </div>
                <div>
                  <div className=' fs-3 fw-bold '> ₹{cart.price}</div>
                  <div className=' '><span className=' rounded-pill  px-3' style={{ backgroundColor: "#e0bbd2" }}>  Rs ₹ {cart.offer_price}  With Special Discout </span> </div>
                </div>

                <div className='mt-3'> <button className='btn btn-success'><StarIcon fontSize='small' />{cart.rating}</button> <GroupIcon fontSize='small' /> {cart.total_rating} <small>ratings</small></div>


              </div>
            </div>

            <div class="card my-1 ">
              <div class="card-body">
                <div className='fs-5 '>
                  <small> Size : </small>
                  <div >
                    {
                      cart.OptionKey.length !== 0 ?
                        cart.OptionKey.size.map((clr) => (
                          <button className='px-2 btn border-dark rounded-pill mx-2'>{clr.values}</button>

                        ))
                        : ""

                    }
                  </div>
                </div>
              </div>
            </div>
            <div class="card my-3 ">
              <div class="card-body">
                <div className='d-flex justify-content-between my-2'>
                  <div>Sold By</div>

                </div>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CabinIcon />  <small> {cart.vendor.name}  (<StarIcon fontSize='small' style={{ color: "green" }} />{cart.vendor.rating})</small>
                  </div>
                  <div>
                    <button className='btn btn-sm' style={{ color: "#AA0144", border: "1px solid #AA0144" }}><small> View Shop </small></button>
                  </div>
                </div>
                <div className='row my-2 mx-4'>
                  <div className='col-4 ' >
                    <div> <button className=' btn  btn-sm rounded-pill '>  <StarIcon style={{ color: "green" }} />{cart.vendor.rating}</button></div>
                    <div>Ratings</div>
                  </div>
                  <div className='col-4 mt-2'>
                    <div>{cart.total_follow}</div>
                    <div>Follower</div>
                  </div>
                  <div className='col-4 mt-2 '>
                    <div>{cart.vendor.total_product}</div>
                    <div>product</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card my-3">
              <div class="card-body">
                <div>
                  <small> Product Details</small>
                  <div>
                  </div>
                </div>


              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <small> Product Ratings and Reviews</small>
                <div className='row'>
                  <div className='col-4 text-center'>
                    <div> <span className='fs-3 text-success fw-bold'> 0 </span> <StarIcon style={{ color: "green" }} /></div>
                    <div><small> {cart.total_rating} Ratings</small></div>
                    <div><small> & </small></div>
                    <div> <small>{cart.total_review} </small>Reviews</div>
                  </div>
                  <div className='col-8'>
                    <div className='row'>
                      <div className='col-4 text-center'> <small> Excellet  </small>  </div>
                      <div className='col-8'>  <small>  <StarIcon style={{ color: "green" }} /> {cart.FiveStar}  </small> </div>
                    </div>
                    <div className='row'>
                      <div className='col-4  text-center'> <small> Very Good </small>  </div>
                      <div className='col-8'>  <small>  <StarIcon style={{ color: "green" }} /> {cart.FourStar}  </small> </div>
                    </div>
                    <div className='row'>
                      <div className='col-4  text-center'> <small> Good </small>  </div>
                      <div className='col-8'>  <small>  <StarIcon style={{ color: "green" }} /> {cart.ThreeStar}  </small> </div>
                    </div>
                    <div className='row'>
                      <div className='col-4  text-center'> <small> Average </small>  </div>
                      <div className='col-8'>  <small>  <StarIcon style={{ color: "green" }} /> {cart.TwoStar} </small> </div>
                    </div>
                    <div className='row'>
                      <div className='col-4  text-center'> <small> Poor </small>  </div>
                      <div className='col-8'>  <small>  <StarIcon style={{ color: "green" }} /> {cart.OneStar} </small> </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="card my-3">
            <div class="card-body">
              <div className='row my-4'>
                <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAOkSURBVFjD7ZdZSFVRFIZ/zWuaoQ2KZiWVSIgpYRSNBPViA0IDEVIaWREVRdZLYA+NDxbpSwVlNpKRRVkEDQ8VpREKDk00YZpDmKZoRhPZd/e9lvfWU51zn9ybc/Y6a++z/r3WXmuddaS+1tfsbCFKVppW2tDTkBzihIjWQb1Xsxpt6M1IPgiC9qpTN5Sl1Tb0LCR3gqC3eqhE244iEelvpW6dVJBtIEFI73aCHJPDNhAH0g1IgQJtAwlEugdIvPbogi5ynVcRY0+/AD/eGpAw5atDNXqtOn3TJ8aeXgM/n3kLQBJUrmJ2PFLTVatbitUYjVYMz/Hwy5m3ACRJVXqg9crUNrVgIskPB8zQKnhlzCVZA1Kpz2oycdrNmUgpqjBx26SvzCVZpUmp1ihdW0kGTk2O6B1apcMrsU6TKl3VZMZ5qsenxFUPnQTvqpXmalc196f6bsxVxPiU52r4ldaB1CL4rK6oyw3SBX2WsdZKkHOKINskEBnFJIRixgSeI+BbBBKta4ThaXJNEem5Tie4OqGPwatjLtqatJKKd7Vh/za8q4WxhdH1XMqcRbkrgNQR8dcexpxFID7Jwv/SBmmWNipby8lykVpE8G7RXCg/q0D6aQou3kDieUfqeULANpq01Kj7AAVZAzJbz8kJh0k8S3RXP5BUCb1U++A3Qfn9CeJPSk/x6Mkct0PjNceDG89KVyl1kyBdZlwiAS1eUDI0aKbJ3rPRq4I3/xInJ3ipplcvURQir3lxLynUgCzQR+1wVwfZaqUASiWeCjCiEyaDz95mRocnSLAWardHX60BOO8KPr69uUvM6n7aqTfo6CoWCjFPjIboHvsfYHjj0KVAA71BnPg9vefJk/t7zhlTh/RM0wwdxvG/4e7AgM8VbnixBPBlDWadF0gYJgswtfGoX9QINHRWTyPZaaChQgyQP9Vhkxa7IfPJDom8VYYuLlkTMF0uq700idRRVExVf+Wwr0cI8Nd+vdI6OGv1kj2uY9UmkqXrTGaQcE5qqKHXcCYHiJAP2mXcIhizfiJ25A0SykGd0kSsncnn6rimsuNMRM7ltRTGQu7SfEQFu/8F8jj6HMXxdqTukExbMeBYLBCDpHZS6zAr4mSMzlAslVC353Lgzjh5AZ1HpdOh65rkGYz/XqZGaYNucx5fcO1DGPcxpUg78bKdDXiVqf9TcAfguKMx0nDMFwxoHH4V3ssy7oLbJ78OPvkJ8snvnE9+TPtaX7Or/QSEvBWKEYmLBgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0wMVQxMjoxNzo1MiswMjowMKNClFoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDFUMTI6MTc6NTIrMDI6MDDSHyzmAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABJ0RVh0RVhJRjpPcmllbnRhdGlvbgAxhFjs7wAAAABJRU5ErkJggg==" alt="" />
                  <div> SAFE PAYMENT</div>
                  <div>
                    Pay with the world's most safe payment methods
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
                  <img src="data:image/png;base64,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" alt="" />
                  <div>CONFIDENCE</div>
                  <div>
                    Protection covers your purchase and personal data
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
                  <img src="data:image/png;base64,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" alt="" />
                  <div>
                    WORLDWIDE DELIVERY
                  </div>
                  <div>
                    FREE & fast shipping to over 200+ countries & regions.
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
                  <img className='text-center' src="data:image/png;base64,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" alt="" />
                  <div>
                    HOTLINE
                  </div>
                  <div>
                    TALK TO HELP LINE FOR YOUR QUESTION ON 4141 456 789, 4125 666 888
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


export default Productdetails