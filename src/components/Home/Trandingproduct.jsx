import React, { useState , useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './assets/style.css';
import { useNavigate } from "react-router-dom";
import {serve, servepratham} from '../../config/AppConfig'
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Trandingproduct() {

 // const [sheindata, setSheindata] = useState([])
 const access_token = sessionStorage.getItem('accesstoken')
 const [trandingproduct, setTrandingproduct] = useState([])
 const [wishlisttrendproduct, setWishlisttrendproduct] = useState()
 const [addtowish, setAddtowish] = useState()

  useEffect(() => {
   axios .get(`${serve.details}trending-product`)
   .then((respo) => {
     setTrandingproduct(respo?.data?.data.data);
     console.log(respo.data.data.data);
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
            breakpoint: { max: 1400, min: 1050},
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

    const Addwishlist = (elem) => {
        let _formdata = new FormData();
    _formdata.append('product_id', elem)

         axios.post(`${servepratham.apidata}user/add/wishlist`, _formdata, {
            headers: {
              'Authorization' : `Bearer ${access_token}`,
            }})
        .then((response) => {
            setWishlisttrendproduct(response?.data.data.data);
          console.log(response.data.data.data);
          
        })
        .catch((error) => console.error("error"));
    } 

    return (
        typeof tranding !==  undefined && 
        <div className="App my-2 my-5 mx-5">
            <div className="d-flex justify-content-between my-4">
           <div className="fs-3 ">
               Tranding Product
            </div>
            <div >   
                <button className="p-2" > <RemoveRedEyeIcon/> View All </button>
            </div>
           </div>
            <div className=" mb-5" style={{ position: "relative" }}>
               <Carousel responsive={responsive}>
                    {trandingproduct.map((carousels) => (
                        <div>
                        <div className="card ">
                            <img className="card-img-top imagehover" src={carousels.ImageSrc} style={{width:"95%", height:"30%"}} alt={carousels.ImageSrc} />
                            <div className="text">{carousels.product_name}</div>
                            <div className="d-flex justify-content-between">
                            <div className="text-left"> USD${carousels.offer_price} <span className="text-danger text-decoration-line-through"> USD${carousels.price}</span></div>
                            <div className="mx-3" onClick={() => Addwishlist(carousels.id)}><FavoriteBorderIcon/></div></div>
                        </div>
                        
                    </div>
                    ))}
                    
                </Carousel> 
            </div>
        </div>
    );
}
export default Trandingproduct