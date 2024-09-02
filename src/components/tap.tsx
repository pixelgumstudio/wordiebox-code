
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import FormPopup from './popup-form';
import axios from '@/lib/axios';
import Popup from './popup';

const Tap = () => {

  const [isScaled, setIsScaled] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [showform, setShowform] = useState<boolean>(false);
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('')
  const [email, setEmail] = useState<string>('');

  const getClicks = async () => {
    try {
      const response = await axios.get(`clicks`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      setCount(response.data.data.totalClicks)
    } catch (error) {
      console.error("Error fetching Word:", error);
    }
  };

  useEffect(() => {
    getClicks();
  }, []);

  const handleClick = async () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 100); // 2000ms = 2 seconds

    setCount(prevCount => prevCount + 1);

    if (userCount < 1){
      setUserCount(prevCount => prevCount + 1);-
      // For Total Clicks
      await axios.post(`clicks/clicked-users`, {"users": 1}, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }); 
    }

    // For Total Clicks
   await axios.post(`clicks`, {"clicks": 1}, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }); 
    

  };

  const showForm = ()=>{
    setShowform(true)
  }

  const closeForm = (response:any)=>{
    setStatus(response.message);
    setShow(response.showPopup);
    setEmail(response.email);
    console.log(response)
    setShowform(response.status)
  }

  const closeResponse =()=>{
    setShow(false)
  }

    return (
      <div className='w-full max-w-[669px] laptop:w-[60%] mx-auto p-8 border border-[#EDEDED] text-16 font-medium focus:outline-none laptop:flex laptop:flex-col laptop:justify-center'>
        <div className={`flex gap-5 laptop:items-center text-left ml-0 w-fit mb-[10px] relative`}>
        <p
      onClick={handleClick}
      className={`flex-none w-[80px] h-[80px] laptop:w-[80px] laptop:h-[80px] border-[3px]  rounded-[100%] bg-[#FFCC00] shadow-tap-shadow border-white transform transition-transform linear ${isScaled ? 'scale-[1.2] duration-300' : 'scale-100 duration-300'}`}
    ></p>
          <p className='w-full max-w-[300px] font-normal leading-[22px] text-[24px] text-[#2E2E27] tablet:text-[20px] tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>This button has been tapped <span className='text-[#C19700] font-semibold'>{count} times today!</span></p>
        </div>
        <div className='py-2 '>
          <p className='text-16 text-[#484848] laptop:text-20 font-normal text-left'>We use this button to track how many users visit this page and use our apps. Feel free to explore it. If you like our apps and want us to create more, <br/>Please <Link target='_blank' href='https://olayanjuidris.gumroad.com/l/wordieboxsupport' className="font-semibold cursor-pointer border-b border-b-[#64645F]" >Support us.</Link> <br/>Have a Word app idea? <span onClick={showForm} className="font-semibold w-fit cursor-pointer max-[395px]:block border-b border-b-[#64645F]">Suggest it to us.</span>  </p>
          </div>

          <FormPopup visible={showform} close={closeForm}/>

        <Popup visible={show} updateView={closeResponse} status={status} email={email} />

               </div>
    )
  }
  
  export default Tap



  // tablet:w-[120px] tablet:h-[120px] tablet:border-[6px]