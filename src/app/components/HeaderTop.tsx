import React from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'
import { RiYoutubeLine } from 'react-icons/ri'
import { TfiEmail } from 'react-icons/tfi'

const HeaderTop = () => {
  return (
    <div className="h-[58px] max-w-[1440px] bg-[#252B42] text-white   items-center mx-auto justify-between px-4 hidden lg:flex">
      <div className='px-4 flex gap-5  '>
        <div className="flex items-center">
        <HiOutlinePhone className='mr-1' />
          (225) 555-018
        </div>
        <div className="flex items-center ">
        <TfiEmail className='mr-1'/>
        michelle.rivera@example.com
        </div>
      </div>
      <div className='px-4'>Follow Us  and get a chance to win 80% off</div>
      <div className='px-4 flex items-center gap-2'>
        <div>Follow Us:</div>
        <FaInstagram className='text-[20px]'/>
        <RiYoutubeLine className='text-[24px]'/>
        <CiFacebook className='text-[22px]'/>
        <CiTwitter className='text-[24px]'/>



        
      </div>
      </div>
  )
}

export default HeaderTop