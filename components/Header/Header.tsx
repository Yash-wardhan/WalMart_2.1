"use client";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FormEvent } from "react"
import { FaRegHeart } from "react-icons/fa"
import { GrUserAdmin } from "react-icons/gr"
import { IoCartOutline, IoGridOutline, IoSearch } from "react-icons/io5"
import { PiGridFourLight } from "react-icons/pi"

function Header() {
    const router = useRouter()
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Handle form submission here
        event.preventDefault();
        console.log(event.preventDefault)

        //search
        const search = event.currentTarget.search.value;
        router.push(`/search?q=${search}`)
        
      }
  return (
    <header className="flex flex-col md:flex-row items-center bg-walmart px-10 py-7 space-x-1 ">
        <Link href="/" className="mb-3 md:mb-0 px-4 py-2 hover:bg-[#004F9A] duration-100 ease-in rounded-full ">
            <Image src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" width={130} height={130} alt="walmart" />
        </Link>
        <form onSubmit={handleSubmit}  className="flex rounded-full items-center w-full flex-1 bg-white">
            <input type="text" name="search"  placeholder="Search Everything" className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"/>
            <button type="submit">
                <IoSearch size={20} className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
            </button>
        </form>
        <div className="flex space-x-5 text-xs mt-5 md:mt-0">
            <Link href={"/"} className="hidden xl:flex text-white font-bold  items-center space-x-2">
                <PiGridFourLight color="white" size={25}  />
                <p>Departments</p>
            </Link>
            <Link href={"/"} className="hidden xl:flex text-white font-bold items-center space-x-2 px-4 py-2">
                <IoGridOutline color="white" size={20}  />
                <p>Services</p>
                
            </Link>
            <Link href={"/"} className="flex text-white font-bold items-center space-x-2 px-4 py-2">
                <FaRegHeart color="white" size={20}  />
                <div className="">
                    <p className="font-normal">Reorder</p>
                    <p>My Items</p>
                </div>
            </Link>
            <Link href={"/"} className="flex text-white font-bold items-center space-x-2 px-4 py-2">
                <GrUserAdmin color="white" size={20}  />
                <div className="">
                    <p className="font-normal">Sign In</p>
                    <p>Account</p>
                </div>
            </Link>
            <Link href={"/basket"} className="flex text-white font-bold items-center space-x-2 px-4 py-2">
                <IoCartOutline color="white" size={20}  />
                <div className="">
                    <p className="font-normal">Basket</p>
                    <p>Rs. 100</p>
                </div>
            </Link>
        </div>
    </header>
  )
}

export default Header
