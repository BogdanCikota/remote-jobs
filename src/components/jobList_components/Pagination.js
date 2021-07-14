import { useState } from "react";
import Pages from "./pagination_components/Pages";
import PrevButton from "./pagination_components/PrevButton";
import NextButton from "./pagination_components/NextButton";

function Pagination({goToPage, setgoToPage, numOfResults, jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pagesCounter, chunkedPages }) {
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);

    const pageNumElement = document.querySelector('.pageNum');

    const goToTop = () => {
        window.scroll(0,0);
    }

    return (
        <div className='grid gap-2 m-auto my-4'>

            <div className='flex gap-3 justify-center mb-1.5'>
                <PrevButton 
                setPageNum={setPageNum}
                fromIndex={fromIndex} 
                setfromIndex={setfromIndex}
                toIndex={toIndex}
                settoIndex={settoIndex}
                pageNumElement={pageNumElement}
                numOfResults={numOfResults}
                goToTop={goToTop}
                />
                {pagesCounter > 100 && !goToPage && <button onClick={()=> setgoToPage(!goToPage)} className='rounded-lg px-1  bg-blue-500 xl:bg-blue-400 text-white'>Go to page...</button>}
            { 
                
                goToPage && pagesCounter > 100 && 
                <div className='flex gap-3'>
                    {/* from-to buttons */}
                    <button className={`${fromOne ? 'bg-blue-600 xl:bg-blue-500' : 'bg-blue-500 xl:bg-blue-400'}  rounded-lg px-1 text-white`} onClick={()=>{
                        setfromOne(prev=>!prev);
                        setfromHundred(false);
                        setfromTwoHundred(false)
                    }}>1...100</button>
                    {pagesCounter > 100 &&
                     <button className={`${fromHundred ? 'bg-blue-600 xl:bg-blue-500' : 'bg-blue-500 xl:bg-blue-400'}  rounded-lg px-1 bg-blue-500 xl:bg-blue-400 text-white`} onClick={()=>{
                        setfromHundred(prev=>!prev);
                        setfromOne(false);
                        setfromTwoHundred(false)
                    }}>100...200</button>}
                    {pagesCounter > 200
                     &&<button className={`${fromTwoHundred ? 'bg-blue-600 xl:bg-blue-500' : 'bg-blue-500 xl:bg-blue-400'}  rounded-lg px-1 bg-blue-500 xl:bg-blue-400 text-white`} onClick={()=>{
                        setfromTwoHundred(prev=>!prev)
                        setfromOne(false);
                        setfromHundred(false)
                    }}>200...</button>}

                </div>
                
            }

            {
               chunkedPages.length > 0 &&  pagesCounter < 100 && 
                <Pages
                chunk={chunkedPages[0]}
                setPageNum={setPageNum} 
                setfromIndex={setfromIndex} 
                settoIndex={settoIndex}
                numOfResults={numOfResults}
                goToTop={goToTop}
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
                goToTop={goToTop}
                jobs={jobs}
                />
            </div>


            {
                // render pages buttons when clicked from-to button
                fromOne ? chunkedPages.map((chunk, index)=> index === 0 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} goToTop={goToTop}/> ) :
                fromHundred ? chunkedPages.map((chunk, index)=> index === 1 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} goToTop={goToTop}/> ) :
                fromTwoHundred && chunkedPages.map((chunk, index)=> index === 2 && <Pages key={index} chunk={chunk} setPageNum={setPageNum} setfromIndex={setfromIndex} settoIndex={settoIndex} numOfResults={numOfResults} goToTop={goToTop}/>)
            }

            
           
        </div>
    )
}

export default Pagination
