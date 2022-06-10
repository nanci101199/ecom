import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import {Profile} from '../Home/API/MyChatapi'
import DoneIcon from '@mui/icons-material/Done';
function Mychat() {

  const [Mychat, setMychat] = useState(Profile)
  const [chatid, setChatid] = useState()

  const handlechat = (elem) =>{
    setChatid(elem)
    console.log(chatid)
  }

  return (
    <>
      <div>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-12 border'>
            {
              Profile.map((chat) => (
                <div className='row m-auto' onClick={() => handlechat(chat.chat)}>
                <div className="col-3 py-2 my-auto">
                <Avatar alt={chat.name}  src={chat.profile_image} />
                </div>
                <div className='col-7'>
                  <div className='text-primary fw-bold'>{chat.name}</div>
                  <div>{chat.last_message}</div>
                </div>
                <div className='col-2 my-auto text-primary'>
                 {chat.icon}
                </div>
                </div>
              ))
            }
          </div>
          <div className='col-lg-8 col-md-8 col-12 border'>
            {/* { chatid.map(() => (
              <>
                <div className='row justify-content-start'> g ughuhg </div>
                <div className='row justify-content-end'>  htu gtu</div>
              </>
            )) } */}
                
          </div>
        </div>
      </div>
    </>
  )
}

export default Mychat