import React, { useState } from 'react'
import {Button} from './API/ButtonApi'
import { Link } from 'react-router-dom'
import '../assets/style.css'

function Buttons() {

    const [buttons, setButtons] = useState(Button)
    let btncolor = buttons.colorcode

  return (
    <>
        <div >
            <div className='row flex-nowrap overflow-scroll absscroll my-5 mx-5' >
                {buttons.map((btn) => (
                   <div  className='w-auto text-center flex-nowrap'> <button className='btn rounded-pill ' style={{backgroundColor:`${btn.colorcode}`}}> <Link to="/Sharebybutton"> {btn.Occasion} </Link>  </button></div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Buttons