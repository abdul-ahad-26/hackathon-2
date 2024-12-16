import React from 'react'

const EditorsPick = () => {
    return (
        <div className='flex flex-col w-full px-4 items-center justify-center'>
            <div className='bg-cover bg-center w-[323px]  h-[500px] ' style={{
                backgroundImage: "url('/men.png')"
            }}></div>
            <div className='bg-cover bg-center w-[323px] h-[500px]' style={{
                backgroundImage: "url('/women.png')"
            }}></div>
            <div className="flex flex-col gap-2">
            <div className='bg-cover bg-center w-[323px] h-[240px]' style={{
                backgroundImage: "url('/accessories.png')"
            }}></div>
            <div className='bg-cover bg-center w-[323px] h-[240px]' style={{
                backgroundImage: "url('/kids.png')"
            }}></div>

            </div>
            


        </div>
    )
}

export default EditorsPick
