'use client';
import { useState } from 'react';
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { BiMenuAltRight } from "react-icons/bi";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="bg-white ">
      <div className="max-w-[1440px] mx-auto px-4 py-4 md:px-10">
        <div className="flex items-center justify-between   flex-wrap ">

          {/* Left Logo */}
          <div className=" md:w-[185px]">
            <Link href="/"><h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1></Link>

          </div>

          {/* Center Navigation */}
          <nav className="order-last   w-full  md:order-none md:hidden lg:flex  text-[#737373]  md:w-[360px] flex-grow">
            <ul className="flex flex-col md:flex-row gap-8 py-24 md:py-3 text-[#737373] text-3xl md:text-sm md:font-bold text-center">
              <Link href="/" className='hover:text-black'><li >Home</li></Link>
              <li className="relative hidden md:inline cursor-pointer text-start"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="hover:text-black">Shop <KeyboardArrowDownSharpIcon /></div>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                    <Link href="/category1">
                      <li className="px-4 py-2 hover-bg-gray-100">Category 1</li>
                    </Link>
                    <Link href="/category2">
                      <li className="px-4 py-2 hover-bg-gray-100">Category 2</li>
                    </Link>
                    <Link href="/category3">
                      <li className="px-4 py-2 hover-bg-gray-100">Category 3</li>
                    </Link>

                  </ul>
                )}
              </li>
              <Link href="/" className="md:hidden hover:text-black "><li>Product</li></Link>
              <Link href="/" className="md:hidden hover:text-black "><li>Pricing</li></Link>
              <Link href="/" className="hidden md:inline hover:text-black"><li >About</li></Link>
              <Link href="/" className="hidden md:inline hover:text-black"><li >Blog</li> </Link>
              <Link href="/" className='hover:text-black'><li >Contact</li></Link>
              <Link href="/" className="hidden md:inline hover:text-black" ><li >Pages</li></Link>


            </ul>
          </nav>


          {/* Right Icons */}
          <div className="flex  justify-end  text-[#252B42] items-center gap-4 md:gap-6 md:text-[#23A6F0] font-bold text-sm">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-700">
              <PermIdentityIcon className="text-[20px] hidden sm:inline" />
              <span className="hidden sm:inline">Login / Register</span>
            </Link>
            <SearchOutlinedIcon
              className="md:hidden cursor-pointer hover:text-blue-700 size-8"
            />


            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hidden md:inline  cursor-pointer hover:text-blue-700 size-5 bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <div className="flex items-center gap-1">
              <ShoppingCartOutlinedIcon
                className="cursor-pointer hover:text-blue-700 size-7 md:hidden "
              />

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hidden bi bi-cart size-5 cursor-pointer hover:text-blue-700   md:inline" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <span className="text-sm px-1.5 py-0.5 font-normal hidden sm:inline">
                1
              </span>
            </div>
            <div className="hidden items-center sm:flex gap-1  ">
              <FavoriteBorderOutlinedIcon
                className=" size-6 cursor-pointer hover:text-blue-700 "
              />
              <span className="text-sm  px-1.5 py-0.5 font-normal   ">
                1
              </span>
            </div>
            <BiMenuAltRight className="sm:size-5 size-8 sm:hidden cursor-pointer  hover:text-blue-700" />

          </div>
        </div>

      </div>
    </header>
  );
}
