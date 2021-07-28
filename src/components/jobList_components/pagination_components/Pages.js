import { useEffect, useState } from "react";

function Pages({setJobPositionTop, pages, lastChunk, chunkIndex, numOfResults, chunk, setPageNum, setfromIndex, settoIndex}) {
    const [lastNumInChunk, setLastNumInChunk] = useState(0);

    useEffect(() => {
        setLastNumInChunk(chunk.filter((num, index) => chunk.length-1 === index))
    }, [chunk])
    return (
        <select className='block m-auto border rounded-md' onChange={(e)=>{
            let num = e.target.value;
            setPageNum(+num + +1);
            setfromIndex(num * numOfResults);
            settoIndex(+num * numOfResults + +numOfResults);
            e.target.selectedIndex = 0;
            setJobPositionTop(0);
        }}>
            {
                pages && pages.length > 100 ?
                <option>{`${(chunkIndex+1)*100-100+1}...${lastChunk === chunkIndex ? +lastNumInChunk + +1 : (chunkIndex+1)*100}`}</option> :
                <option>{`1...${+lastNumInChunk + +1}`}</option>
            }
            {
                chunk.map((num, index) => <option key={index} value={num}>{num+1}</option> )
            }
        </select>
    )
}

export default Pages
