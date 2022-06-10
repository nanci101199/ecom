import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './assets/style.css';
import { useNavigate } from "react-router-dom";
import { serve, servepratham } from '../../config/AppConfig'
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Productcarousels({ feature }) {

    const access_token = sessionStorage.getItem('accesstoken')
    // const [sheindata, setSheindata] = useState([])
    const [featureproduct, setFeatureproduct] = useState([])

    useEffect(() => {
        axios.get(`${serve.details}featured-product`)
            .then((response) => {
                setFeatureproduct(response?.data?.data?.data);
                console.log(response.data.data.data);
                console.log(featureproduct)
            })
            .catch((error) => console.error("error"));
    }, [])



    const responsive = {
        superLargeDesktop5: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1700, min: 1400 },
            items: 5
        },
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1400, min: 1050 },
            items: 4
        },
        superLargeDesktop1: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1050, min: 700 },
            items: 3
        },

        desktop: {
            breakpoint: { max: 700, min: 350 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 350, min: 0 },
            items: 1
        }
    };

    const navigate = useNavigate()

    const clickbuttondeatils = (ele) => {
        const itemno = ele
        console.log(itemno)
        navigate('/showproduct', { state: ele })
    }

    const Addtowishlist = async (ele) => {
        let _formdata = new FormData();
        _formdata.append('product_id', ele)

     await axios.post(`${servepratham.apidata}user/add/wishlist`, _formdata, {
            headers: {
                'Authorization': `Bearer ${access_token}`,}})
        .then((response) => {
                setFeatureproduct(response?.data.data.data);
                console.log(response?.data.data.data)
            })
        .catch((error) => console.error("error"));
    }

    return (
        // typeof featureproduct !== undefined &&
        <div className="App my-2 my-5 mx-5">
            <div className="d-flex justify-content-between my-4">
                <div className="fs-3 ">
                    Feature Product
                </div>
                <div >
                    <button className="p-2" onClick={clickbuttondeatils}> <RemoveRedEyeIcon /> View All </button>
                </div>
            </div>
            <div className=" mb-5" style={{ position: "relative" }}>
                <Carousel responsive={responsive}>
                    {featureproduct.map((product) => (
                        <div>
                        <div className="card ">
                            <img className="card-img-top imagehover" src={product.ImageSrc} style={{ width: "95%", height: "30%" }} alt={product.ImageSrc} />
                            <div className="text">{product.product_name}</div>
                            <div className="d-flex justify-content-between"> <div className="text-start">USD ${product.offer_price} <span className="text-danger text-decoration-line-through"> USD${product.price}</span></div>
                                <div className="mx-3" onClick={() => Addtowishlist(product.id)}><FavoriteBorderIcon /></div></div>
                        </div>

                    </div>
                    ))}

                </Carousel>
            </div>
        </div>
    );
}
export default Productcarousels