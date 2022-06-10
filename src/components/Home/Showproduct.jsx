import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Collection } from './API/CollectionApi'
import DoneIcon from '@mui/icons-material/Done';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';

function Showitems() {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

      
    const location = useLocation()
    const pathname = window.location.pathname

    const param = useParams()

    let url = location.href;
    const states = location.state
    console.log(states)
    const product = Collection
    useEffect(() => {

    }, [])

    return (
        <>
            <div>
            <div className='px-4' ><div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to='/'>
         Home
        </Link>
        <Link
          to='#'
        >
         Category
        </Link>
      </Breadcrumbs>
    </div></div>
                <div className="card mb-3 mx-5 m-auto"  >
                    <div className="row g-0 mx-5">
                        {
                            Collection.map((ele) => (
                                ele.id == states ? <>
                                    <div className='fs-4 fw-bold  my-3'></div>
                                    <div className="col-lg-4">
                                        <img src={ele.image} style={{width:"300px", height:"100%"}} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-lg-8 ">
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.tagline}</h5>
                                            <p className="card-text">{ele.price} <span className='text-danger'>upto {ele.discount} off</span></p>
                                            <div className=''>{ele.description}</div>
                                            <div className='text-start mt-5 mb-2 border-bottom' style={{color:ele.color}}> <span style={{border:"1px solid black", borderRadius:"60%", background:ele.color, color:"black"}} className="pb-1 px-1" ><DoneIcon/></span> Color : {ele.color}</div>
                                            <div  ><button className="btn btn-primary rounded-pill">Add to cart</button> &nbsp;
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

export default Showitems