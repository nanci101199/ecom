import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link , useLocation} from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const user_name = sessionStorage.getItem('data')
const profile_image = sessionStorage.getItem('user_image')
const user_id = sessionStorage.getItem('id')
const role = sessionStorage.getItem('user_role')
const vendor = sessionStorage.getItem('vendor_type')

function Myaccount() {

  React.useEffect(() => {
    const user_name = sessionStorage.getItem('data')
  const profile_image = sessionStorage.getItem('user_image')
  const user_id = sessionStorage.getItem('id')
  const role = sessionStorage.getItem('user_role')
  const vendor = sessionStorage.getItem('vendor_type')
  },[user_id, user_name, profile_image, role, vendor])



  return (
    <>
    <div className='m-5'>
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to='/home'>
          Home
        </Link>
        <Link
          to='#'
        >
          My Account
        </Link>
      </Breadcrumbs>
    </div>

    <div>
      <div className='row m-5'>
        <div className='col-3 col-md-6 col-12'>
          <img src={profile_image} style={{height:"200px", width:"200px"}} alt="" />
        </div>
        <div className='col-7 col-md-6 col-12'>
         <div style={{color: "red"}}>Id: {user_id}</div>
            <div style={{fontSize:"30px"}}>
          Name : {user_name}
            </div>
            <div  style={{fontSize:"25px"}} >
           Role :  {role}  
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
    
  );
}
export default Myaccount