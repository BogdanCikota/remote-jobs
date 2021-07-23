import Pages from "./pagination_components/Pages";
import PrevButton from "./pagination_components/PrevButton";
import NextButton from "./pagination_components/NextButton";

function Pagination({setJobPositionTop, goToPage, setgoToPage, numOfResults, jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pages, chunkedPages }) {

    const pageNumElement = document.querySelector('.pageNum');

    

    return (
            <div className='m-auto my-4 flex gap-6 justify-center mb-1.5 items-center'>
                <PrevButton 
                setPageNum={setPageNum}
                fromIndex={fromIndex} 
                setfromIndex={setfromIndex}
                toIndex={toIndex}
                settoIndex={settoIndex}
                pageNumElement={pageNumElement}
                numOfResults={numOfResults}
                setJobPositionTop={setJobPositionTop}
                />
                {pages && pages.length > 100 && !goToPage && <button onClick={(e)=> {
                     setgoToPage(!goToPage);
                     setJobPositionTop(e.target.offsetTop);
                    }} className='rounded-lg px-1  bg-blue-500 xl:bg-blue-400 text-white'>Go to page...</button>}

            { 
                // generate from/to select
                goToPage && pages.length > 100 && 
                <div className='grid gap-3 sm:flex'>
                    {
                        chunkedPages.map((chunk, index) => {
                            return <Pages
                                    key={index}
                                    pages={pages}
                                    lastChunk={chunkedPages.length-1}
                                    chunkIndex={index}
                                    chunk={chunk}
                                    setPageNum={setPageNum}
                                    setfromIndex={setfromIndex}
                                    settoIndex={settoIndex}
                                    numOfResults={numOfResults}
                                    setJobPositionTop={setJobPositionTop}
                                    />
                        })
                    }
                </div>
            }

            {
               chunkedPages.length > 0 &&  pages.length < 100 && 
                <Pages
                chunk={chunkedPages[0]}
                setPageNum={setPageNum} 
                setfromIndex={setfromIndex} 
                settoIndex={settoIndex}
                numOfResults={numOfResults}
                setJobPositionTop={setJobPositionTop}
                /> 
            }

                <NextButton
                setPageNum={setPageNum}
                fromIndex={fromIndex} 
                setfromIndex={setfromIndex}
                toIndex={toIndex}
                settoIndex={settoIndex}
                pageNumElement={pageNumElement}
                numOfResults={numOfResults}
                jobs={jobs}
                setJobPositionTop={setJobPositionTop}
                />
            </div>
    )
}

export default Pagination
