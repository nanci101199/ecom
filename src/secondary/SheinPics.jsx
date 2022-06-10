import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useNavigate } from 'react-router-dom'
import { Sheinpics } from '../components/Home/API/SheinpicsApi'
import { productname } from '../components/Home/API/SheinpicsApi'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
function SheinPics() {

    const navigate =  useNavigate()
    console.log(Sheinpics)
    console.log(productname)
    const [imagetype, setImagetype] = React.useState("Dresses")
    const [showitem, setShowitem] = React.useState(false)
 
    const buttonClick = (ele) =>{
        const data = ele
        setImagetype(ele)
        setShowitem(true)
        console.log(ele)
        console.log(showitem)
    }
    const buttonsheinpics = (itemno) =>{
        console.log(itemno)
        navigate('/Showsheinpics', {state:itemno})
    }

    return (
        <>
            <div className='mx-4'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to='/home'>
                            Home
                        </Link>
                        <Link
                            to='#'
                        >
                            SheinPics
                        </Link>
                    </Breadcrumbs>
                </div>
                <div>
                    <div className='row mx-4'>
                        {productname.map((type) => (
                            <div className='col-2 w-auto'>
                                <button onClick={() => buttonClick(type.type)}>{type.type}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className='row' style={{display : showitem ? "true " : "false"}}>
                        <div className='col-2 my-3' style={{border:"3px solid purple"}}></div>
                        <div className='col-9'>
                            <div className='row'>
                                {
                                  Sheinpics.map((imgct) => (
                                        imagetype === imgct.category ? 
                                        <div className='col-lg-3 col-md-6 col-12 my-3'>
                                            <img src={imgct.image} style={{height:"350px", width:"auto"}} alt="" />
                                            <div>{imgct.title}</div>
                                            <div>{imgct.price}</div>
                                            <div className='my-3' ><button onClick={() => {buttonsheinpics(imgct.id)}} className='btn btn-primary rounded'>More Details</button></div>
                                        </div> :""
                                  ))  
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SheinPics