import { useState } from "react";
import Pages from "./pagination_components/Pages";

function Pagination({numOfResults, jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pagesCounter, chunkedPages }) {
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);

    const pageNumElement = document.querySelector('.pageNum');

    return (
        <div className='grid gap-2'>
            {/* prev button */}
            <div className='grid grid-cols-2'>
            {fromIndex === -1 ? <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' disabled>prev</button> : 
            <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                setPageNum(()=>{
                    let pageNumCurrent = pageNumElement.innerHTML;
                    return pageNumCurrent-1
                });
                setfromIndex(fromIndex-numOfResults);
                settoIndex(toIndex-numOfResults);
            }}>prev</button>}

            {/* next button */}
            {toIndex > jobs.length-1 ? <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' disabled>next</button> :
                <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                setPageNum(()=>{
                    let pageNumCurrent = pageNumElement.innerHTML;
                    return +pageNumCurrent + +1
                    });
                setfromIndex(fromIndex+numOfResults);
                settoIndex(toIndex+numOfResults);
            }}>next</button>}

            {
                // render pages buttons
                pagesCounter <= 100 && 
                chunkedPages.map((chunk, index) => 
                <Pages  
                key={index} 
                chunk={chunk} 
                setPageNum={setPageNum} 
                setfromIndex={setfromIndex} 
                settoIndex={settoIndex}
                numOfResults={numOfResults}
                /> )
            }

            </div>
         
            { 
                //from-to buttons
                pagesCounter > 100 && <div className='grid grid-cols-3'>
                    <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromOne(prev=>!prev);
                        setfromHundred(false);
                        setfromTwoHundred(false)
                    }}>1...100</button>
                    {pagesCounter > 100 && <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromHundred(prev=>!prev);
                        setfromOne(false);
                    }}>100...200</button>}
                    {pagesCounter > 200 &&<button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromTwoHundred(prev=>!prev)
                        setfromOne(false);
                        setfromHundred(false)
                    }}>200...</button>}
                </div>
            }

            <hr />

            {
                // render pages buttons when clicked from-to button
                fromOne ? chunkedPages.map((chunk, index)=> index === 0 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} /> ) :
                fromHundred ? chunkedPages.map((chunk, index)=> index === 1 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} /> ) :
                fromTwoHundred && chunkedPages.map((chunk, index)=> index === 2 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} />)
            }

            
           
        </div>
    )
}

export default Pagination
