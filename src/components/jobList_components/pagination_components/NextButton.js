
function NextButton({jobs, goToTop, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button disabled={toIndex > jobs.length-1 ? true : false} className='font-bold bg-blue-500 px-2 rounded-full text-xl text-white' onClick={()=>{
            setPageNum(()=>{
                let pageNumCurrent = pageNumElement.innerHTML;
                return +pageNumCurrent + +1
                });
            setfromIndex(fromIndex+numOfResults);
            settoIndex(toIndex+numOfResults);
            goToTop();
        }}>&#62;</button>
    )
}

export default NextButton
