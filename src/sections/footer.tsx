import Logo from'/public/Logo.svg'
import Link from "next/link"
import Image from'next/image'


const Footer = () => {
  return (
    <div className='w-full bg-[#FBF4EE]' id='footer'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 xl:px-0  mx-auto py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-[153px;] laptop:flex-row laptop:items-start laptop:w-fit'>
          <Link href="/" className="flex items-center relative w-[149px] h-[37px]">
            <Image src={Logo} fill className=" mr-3"
              alt="Wordiebox Logo" />
          </Link>

          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>PRODUCTS</h2>
            <Link  href='/word-of-the-day' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Word Of The Day</Link>
            <Link  href='/random-word-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Word Generator</Link>
            <Link  href='/character-counter' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Character Counter</Link>
            <Link  href='/word-counter' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Word Counter</Link>
            <Link  href='/capitalization-tool' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Capitalize my title</Link>
            <Link  href='/morse-code-translator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Morse code generator</Link>
            <Link  href='/random-state-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random state generator</Link>
            <Link  href='/random-country-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random country generator</Link>
            <Link  href='/password-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Password  generator</Link>
            <Link  href='/pokemon-name-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Pokemon name generator</Link>
            <Link  href='/cursive-text-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Cursive text generator</Link>
            <Link  href='/strikethrough-text-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Strikethrough text</Link>

          </div>
          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>CONTACT INFORMATION</h2>
            <a href="mailto:pixelgum.design@gmail.com" className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] underline'>Pixelgum.design@gmail.com</a>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer