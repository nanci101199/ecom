import React from 'react'
import { ReactDOM, useState } from 'react';
import '../Home/assets/sign.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { servepratham } from '../../config/AppConfig';

function Signup() {

  const navigate= useNavigate()
  const [showcode, setShowcode] = useState(false)
  const [emailcode, setEmailcode] = useState()
  const [error, setError] = useState(false)

  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    password: "",
    dialing_code: "+91",
    phone: "",
    otp : ""
  })

  const signupchangedata = (event) => {
    setSignupdata({
      ...signupdata, [event.target.name] : event.target.value
    })
  }



  const createaccount = async () => {
    let _formdata = new FormData();
    _formdata.append('name', signupdata.name)
    _formdata.append('email', signupdata.email)
    _formdata.append('password', signupdata.password)
    _formdata.append('dialing_code', signupdata.dialing_code)
    _formdata.append('phone', signupdata.phone)

    await axios.post(`${servepratham.apidata}user-signup`, _formdata)
      .then((response) => {
        console.log(response)
        setEmailcode(response.data.data.user.otp)
        setShowcode(true)
        console.log(response.data.data.user.otp)
      })
  }

  const otpeventemail = async () => {
    let _formdata = new FormData();
    _formdata.append('name', signupdata.name)
    _formdata.append('email', signupdata.email)
    _formdata.append('password', signupdata.password)
    _formdata.append('dialing_code', signupdata.dialing_code)
    _formdata.append('phone', signupdata.phone)
    _formdata.append('otp', signupdata.otp )
     
    await axios.post(`${servepratham.apidata}otp/verify`, _formdata)
    .then((response) => {
      if(signupdata.otp ===  emailcode){
        const otp = response.data.data.user.otp
        console.log(otp)
        navigate('/')
      } 
      else {
        setError(true)
      }
    })
    .catch(() => {
        setError(true)
    })
  }

  return (
    <>
      <div className='' style={{ backgroundImage: 'url(http://chitrahandicraft.com/wp-content/uploads/2019/02/login-page-background-images-hd-10.jpg)'}}>
        <div className='row '>
          <div className=' col-lg-6 col-md-8 col-11 p-5 my-5 m-auto bg-light  bg-opacity-50' style={{  borderRadius:"12px" }}>
            <div className="row m-0 justify-content-lg-start justify-content-center">
              <div className=" col-12 ">
                <div className='fs-4 text-center'>New To Shein</div>
                <div className="form-area">
                  <div className="form-inner text-center ">
                    
                   <div className='fs-1 fw-bold text-center'>  <a className="react-tab-link " id="0">Sign Up</a></div>
                     
                   
                    <div className="react-tab-content">
                      <div className='text-center'>
                        <div className="mb-3 mt-4">
                          <label for="exampleInputName1" className="  p-2  mx-2 rounded" style={{border:" 1px solid grey"}}> Name </label>
                          <input type="text" name='name'  id='name' onChange={signupchangedata} className='inputcontrol' value={signupdata.name}  />
                        </div>
                        <div className="mb-3 mt-4">
                          <label for="exampleInputEmail1" className="  p-2 mx-2 rounded "  style={{border:" 1px solid grey"}}> Email </label>
                          <input type="email" name='email' id='email'  onChange={signupchangedata} className='inputcontrol' value={signupdata.email}  />
                        </div>
                        <div className="mb-3 mt-4">
                          <label for="exampleInputPassword1"  className="  p-2 mx-2 rounded "  style={{border:" 1px solid grey"}}> Password</label>
                          <input type="password" name='password' id='password' onChange={signupchangedata} className='inputcontrol'  value={signupdata.password}  />
                        </div>
                        <div className="mb-3 mt-4">
                          <label for="exampleInputEmail1"  name='dialing_code' className=" rounded p-2 mx-2 "  style={{border:" 1px solid grey"}}> {signupdata.dialing_code} </label>
                          <input type="text" name='phone' id='phone' onChange={signupchangedata} className='inputcontrol' value={signupdata.phone}  />
                        </div>

                        
                        { showcode == true ? "" :  <button onClick={createaccount} type="submit" className="btn text-white bg-black">Register</button> }

                         <div className="mb-3 mt-4">
                         { showcode == true ? <> <label for="Otp" className=" border px-2 mx-2 "> One time password</label>
                          <input type="password" name='otp' onChange={signupchangedata} value={signupdata.otp}  /> </> : ""}
                        </div>
                        { showcode == true ? <button onClick={otpeventemail} type="submit" className="btn text-white bg-black" style={{ width: " -webkit-fill-available" }}> Verify </button> : ""}
                        <div style={{display : error ? "flex" : "none", color:"red"}}>
                          Enter Valid Code
                        </div>
                        <div className='my-3'>
                          <h5 className="background"><span> or </span></h5>
                        </div>
                        <div>
                          Already registered ? <Link to='/login' > <button className='btn'> Login </button></Link>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup