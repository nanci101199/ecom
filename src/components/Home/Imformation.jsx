import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import {Link} from 'react-router-dom';

function Imformation() {
    return (
        <>
            <div>
                <div className='row mx-5 py-3 bg-light'>
                    <div className='col-lg-3 col-6 text-center border-end border-dark ' >
                        <a className='text-decoration-none text-black' href=""> <Link to='/trail'> <RvHookupIcon/>    &nbsp; FREE TRAIL </Link> </a>
                    </div>
                    <div className='col-lg-3 col-6 text-center border-end border-dark'>
                        <a className='text-decoration-none text-black' href="">
                            <Link to="/return"><AssignmentReturnIcon /> &nbsp;  RETURN</Link></a>
                    </div>
                    <div className='col-lg-3 col-6 text-center border-end border-dark'>
                        <a className='text-decoration-none text-black' href=""> <Link to='/Shippinginfo'> <LocalShippingIcon />&nbsp;  SHIPPING INFO </Link></a>
                    </div>
                    <div className='col-lg-3  col-6  text-center border-dark'>
                        <a className='text-decoration-none text-black' href=""> <Link to='/share'><GroupIcon /> &nbsp;  SHARE & EARN  </Link> </a>
                    </div>
                </div>  
                <div className='my-2 mx-5'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://img.ltwebstatic.com/images3_ach/2022/05/19/1652941103b05202dc4b9af2c1961da2563034246b.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.ltwebstatic.com/images3_ach/2021/12/31/16409176022e3dd20b3f2f1eb0110d9c030a2e7e3c.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.ltwebstatic.com/images3_ach/2022/05/29/165383383780fb704091ff5652686ac33be885fd03.gif" className="d-block w-100" alt="..." />
                            </div>
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
            </div>
        </>
    )
}

export default Imformation