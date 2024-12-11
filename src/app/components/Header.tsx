import Link from 'next/link'
import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

const Header = () => {
   return (
      <header className='max-w-[1440px] px-4 bg-[#FFFFFF] mx-auto  h-16 flex   items-center gap-4  py-6 '>

         <Link href="/">
            <div className='font-bold text-2xl ml-3'>Bandage
            </div>
         </Link>


         <nav className='ml-36'>
            <ul className='flex   gap-9 font-normal  text-[#737373] '>
               <li><Link href='/'>Home</Link></li>
               <li><select name="shop" id="shop">
                  <option value="/">
                     Shop
                  </option>
               </select>
               </li>
               <li><Link href='/'>About</Link></li>
               <li><Link href='/'>Blog</Link></li>
               <li><Link href='/'>Contact</Link></li>
               <li><Link href='/'>Pages</Link></li>

            </ul>
         </nav>
         <div className='flex ml-64 gap-4'>
            <div className='flex gap-2 items-center '>
               <CiUser />
               <Link href="/">Login / Register</Link>
               
            </div>


            <IoSearchOutline className='size-6 text-black ' />
            <IoCartOutline className='size-6 text-black ' />
            <BiMenuAltRight className='size-6 text-black ' />
         </div>

      </header>
   )
}

export default Header