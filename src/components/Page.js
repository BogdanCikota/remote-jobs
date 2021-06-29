import React from 'react'

function Page({chunk, setPageNum, setfromIndex, settoIndex}) {
    return (
        <div className='p-2 grid grid-cols-8 gap-2 col-span-full' >{chunk.map((page, index) => {
            return <button className='rounded-lg px-1  bg-blue-400 text-white' key={index} onClick={()=>{
                    setPageNum(page+1);
                    setfromIndex(page*10-1);
                    settoIndex(page*10+10);
                }}>{page+1}</button>
            } )}</div>
    )
}

export default Page
