"use client"
import Link from "next/link"
import Image from 'next/image'
import Logo from '/public/Logo.svg'

const Navbar = () => {

    return (
        <div className=" w-full bg-[#FFFFFF] border-b border-b-[#8B8B8B] px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex items-center justify-center  w-full laptop:max-w-[1152px] mx-auto">
                    <Link href='/' className="flex items-center">
                        <Image src={Logo} width="119" height="37" className="w-[119px] h-[37px] mr-3"
                            alt="Game Logo" />
                    </Link>
                </div>
            </nav>
        </div>


    )
}

export default Navbar