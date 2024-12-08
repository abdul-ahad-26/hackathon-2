import Link from 'next/link'
import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

const Header = () => {
   return (
      <header className='bg-[#FFFFFF] max-w-[1440px] pt-5 pb-28 flex  m-auto flex-col md:flex-row'>
         <div className='flex justify-around mt-4 items-center'>
            <Link href="/">
               <div className='font-bold text-2xl'>Bandage
               </div>
            </Link>

         </div>
         <div className='flex gap-4'>
            <IoSearchOutline className='size-6 text-black ' />
            <IoCartOutline className='size-6 text-black ' />
            <BiMenuAltRight className='size-6 text-black ' />
         </div>

         <nav >
            <ul className='flex flex-col text-center mt-24 gap-9 font-normal text-3xl text-[#737373] md:flex-row'>
               <li><Link href='/'>Home</Link></li>
               <li><Link href='/'>Product</Link></li>
               <li><Link href='/'>Pricing</Link></li>
               <li><Link href='/'>Contact</Link></li>

            </ul>
         </nav>

      </header>
   )
}

export default Header