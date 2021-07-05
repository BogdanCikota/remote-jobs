
function NextButton({goToTop, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
            setPageNum(()=>{
                let pageNumCurrent = pageNumElement.innerHTML;
                return +pageNumCurrent + +1
                });
            setfromIndex(fromIndex+numOfResults);
            settoIndex(toIndex+numOfResults);
            goToTop();
        }}>next</button>
    )
}

export default NextButton
