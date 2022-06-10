import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Poster() {

  const navigate = useNavigate()

  const handlepicture = () => {
    console.log(" yf hgver")
    navigate('/sheinpics')
  }

  return (
    <>
    <div>
    <div className='row mx-5 py-3 bg-light' onClick={handlepicture} >
      <img  src="https://img.ltwebstatic.com/images3_ach/2022/05/27/1653621080dc24ec9e070e2126e54017e25839ea53.gif" className={{width: "-webkit-fill-available", height:"50%"}} alt="" />
      </div>
    </div>
    </>
  )
}

export default Poster