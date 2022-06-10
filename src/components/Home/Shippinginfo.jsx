import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
}

export default function Shippinginfo() {

    const abc = new Date()
    const date = abc.getDate()
    const month = abc.getMonth()
    const year = abc.getMonth()
    const time = `0${date} / 0${month + 1} / 0${year}`

    return (
        <>
            <div className='mx-5 mb-5'>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/">
                            Home
                        </Link>
                        <Link
                            to='#'
                        >
                            Shipping Info
                        </Link>

                    </Breadcrumbs>
                </div>
                <div className='mb-5'>
                    <div className='fs-2 fw-bolder text-center my-4'>Shipping Info</div>
                    <div className='fs-5  text-center my-3'> Ship from Global（1-3 days for processing)</div>
                    <div>
                        <table class="table w-75 m-auto border p-3">
                            <thead>
                                <tr>
                                    <th scope="col"><div className='p-3 border'> Shipping Method </div></th>
                                    <th scope="col"> <div className='p-3 border'> Shipping Time </div></th>
                                    <th scope="col"> <div className='p-3 border'> Costs </div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <div className='p-3 border'> STANDARD SHIPPING</div></td>
                                    <td> <div className='p-3 border'> Estimated to be delivered on Three days after :  {time} </div></td>
                                    <td className='text-danger'><div className='p-3 border'> Free Shipping Sitewide</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mx-lg-5 m-lg-4 mb-5container px-5'>
                        <p className='mx-lg-5'><small>If your package has not been delivered or your tracking information shows that your package has been delivered but you have not received it, you must contact Customer Service to verify within 45 days of the order date. For other orders, products, and logistics related issues, you must contact customer service within 90 days of the order date.</small></p>
                        <p className='mx-lg-5'><small>* Please click the "Confirm Delivery" button within 6 months (from the date of shipment). After that, the button will turn gray and cannot be used to get additional points.</small></p>
                        <p className='mx-lg-5 mb-5'><small>In most cases, the package will be delivered within the estimated time of arrival. However, the actual delivery date may be affected by flight arrangements, weather conditions and other external factors. Please refer to the tracking information for the most accurate delivery date.</small></p>
                    </div>
                </div>
            </div>
        </>
    );
}
