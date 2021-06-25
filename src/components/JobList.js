import {useEffect, useState} from "react";
import Job from "./Job";
import chunk from 'lodash.chunk';
import Page from "./Page";

function JobList({pages, jobs, pagesCounter} ) {
    const [fromIndex, setfromIndex] =useState(-1);
    const [toIndex, settoIndex]  = useState(10);
    const [chunkedPages, setChunkedPages] = useState([]);
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        setChunkedPages(chunk(pages, 100));
    }, [pages]);

    return (
        <div>
            <div>Found <span>{jobs.length} results</span></div>
            <h2 >Page <span className='pageNum'>{pageNum}</span> </h2>                    
            <div>
                {jobs.map((job, index) => {
                    return index > fromIndex && index < toIndex && <Job key={index} job={job}/>
                })}
            </div>
            <hr/>
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

export default JobList
