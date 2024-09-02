import Image from "next/image"
import Back from "/public/arrowRight.svg"

import { useRouter } from 'next/navigation';
const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };
 
    return (
      <button  onClick={handleBack} className={`tablet:absolute tablet:top-0 tablet:left-0 w-fit cursor-pointer flex justify-center items-center text-black border-[#1C1C1C] bg-white border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none hover:bg-white`}>
      <Image src={Back} alt="" width={20} height={20} className="rotate-180"/>Back </button>
    )
  }
  
  export default BackButton