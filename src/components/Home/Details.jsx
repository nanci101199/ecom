import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function Details() {
  return (
   <>
   <div className='row m-5'>
    <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
        <div>
            <LocalShippingIcon/>
        </div>
        <div>FREE SHIPPING & RETURN</div>
        <div>
        Free shipping on all US orders
        </div>
    </div>
    <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
        <div>
            <AttachMoneyIcon/>
        </div>
        <div>
        MONEY GUARANTEE
        </div>
        <div>
        30 days money back guarantee
        </div>
    </div>
    <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
        <div>
            <ForumIcon/>
        </div>
        <div>
        ONLINE SUPPORT
        </div>
        <div>
        We support online 24/7 on day
        </div>
    </div>
    <div className='col-lg-3 col-md-6 col-12 p-3 text-center' style={{ boxShadow: " 5px 10px 8px #888888" }}>
        <div>
            <KeyboardIcon/>
        </div>
        <div>
        SECURE PAYMENTS
        </div>
        <div>
        All payment are Secured and trusted.
        </div>
    </div>
   </div>
   </>
  )
}

export default Details