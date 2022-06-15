import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../Home/assets/sign.css'
import axios from 'axios';
import { Appdata } from '../../config/AppConfig';
import { Link, useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {

  const navigate = useNavigate()

  const [active, setActive] = useState(0);
  const [disableinput, setDisableinput] = useState(false)
  const [showcode, setShowcode] = useState(false)
  const [code, setCode] = useState()
  const [errormessage, setErrormessage] = useState(false)

  const [logindata, setLogindata] = useState({
    dialing_code: "+91",
    phone: "",
    otp: ""
  })
  const [emaillogin, setEmaillogin] = useState(
    {
      email: '',
      password: ''
    }
  )

  const acccesstoken = sessionStorage.getItem('accesstoken')




  const tabClick = (e) => {
    const index = parseInt(e.target.id, 0);
    console.log(index)
    if (index !== active) {
      setActive(index);
    }
  }

  const valueonchange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value })
  }

  const by_email = (event) => {
    setEmaillogin({
      ...emaillogin, [event.target.name]: event.target.value
    })
  }

  const loginevent = async () => {
    let _formdata = new FormData();
    _formdata.append('dialing_code', logindata.dialing_code)
    _formdata.append('phone', logindata.phone)

    await axios.post(`${Appdata.api}login`, _formdata)
      .then((response) => {
        console.log(response)
        setShowcode(true)
        setDisableinput(true)
        setCode(response.data.data.otp)
        setOpen(true)
      })
  }

  const loginwithemail = async () => {

    let _formdata = new FormData();
    _formdata.append('phone', emaillogin.email)
    _formdata.append('password', emaillogin.password)

    await axios.post(`${Appdata.api}login-with-password`, _formdata)

      .then((response) => {
        const access_tokens = response.data.data.access_token
        navigate('/', { state: access_tokens })
        sessionStorage.setItem("accesstoken", access_tokens)
        sessionStorage.setItem("data", response.data.data.user.username)
        sessionStorage.setItem("user_image", response.data.data.user.profile)
        sessionStorage.setItem("id", response.data.data.user.id)
        sessionStorage.setItem("user_role", response.data.data.user.user_role)
        sessionStorage.setItem("vendor_type", response.data.data.vendor_type)
        console.log(response)

      })
  }
  const [open, setOpen] = React.useState(false);
  const otpevent = async () => {
    let _formdata = new FormData();
    _formdata.append('dialing_code', logindata.dialing_code)
    _formdata.append('phone', logindata.phone)
    _formdata.append('otp', logindata.otp)

    await axios.post(`${Appdata.api}otp/verify`, _formdata)
      .then((response) => {
        if (logindata.otp === code) {
          const access_tokens = response.data.data.access_token
          navigate('/', { state: access_tokens })
          sessionStorage.setItem("accesstoken", access_tokens)
          sessionStorage.setItem("data", response.data.data.user.username)
          sessionStorage.setItem("user_image", response.data.data.user.profile)
          sessionStorage.setItem("user_id", response.data.data.user.id)
          sessionStorage.setItem("user_role", response.data.data.user.user_role)
          sessionStorage.setItem("vendor_type", response.data.data.vendor_type)
          console.log(response)
        }

      }

      )
      .catch(() => {
        setErrormessage(true)
      })
  }
  const location = useLocation()
  const relogin = () => {
    sessionStorage.clear()
    location.reload();
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className='' style={{ backgroundImage: 'url(http://chitrahandicraft.com/wp-content/uploads/2019/02/login-page-background-images-hd-10.jpg)'}}>
        <div className='row'>
          <div className='col-lg-6 col-md-8 col-11 p-5 my-5 m-auto bg-light  bg-opacity-50' style={{  borderRadius:"12px" }}>
            <div className="row m-0  justify-content-center" >
              <div className="col-lg-8 col-md-8 col-12 mt-5 mb-5">
                <div className='fs-1 fw-bold text-center'>Sign In</div>
                <div className="form-area">
                  <div className="form-inner text-center m-auto">
                    <ul className="react-tab-link-group d-flex justify-content-around m-auto">
                      <li className={`${active === 0 ? 'active' : ''}`}><a className="react-tab-link fs-3 " onClick={tabClick} id="0">Phone</a></li>
                      <li className={`${active === 1 ? 'active' : ''}`}><a className="react-tab-link fs-3" onClick={tabClick} id="1">Email</a></li>
                    </ul>
                    <div className="react-tab-content text-center">
                      {/* login with Phone */}
                      <div className={`react-tab-pane ${active === 0 ? 'show' : ''}`}>
                        {/* <form> */}
                        <div className="mb-3 mt-4">
                          <label for="exampleInputEmail1" className=" p-2 mx-2 rounded " style={{border:" 1px solid grey"}}> {logindata.dialing_code} </label>  
                          <input type="text" onChange={valueonchange} disabled={disableinput} name='phone' className='inputcontrol' value={logindata.phone} id="" />
                        </div>

                        <div className="mb-3 mt-4 m-auto justify-content-center" style={{ display: showcode ? "flex" : "none" }}>
                          <label  for="exampleInputEmail1" className=" p-2 mx-2 rounded " style={{border:" 1px solid grey"}} >Code </label> <br />
                          <div><input type="password" name='otp' onChange={valueonchange}  className='inputcontrol' value={logindata.otp} /></div>
                          <div style={{ display: errormessage ? "flex" : "none" }}>
                            <div className='fw-semibold' style={{ color: "red" }}>
                              Please Enter Valid code
                            </div>
                          </div>
                          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                              Otp is send to your registered moile no.
                            </Alert>
                          </Snackbar>
                        </div>


                        <div>
                          {showcode == true ? <button onClick={otpevent} type="submit" className="btn text-white bg-black" > Verify </button> : <button onClick={loginevent} type="submit" className="btn text-white bg-black" >Submit</button>}
                        </div>

                        <div className='text-center'> <a href=""><small> Forget Your Password?</small></a></div>
                        <div className='my-3'>
                          <h5 className="background"><span> or </span></h5>
                        </div>
                        <div className='text-center'> <a href=""><small> <Link to='/signup' > Sign Up ? </Link></small></a></div>
                        {/* </form> */}
                      </div>
                      {/* login with Phone end  */}
                      {/* // */}
                      {/* // */}
                      {/* login with Email */}
                      <div className={`react-tab-pane ${active === 1 ? 'show' : ''}`}>
                        {/* <form> */}
                        <div className="mb-3 mt-4">
                          <label for="exampleInputEmail1" className="form-label">Phone Number </label>
                          <br />
                          <input type="email" onChange={by_email}  name='email' className='inputcontrol' value={emaillogin.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Password </label> <br />
                          <input type="password" name='password' className='inputcontrol' onChange={by_email} value={emaillogin.password}  id="exampleInputPassword1" />
                        </div>
                        <button type="submit" onClick={loginwithemail} className="btn text-white bg-black" >Submit</button>
                        <div className='text-center'> <a href=""><small> Forget Your Password?</small></a></div>
                        <div className='my-3'>
                          <h5 className="background"><span> or </span></h5>
                        </div>
                        <div className='text-center'> <a href=""><small> <Link to='/signup' > Sign Up ? </Link></small></a></div>
                        {/* </form> */}
                      </div>
                         {/* login with Email end */}
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

export default Login