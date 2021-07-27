import React from 'react'

function PrevButton({setJobPositionTop, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button disabled={fromIndex === 0 ? true : false} className='font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white' onClick={()=>{
            setPageNum(()=>{
                let pageNumCurrent = pageNumElement.innerHTML;
                return pageNumCurrent-1
            });
            setfromIndex(fromIndex-numOfResults);
            settoIndex(toIndex-numOfResults);
            setJobPositionTop(0);
        }}>&#60;</button>
    )
}

export default PrevButton
