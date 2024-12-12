import Link from "next/link";
import { FaUser, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container  ">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex space-x-8 text-[#737373] text-sm font-bold ">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <select name="shop" id="shop" className="cursor-pointer">
              <option value="shop" >Shop</option>
            </select>

            <Link href="/" className="hover:text-gray-900">About</Link>
            <Link href="/" className="hover:text-gray-900">Blog</Link>
            <Link href="/" className="hover:text-gray-900">Contact</Link>
            <Link href="/" className="hover:text-gray-900">Pages</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 text-[#23A6F0] font-bold text-sm">
            <Link href="/" className="flex items-center space-x-1">
              <FaUser className="text-[20px]" />
              <span className="hidden sm:inline">Login / Register</span>
            </Link>
            <FaSearch className="text-[20px]" />
            <div className="flex gap-1">
              <FaShoppingCart className="text-[20px]" />
              <span >1</span>
            </div>
            <div className="flex gap-1">
              <FaHeart className="text-[20px]" />
              <span >1</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
