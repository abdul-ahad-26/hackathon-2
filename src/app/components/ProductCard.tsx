import React from 'react'
import Image from 'next/image'


const ProductCard = () => {
    return (

        <div className='h-[615px]  '>
            <Image src="/product1.png" height={427} width={240} className='h-[427px] object-cover' alt='product image' />
            <div className='flex flex-col text-center items-center justify-center gap-3 py-6'>
                <p className='font-bold text-[#252B42]'>Graphic Design</p>
                <p className='font-bold text-[#737373] text-sm'>English Department</p>
                <div className='flex items-center justify-center gap-2 font-bold'>
                    <div className='text-[#BDBDBD]'>$16.48</div>
                    <div className='text-[#23856D]'>$6.48</div>
                </div>
                <div className='flex items-center justify-center gap-2'>

                    <div className='bg-[#23A6F0] border rounded-xl h-5 w-5'></div>
                    <div className='bg-[#23856D] border rounded-xl h-5 w-5'></div>
                    <div className='bg-[#E77C40] border rounded-xl h-5 w-5'></div>
                    <div className='bg-[#252B42] border rounded-xl h-5 w-5'></div>
                </div>

            </div>
        </div>


    )
}

export default ProductCard