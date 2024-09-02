import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Card = ({image, color, title, description, link}:{image: string, color: string, title: string, description: string, link:string}) => {

    // const imageUrl = typeof image === 'string' ? image : image?.src || ''

    return (
      <div className='w-full max-w-[360px] flex h-[auto] laptop:w-[31%] hover:border-[#1C1C1C] hover:border hover:bg-white hover:shadow-darkbox p-4 text-16 font-medium focus:outline-none mb-6'>
        <Link href={link} className='flex text-left gap-4  tablet:max-w-[528px]'>
        <Image src={image} alt={title} width={100} height={100} className={`w-15 h-15`} />
        <div className=''>
        <p className='font-semibold w-full max-w-[255px] text-16 text-[#2E2E27] mb-2'>{title}</p>
          <p className='text-16 text-[#64645F] font-normal'>{description}</p>
          </div>
          </Link>
           </div>
    )
  }
  
  export default Card