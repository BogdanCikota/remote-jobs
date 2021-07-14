import React from 'react'

function PrevButton({ goToTop, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button disabled={fromIndex === 0 ? true : false} className='font-bold bg-blue-500 xl:bg-blue-400 px-2 pb-0.5 rounded-full text-xl text-white' onClick={()=>{
            setPageNum(()=>{
                let pageNumCurrent = pageNumElement.innerHTML;
                return pageNumCurrent-1
            });
            setfromIndex(fromIndex-numOfResults);
            settoIndex(toIndex-numOfResults);
            goToTop();
        }}>&#60;</button>
    )
}

export default PrevButton
