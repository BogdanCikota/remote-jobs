import {useEffect} from "react";
import Job from "./jobList_components/Job";
import chunk from 'lodash.chunk';
import Pagination from "./jobList_components/Pagination";

function JobList({setJobPositionTop, openFilters, goToPage, setgoToPage, pages, jobs, fromIndex, setfromIndex, toIndex, settoIndex,
    chunkedPages, setChunkedPages, pageNum, setPageNum, numOfResults} ) {

    useEffect(() => {
        //divide pages array into 100 chunks
        setChunkedPages(chunk(pages, 100));
    }, [pages, setChunkedPages]);

    return (
        <main className={` ${!openFilters && `md:mt-16`} grid mb-2 md:mx-auto md:w-2/3 items-start`}>
            <div className='text-center'>
                <div className={`${openFilters ? `md:bg-opacity-30 bg-blue-400` : `bg-blue-500`} p-1 text-white mb-4 md:rounded-b-full md:bg-blue-300 xl:p-1.5`}>Found <span>{jobs.length} results</span></div>
                <h2 className={`${jobs.length < numOfResults ?  `hidden`:`inline-block`} font-bold text-blue-900`} >Page <span className='pageNum'>{pageNum}</span> </h2>                    
            </div>
            
            <div className='jobs-container'>
                {jobs.map((job, index) => {
                    return index >= fromIndex && index < toIndex && <Job key={index} job={job} setJobPositionTop={setJobPositionTop}/>
                })}
            </div>
            

            <div className='text-center self-end'>
                <h2 className={`${jobs.length < numOfResults ? `hidden`:`inline-block`} font-bold text-center text-blue-900`} >Page <span className='pageNum'>{pageNum}</span> </h2>
                
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
                    pages={pages}
                    numOfResults={numOfResults}
                    goToPage={goToPage}
                    setgoToPage={setgoToPage}
                    setJobPositionTop={setJobPositionTop}
                    />
                }
            </div>
            
        </main>
    )
}

export default JobList
