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
        <div >

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
                {pagesCounter > 100 && !goToPage && <button onClick={()=> setgoToPage(!goToPage)} className='rounded-lg px-1  bg-blue-500 text-white'>go to page...</button>}
            { 
                
                goToPage && pagesCounter > 100 && 
                <div className='flex gap-2'>
                    {/* from-to buttons */}
                    <button className='rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromOne(prev=>!prev);
                        setfromHundred(false);
                        setfromTwoHundred(false)
                    }}>1...100</button>
                    {pagesCounter > 100 && <button className='rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromHundred(prev=>!prev);
                        setfromOne(false);
                    }}>100...200</button>}
                    {pagesCounter > 200 &&<button className='rounded-lg px-1  bg-blue-500 text-white' onClick={()=>{
                        setfromTwoHundred(prev=>!prev)
                        setfromOne(false);
                        setfromHundred(false)
                    }}>200...</button>}

                </div>
                
            }

            {pagesCounter < 100 && <button onClick={()=> setgoToPage(!goToPage)} className='rounded-lg px-1  bg-blue-500 text-white'>go to page...</button>}

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
                // render pages buttons
                goToPage && pagesCounter < 100 &&
                chunkedPages.map((chunk, index) => 
                <Pages  
                key={index} 
                chunk={chunk} 
                setPageNum={setPageNum} 
                setfromIndex={setfromIndex} 
                settoIndex={settoIndex}
                numOfResults={numOfResults}
                goToTop={goToTop}
                /> )
            }

            <hr />

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
