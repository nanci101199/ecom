import React from 'react'
import { ReactDOM, useState } from 'react';
import '../Home/assets/sign.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Appdata } from '../../config/AppConfig';

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

    await axios.post(`${Appdata.api}user-signup`, _formdata)
      .then((response) => {
        console.log(response)
        setEmailcode(response.data.data.user.otp)
        setShowcode(true)
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
     
    await axios.post(`${Appdata.api}otp/verify`, _formdata)
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
      <div className='' style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg)' }}>
        <div className='row my-5'>
          <div className=' col-6 m-auto'>
            <div className="row m-0 justify-content-lg-start justify-content-center">
              <div className=" col-12 mt-5 mb-5">
                <div className='fs-3 fw-bold text-center'>New To Shein</div>
                <div className="form-area">
                  <div className="form-inner text-center ">
                    
                   <div className='fw-bolder fs-5'>  <a className="react-tab-link " id="0">Sign Up</a></div>
                     
                   
                    <div className="react-tab-content">
                      <div className='text-center'>

                        <div class="mb-3 mt-4">
                          <label for="exampleInputName1" class=" border px-2 mx-2 "> Name </label>
                          <input type="text" name='name' onChange={signupchangedata} value={signupdata.name} id="" />
                        </div>
                        <div class="mb-3 mt-4">
                          <label for="exampleInputEmail1" class=" border px-2 mx-2 "> Email </label>
                          <input type="email" name='email' onChange={signupchangedata} value={signupdata.email} id="" />
                        </div>
                        <div class="mb-3 mt-4">
                          <label for="exampleInputPassword1" class=" border px-2 mx-2 "> Password</label>
                          <input type="password" name='password' onChange={signupchangedata} value={signupdata.password} id="" />
                        </div>
                        <div class="mb-3 mt-4">
                          <label for="exampleInputEmail1" name='dialing_code' class=" border px-2 mx-2 "> {signupdata.dialing_code} </label>
                          <input type="text" name='phone' onChange={signupchangedata} value={signupdata.phone} id="" />
                        </div>

                        <hr />
                        { showcode == true ? "" :  <button onClick={createaccount} type="submit" class="btn text-white bg-black">Register</button> }

                         <div class="mb-3 mt-4">
                         { showcode == true ? <> <label for="Otp" class=" border px-2 mx-2 "> One time password</label>
                          <input type="password" name='otp' onChange={signupchangedata} value={signupdata.otp} id="" /> </> : ""}
                        </div>
                        { showcode == true ? <button onClick={otpeventemail} type="submit" class="btn text-white bg-black" style={{ width: " -webkit-fill-available" }}> Verify </button> : ""}
                        <div style={{display : error ? "flex" : "none", color:"red"}}>
                          Enter Valid Code
                        </div>

                        <div>
                          Already registered ? <Link to='/' >Login</Link>
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