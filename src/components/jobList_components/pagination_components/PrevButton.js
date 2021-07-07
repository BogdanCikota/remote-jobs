import React from 'react'

function PrevButton({ goToTop, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button disabled={fromIndex === 0 ? true : false} className='font-bold text-blue-600 text-xl' onClick={()=>{
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
