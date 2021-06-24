import React from 'react'

function Page({chunk, setPageNum, setfromIndex, settoIndex}) {
    return (
        <div className='inline-block' >{chunk.map((page, index) => {
            return <button className='inline-block' key={index} onClick={()=>{
                    setPageNum(page+1);
                    setfromIndex(page*10-1);
                    settoIndex(page*10+10);
                }}>{page+1},</button>
            } )},</div>
    )
}

export default Page
