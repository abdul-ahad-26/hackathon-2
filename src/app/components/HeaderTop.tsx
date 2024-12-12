import React from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'
import { RiYoutubeLine } from 'react-icons/ri'
import { TfiEmail } from 'react-icons/tfi'

const HeaderTop = () => {
  return (
    <div className='bg-[#252B42]'>
      <div className="h-[58px] container  text-white font-bold text-sm  items-center justify-between hidden lg:flex xl:text-base">
        <div className=' flex gap-6  '>
          <div className="flex items-center gap-2">
            <HiOutlinePhone />
            <div>(225) 555-018</div>
          </div>
          <div className="flex items-center gap-2">
            <TfiEmail />
            <div>michelle.rivera@example.com</div>
          </div>
        </div>
        <div className='items-center'>Follow Us  and get a chance to win 80% off</div>
        <div className=' flex items-center gap-[10px] '>
          <div>Follow Us :</div>
          <FaInstagram className='text-[20px]' />
          <RiYoutubeLine className='text-[24px]' />
          <CiFacebook className='text-[22px]' />
          <CiTwitter className='text-[24px]' />




        </div>
      </div>
    </div>
  )
}

export default HeaderTop