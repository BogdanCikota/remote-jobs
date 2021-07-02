import {useEffect} from "react";
import Job from "./Job";
import chunk from 'lodash.chunk';
import Pagination from "./Pagination";

function JobList({pages, jobs, pagesCounter, fromIndex, setfromIndex, toIndex, settoIndex,
    chunkedPages, setChunkedPages, pageNum, setPageNum} ) {
    

    useEffect(() => {
        setChunkedPages(chunk(pages, 100));
    }, [pages, setChunkedPages]);

    return (
        <div className='grid gap-2'>
            <div className='text-center bg-blue-500 p-1 text-white'>Found <span>{jobs.length} results</span></div>
            <h2 className='font-bold text-center p-1 pl-3 rounded-full  px-3 bg-gray-100 inline-block text-blue-900' >Page <span className='pageNum'>{pageNum}</span> </h2>                    
            <div>
                {jobs.map((job, index) => {
                    return index > fromIndex && index < toIndex && <Job key={index} index={index} job={job}/>
                })}
            </div>
            <hr/>
            
            <Pagination 
            fromIndex={fromIndex}
            setfromIndex={setfromIndex}
            toIndex={toIndex}
            settoIndex={settoIndex}
            chunkedPages={chunkedPages}
            setChunkedPages={setChunkedPages}
            pageNum={pageNum}
            setPageNum={setPageNum}
            jobs={jobs}
            pagesCounter={pagesCounter}
             />
            
        </div>
    )
}

export default JobList
