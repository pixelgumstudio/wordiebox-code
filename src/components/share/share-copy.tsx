import { useState } from "react";
import CongratsPopup from "./popups/congrats";
import EmailPopup from "./popups/email";


interface CopyButtonProps {
  textToCopy: string;
  size?: string;
  text?: string;
  style?: string;
}

const ShareButton: React.FC<CopyButtonProps> = ({ textToCopy, size = 'fit', text = 'Share', style ='bg-white text-black' }) => {
 const [email, setEmail] =  useState<boolean>(false)
 const [congrats, setCongrats] = useState<boolean>(false)
  const handleShare = () => {
    setEmail(true)
  };

  const closeCongrats =(res: boolean | ((prevState: boolean) => boolean))=>{
    setCongrats(res)
  }

  const submittedEmail =(res: boolean | ((prevState: boolean) => boolean))=>{
    setEmail(res)
    setCongrats(true)
  }
  const closeEmail =(res: boolean | ((prevState: boolean) => boolean))=>{
    setEmail(res)
  }
    return (
      <>
      <button onClick={handleShare} className={`${size === "full" ? 'w-full' : 'w-fit'} border-[#1C1C1C] ${style} border shadow-darkbox py-3 px-2 text-16 font-medium hover:bg-white`}>
       {text}
       </button>
      <EmailPopup visible={email} submitted={submittedEmail} close={closeEmail} password={textToCopy} />
       <CongratsPopup text="Your password has been sent to your email successfully." visible={congrats} updateView={closeCongrats} />
      </>
    )
  }
  
  export default ShareButton;