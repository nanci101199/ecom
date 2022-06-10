import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function ShowBrandwide() {

    const location = useLocation()
    const state = location.state

    return (
        <>
            <div className='mx-5 container'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to='/home'>
                         <small>  Home </small>
                        </Link>
                        <Link to='#'>
                         <small> Brand Wide Discount </small> 
                        </Link>

                    </Breadcrumbs>
                </div>
                <div className='mx-5 row mx-5 my-3'>
                <div className="col-lg-5">
                    <img src={state.ImageSrc} style={{ width: "300px", height: "100%" }} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-lg-7 my-4 ">
                    <div className="card-body">
                        <h5 className="card-title my-2">{state.product_name}</h5>
                        <span className="card-text fs-3">  Rs:{state.offer_price} <span className='text-decoration-line-through text-danger'>{state.price}</span></span> <br />
                        <span className="card-text"></span>
                        <div className=' fs-4'>{state.short_desc}</div>
                        <div className='row'>
                            <div className='col-4'> <span className='fw-bold'> Color :</span>
                                {
                                    state.OptionKey.color.map((type) => (
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id={type} />
                                            <label class="form-check-label" for={type}>
                                                {type.values}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                            {/* <div className='col-4'> <span className='fw-bold'> Size:</span>
                                                {
                                                 state.OptionKey.size.map((type) => (
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id={type.values} />
                                                                <label class="form-check-label" for={type.values}>
                                                                   {type.values}
                                                                </label>
                                                        </div>
                                                    ))
                                                } 
                                            </div> */}
                        </div>
                        <div className='my-3'>
                            <button className="btn btn-primary rounded-pill">Add to cart</button> &nbsp;
                            <button className="btn btn-primary rounded-pill">Wishlist</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default ShowBrandwide