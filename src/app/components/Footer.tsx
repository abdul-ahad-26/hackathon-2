import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="max-w-[1440px] text-gray-600 body-font mx-auto">
            <div className="bg-gray-100">
                <div className=" px-4 py-6 mx-auto flex sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start  text-gray-900">

                        <span className="ml-3  font-bold text-2xl">Bandage</span>
                    </a>

                    <span className="inline-flex ml-[1080px] sm:mt-0 mt-4  sm:justify-start  text-blue-500">
                        <a className="ml-3">
                            <FaFacebook className='size-5 ' />
                        </a>
                        <a className="ml-5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-5">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>


                    </span>
                </div>
            </div>
            <div className=" px-4 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left  order-first">
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#252B42] tracking-widest text-sm mb-3">
                            Company info
                        </h2>
                        <nav className="list-none mb-10 flex flex-col gap-3">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Carrier</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">We are hiring</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blog</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#252B42] tracking-widest text-sm mb-3">
                            Legal
                        </h2>
                        <nav className="list-none mb-10 flex flex-col gap-3">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Carrier</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">We are hiring</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Blog</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#252B42] tracking-widest text-sm mb-3">
                            Features
                        </h2>
                        <nav className="list-none mb-10 flex flex-col gap-3">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Business Marketing</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">User Analytic</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">live chat</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Unlimited Support</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#252B42] tracking-widest text-sm mb-3">
                            Resources
                        </h2>
                        <nav className="list-none mb-10 flex flex-col gap-3">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">IOS & Android</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Watch a Demo</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Customers</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">API</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-[#252B42] tracking-widest text-sm mb-3">
                            Get In Touch
                        </h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-center md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-0 lg:mr-0 sm:mr-0">
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    placeholder="Your Email"
                                    className="w-full bg-[#E6E6E6] bg-opacity-50  border border-gray-200 rounded-sm focus:bg-transparent focus:ring-2outline-none text-[#737373] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out h-[58px] font-normal text-sm"
                                />
                            </div>
                            <button className="lg:mt-0 xl:mt-0 -ml-px flex-shrink-0 inline-flex  items-center justify-center text-white bg-[#23A6F0]  py-0 px-6 focus:outline-none rounded-sm h-[58px]">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left ">
                            lore imp sum dolor Amit
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100">
                <div className=" px-4 py-6 mx-auto flex items-center text-center sm:flex-row flex-col">

                    <p className="text-sm font-bold text-[#737373] ml-3 sm:mt-0 mt-4">
                        Made With Love By
                        Finland All Right Reserved
                    </p>

                </div>
            </div>
        </footer>

    )
}

export default Footer