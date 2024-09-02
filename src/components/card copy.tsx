import { StaticImageData } from 'next/image'
import Link from 'next/link'

const Card = ({image, color, title, description, link}:{image: StaticImageData, color: string, title: string, description: string, link:string}) => {

    const imageUrl = typeof image === 'string' ? image : image?.src || ''

    return (
      <div className='w-full max-w-[320px] h-[auto] laptop:w-[30%] border-[#1C1C1C] border bg-white shadow-darkbox py-[7px] px-[5px] text-16 font-medium focus:outline-none mb-6'>
        <Link href={link} className='flex flex-col text-left  tablet:max-w-[528px]'>
        <div className={`w-full h-[160px] p-5 mb-[10px] relative bg-no-repeat bg-bottom-right`}
         style={{
          backgroundColor: color,
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'bottom right',
          backgroundPositionY: '50px'
        }}>
          <p className='font-semibold w-[200px] text-24 text-[#2E2E27] mb-2 tablet:text-24'>{title}</p>
        </div>
        <div className='px-4 py-2'>
        <p className='font-semibold text-16 text-[#2E2E27] mb-2'>{title}</p>
          <p className='text-14 text-[#64645F] font-normal'>{description}</p>
          </div>
     
          </Link>
           </div>
    )
  }
  
  export default Card