import React from "react";

export default function CongratsPopup({visible, text, updateView}: {visible:boolean, text: string, updateView:any}) {







  return (
    visible && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
          <h2 className={`text-48 font-bold font-comic mb-8 success text-[#00A33F]`}>Congrats</h2>
          <p className="text-20 capitalize">{text}</p>
          <button
            onClick={()=>updateView(false)}
            className="mt-10 w-full cursor-pointer bg-[#FC0] hover:bg-[#EDBA00]  border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none "
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
