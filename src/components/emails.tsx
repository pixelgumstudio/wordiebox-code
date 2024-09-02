"use client"
import React, { useEffect, useState } from 'react'
import axios from '../lib/axios'
import Popup from './popup'

function Emails() {
  
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    const send = () => {
      if (email.match(emailRegex)){
     ( email !== "" && !error) &&
        axios.post('newsletter', { email }, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then(response => {
            // Handle the successful response
            setStatus("success"),
            setShow(true)
  
          })
          .catch(error => {
            // Handle errors
            // console.log('Error:', error.response.data.message);
            if (error.response.data.message.includes("exists")){
            setStatus("used"),
            setShow(true)
            }
            if (error.response.data.message.includes("Failed")){
              setStatus("fail"),
              setShow(true)
              }
          });
    } else{
      setError(true)
    }
    }
  
    useEffect(()=>{
  
      if(email === ""){
        setError(false)
      } 
      else if (email.match(emailRegex)){
        setError(false)
      }
        else if(!email.match(emailRegex)) {
          setError(true)
        } else {
          setError(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, error])
  
  
    const close = (res: boolean | ((prevState: boolean) => boolean)) => {
      setShow(res)
      setEmail("")
    }
  return (
    <div className='w-[90%] mx-auto max-w-[560px] text-center'>
        <p className="text-center font-bold text-24 text-[#1C1C1C] mt-10 laptop:mt-20">
          Need more words?
        </p>
        <div className=" mx-auto mt-4 w-full max-w-[360px] flex flex-col gap-3">              
              <input type="email" name="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)}className={`px-3 py-2 outline-none h-fit w-full bg-transparent border-[#1C1C1C] border shadow-darkbox`}  />
              
              
              
              <button className='p-2 w-full h-fit bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox' onClick={send}>Join our waitlist</button>
            </div>

            <Popup visible={show} updateView={close} status={status} email={email} />
    </div>
  )
}

export default Emails