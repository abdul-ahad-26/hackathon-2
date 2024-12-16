"use client"
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlinePhone } from 'react-icons/hi'
import { TfiEmail } from 'react-icons/tfi'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


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
          <InstagramIcon/>
          <YouTubeIcon />
          
          {/* <FaFacebookF className='bg-white text-black  rounded-xl text-xl pt-1 '/> */}
          <FacebookRoundedIcon/>
          
          <TwitterIcon/>
          
          
          
        </div>
      </div>
    </div>
  )
}

export default HeaderTop