import {useEffect} from "react";
import Job from "./jobList_components/Job";
import chunk from 'lodash.chunk';
import Pagination from "./jobList_components/Pagination";

function JobList({goToPage, setgoToPage, pages, jobs, pagesCounter, fromIndex, setfromIndex, toIndex, settoIndex,
    chunkedPages, setChunkedPages, pageNum, setPageNum, numOfResults} ) {
    

    useEffect(() => {
        //divide pages array into 100 chunks
        setChunkedPages(chunk(pages, 100));
    }, [pages, setChunkedPages]);

    return (
        <div className='grid gap-2 my-2'>  
            <h2 className='font-bold text-center p-1 pl-3 rounded-full  px-3 bg-gray-100 inline-block text-blue-900' >Page <span className='pageNum'>{pageNum}</span> </h2>                    
            <div>
                {jobs.map((job, index) => {
                    return index >= fromIndex && index < toIndex && <Job key={index} index={index} job={job}/>
                })}
            </div>

            <h2 className='font-bold text-center p-1 pl-3 rounded-full  px-3 bg-gray-100 inline-block text-blue-900' >Page <span className='pageNum'>{pageNum}</span> </h2>
            
            {
                jobs.length > numOfResults  && 
                
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
                numOfResults={numOfResults}
                goToPage={goToPage}
                setgoToPage={setgoToPage}
                />
            }
            
        </div>
    )
}

export default JobList
