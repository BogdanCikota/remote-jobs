import { useState } from "react";
import Page from "./Page";

function Pagination({jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pagesCounter, chunkedPages }) {
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);

    return (
        <div className='grid gap-2'>
            <div className='grid grid-cols-2'>
            {fromIndex === -1 ? <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' disabled>prev 10</button> : 
            <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                setPageNum(()=>{
                    return document.querySelector('.pageNum').innerHTML-1
                });
                setfromIndex(fromIndex-10);
                settoIndex(toIndex-10);
            }}>prev 10</button>}

            {toIndex > jobs.length-1 ? <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' disabled>next 10</button> :
                <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                setPageNum(()=>{
                    return +document.querySelector('.pageNum').innerHTML + +1
                    });
                setfromIndex(fromIndex+10);
                settoIndex(toIndex+10);
            }}>next 10</button>}

            {
                pagesCounter < 100 && chunkedPages.map((chunk, index)=> index === 0 && <Page  key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} /> )
            }

            </div>
            
            {pagesCounter > 100 && <div className='grid grid-cols-3'>
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
            </div>}

            <hr />

            {
                fromOne ? chunkedPages.map((chunk, index)=> index === 0 && <Page key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} /> ) :
                fromHundred ? chunkedPages.map((chunk, index)=> index === 1 && <Page key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} /> ) :
                fromTwoHundred && chunkedPages.map((chunk, index)=> index === 2 && <Page key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} />)
            }

            
           
        </div>
    )
}

export default Pagination
