'use client'
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container  px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center lg:gap-20">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
            </div>

            {/* Center Navigation */}
            <nav className="hidden lg:flex space-x-8 text-[#737373] text-sm font-bold">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <select
                name="shop"
                id="shop"
                className="cursor-pointer bg-transparent border-none text-[#737373] hover:text-gray-900 focus:outline-none"
              >
                <option value="shop">Shop</option>
              </select>
              <Link href="/" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/" className="hover:text-gray-900">
                Blog
              </Link>
              <Link href="/" className="hover:text-gray-900">
                Contact
              </Link>
              <Link href="/" className="hover:text-gray-900">
                Pages
              </Link>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="flex text-[#252B42] items-center gap-4 md:gap-6 sm:text-[#23A6F0] font-bold text-sm">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-700">
              <PermIdentityIcon className="text-[20px] hidden sm:inline" />
              <span className="hidden sm:inline">Login / Register</span>
            </Link>

            <SearchOutlinedIcon
              className="sm:size-5 cursor-pointer hover:text-blue-700 size-8"
            />
            <div className="flex items-center gap-1">
              <ShoppingCartOutlinedIcon
                className="sm:size-5 cursor-pointer hover:text-blue-700 size-7"
              />
              <span className="text-xs px-1.5 py-0.5 font-normal hidden sm-inline">
                1
              </span>
            </div>
            <div className="sm:inline items-center gap-1 hidden ">
              <FavoriteBorderOutlinedIcon
                className=" size-5 cursor-pointer hover:text-blue-700 "
              />
              <span className="text-xs  px-1.5 py-0.5 font-normal   ">
                1
              </span>
            </div>
            <BiMenuAltRight className="sm:size-5 size-8 sm:hidden"/>

          </div>
        </div>
        <nav className="flex flex-col sm:hidden  text-[#737373] text-center gap-8 my-16 text-3xl ">
              <Link href="/" className="hover:text-gray-900 ">
                Home
              </Link>

              <Link href="/" className="hover:text-gray-900">
                Product
              </Link>
              <Link href="/" className="hover:text-gray-900">
                Pricing
              </Link>

              <Link href="/" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>
      </div>
    </header>
  );
}
