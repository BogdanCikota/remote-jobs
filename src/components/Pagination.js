import { useState } from "react";
import Page from "./Page";

function Pagination({jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pagesCounter, chunkedPages }) {
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);

    return (
        <div>
            {fromIndex === -1 ? <button disabled>prev 10</button> : 
            <button onClick={()=>{
                setPageNum(()=>{
                    return document.querySelector('.pageNum').innerHTML-1
                });
                setfromIndex(fromIndex-10);
                settoIndex(toIndex-10);
            }}>prev 10</button>}

            <hr/>

            {pagesCounter > 100 && <div>
                <h2>pages</h2>
                <button onClick={()=>{
                    setfromOne(prev=>!prev);
                    setfromHundred(false);
                    setfromTwoHundred(false)
                }}>1...100,</button>
                {pagesCounter > 100 && <button onClick={()=>{
                    setfromHundred(prev=>!prev);
                    setfromOne(false);
                }}>100...200,</button>}
                {pagesCounter > 200 &&<button onClick={()=>{
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

            <hr/>
            {toIndex > jobs.length-1 ? <button disabled>next 10</button> :
                <button onClick={()=>{
                setPageNum(()=>{
                    return +document.querySelector('.pageNum').innerHTML + +1
                    });
                setfromIndex(fromIndex+10);
                settoIndex(toIndex+10);
            }}>next 10</button>}
        </div>
    )
}

export default Pagination
