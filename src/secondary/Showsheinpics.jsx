import React from 'react'
import { useLocation } from 'react-router-dom'
import { Sheinpics } from '../components/Home/API/SheinpicsApi'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function Showsheinpics() {
    const location = useLocation()
    const states = location.state
    console.log(states)
    return (
        <>
            <div>
                <div className='px-4' ><div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to='/home'>
                            Home
                        </Link>
                        <Link
                           to='/Sheinpics'
                        >
                            Category
                        </Link>
                        <Link
                           to='#'
                        >
                            Product
                        </Link>
                    </Breadcrumbs>
                </div></div>
                <div className="card mb-3 mx-5 m-auto"  >
                    <div className="row g-0 mx-5">
                        {
                            Sheinpics.map((ele) => (
                                ele.id == states ? <>
                                    <div className='fs-4 fw-bold  my-3'></div>
                                    <div className="col-lg-4">
                                        <img src={ele.image} style={{ width: "300px", height: "100%" }} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-lg-8 ">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{ele.title}</h5>
                                            <p className="card-text">{ele.price}</p>
                                            <div className=''>{ele.description}</div>
                                            <div className=''> <span className='fw-bold'> Size:</span>
                                                {
                                                    ele.size.map((type) => (
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id={type.id} />
                                                                <label class="form-check-label" for={type.id}>
                                                                   {type.size1}
                                                                </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='my-2'> <button className="btn btn-primary rounded-pill">Add to cart</button> &nbsp;
                                                <button className="btn btn-primary rounded-pill">Wishlist</button></div>
                                        </div>
                                    </div> </> : ""
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Showsheinpics