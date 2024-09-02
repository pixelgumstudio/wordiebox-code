import React, { useEffect, useState } from "react";

export default function Popup({visible, status, email, updateView}: {visible:boolean, status: string, email:string, updateView:any}) {
  const [content, setContent] = useState<Feedback>();


  type Feedback = {
    "status": string,
    "title": string,
    "body": string,
}

// eslint-disable-next-line react-hooks/exhaustive-deps
const response: Feedback[] =[ {
    status: 'success',
    title: "Congrats",
    body: `Congratulations, your email address ${email} has been added to our waitlist successfully`
},
{
  status: 'thanks',
  title: "Thank You",
  body: `Your idea has been received successfully, we will reach out if we require further information from you!`
},
{
    status: 'used',
    title: "Ooops",
    body: `${email} has already been registered , thanks for joining our waitlist`
},
{
    status: 'fail',
    title: "Ooops",
    body: `Email not Accepted`
},
{
  status: 'message',
  title: "Message",
  body: email
}
]


useEffect(()=>{
    response.map(res => res.status === status && setContent(res))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[visible])



  return (
    visible && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
          <h2 className={`text-48 font-bold font-comic mb-8 ${(status === "success" || status === "thanks" || status === "message") ? 'text-[#00A33F]' :  'text-[#F64300]'}`}>{content?.title}</h2>
          <p className="text-20 capitalize">{content?.body}</p>
         {status !== "message" &&
          <button
            onClick={()=>updateView(false)}
            className="mt-10 cursor-pointer bg-[#FC0] hover:bg-[#EDBA00]  border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none "
          >
            Close
          </button>
}
        </div>
      </div>
    )
  );
}
