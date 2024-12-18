import React from 'react'

const EditorsPick = () => {
    return (
        <div className='flex flex-col w-full px-4 items-center justify-center'>
            <div className='bg-cover bg-center row-span-1 ' style={{
                backgroundImage: "url('/men.png')"
            }}></div>
            <div className='bg-cover bg-center row-span-1' style={{
                backgroundImage: "url('/women.png')"
            }}></div>
            <div className="flex flex-col gap-2">
            <div className='bg-cover bg-center row-span-1' style={{
                backgroundImage: "url('/accessories.png')"
            }}></div>
            <div className='bg-cover bg-center row-span-1' style={{
                backgroundImage: "url('/kids.png')"
            }}></div>

            </div>
            


        </div>
    )
}

export default EditorsPick
