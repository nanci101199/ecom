import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import CategorySub from './secondary/CategorySub';
import Signup from './components/Profile/Signup';
import Showitems from './secondary/Showitems';
import About from './components/Footer/About';
import Responsibility from './components/Footer/Responsibility';
import Return from './components/Footer/Return';
import Showproduct from './components/Home/Showproduct'
import Sharebybutton from './secondary/Sharebybutton';
import SheinPics from './secondary/SheinPics';
import ShowBrandwide from './secondary/ShowBrandwide';
import Showsheinpics from './secondary/Showsheinpics';
import Shippinginfo from './components/Home/Shippinginfo';
import ShareandEarn from './components/Home/ShareandEarn';
import Wishlist from './components/Home/Wishlist';

import Login from './components/Profile/Login';
import Myaccount from './components/Profile/Myaccount';
import Mychat from './components/Profile/Mychat';
import {servepratham} from './config/AppConfig'
import axios from 'axios';
import AddtoCart from './components/Profile/AddtoCart';
import Productdetails from './components/Productdetails';

function App() {

  const [sarvapratham, setSarvapratham] = useState([])
 
 
  useEffect(() => {
    axios .get(`${servepratham.apidata}user/getcategory`)
    .then((response) => {
      setSarvapratham(response?.data?.data);
      console.log(response.data.data);
    })
    .catch((error) => console.error("error"));
 
  }, [])



  return (
    <>
    
       <Header headdata={sarvapratham} />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route exact path='/home'  element={ <Home/>}/>
        <Route path='/CategorySub' element={ <CategorySub/>} />
        <Route path='/Showitems/:id' element={<Showitems/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/responsibility' element={<Responsibility/>}/>
        <Route path='/return' element={<Return/>}/>
        <Route path='/showproduct' element={<Showproduct/>}/>
        <Route path='/Sharebybutton' element={<Sharebybutton/>}/>
        <Route path='/sheinpics' element={<SheinPics/>}/>
        <Route path='/Showsheinpics' element={<Showsheinpics/>}/>
        <Route path='/shippinginfo' element={<Shippinginfo/>}/>
        <Route path='/share' element={<ShareandEarn/>}/>
        <Route path='/ShowBrandwide' element={<ShowBrandwide/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/account' element={<Myaccount/>}/>
        <Route path='/chat' element={<Mychat/>}/>
        <Route path='/addtocart' element={<AddtoCart/>} />
        <Route path='/productdetail' element={<Productdetails/>} />
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
