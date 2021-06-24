import {useEffect, useState} from "react";
import axios from "axios";
import Job from "./components/Job";
import chunk from 'lodash.chunk';

function App() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fromIndex, setfromIndex] =useState(-1);
    const [toIndex, settoIndex]  = useState(10);
    const [pages, setPages] = useState([]);
    const [chunkedPages, setChunkedPages] = useState([]);
    const [fromOne, setfromOne] = useState(false);
    const [fromHundred, setfromHundred] = useState(false);
    const [fromTwoHundred, setfromTwoHundred] = useState(false);
    const [pageNum, setPageNum] = useState(1);


    const getJobs = async() => {
        try {
            const response = await axios.get('https://remotive.io/api/remote-jobs');
            console.log(response.data.jobs);
            setJobs(response.data.jobs);
            setIsLoading(false);

            let pagesArr = []

            for (let i = 0; i < response.data.jobs.length / 10; i++) {
                pagesArr.push(i);
            }

            setPages(pagesArr);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        setChunkedPages(chunk(pages, 100));
    }, [pages]);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className='text-2xl text-center'>Remote Jobs</h1>
            </header>
            
            {isLoading
                ? <h2>Loading...</h2>
                : <div>
                    <h2 >Page <span className='pageNum'>{pageNum}</span> </h2>                    
                    <ul>
                        {jobs.map((job, index) => {
                            return index > fromIndex && index < toIndex && <Job key={index} job={job}/>
                        })}
                    </ul>
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

                    <div>
                        <h2>pages</h2>
                        <button onClick={()=>{
                            setfromOne(prev=>!prev);
                            setfromHundred(false);
                            setfromTwoHundred(false)
                        }}>1...100,</button>
                        <button onClick={()=>{
                            setfromHundred(prev=>!prev);
                            setfromOne(false);
                        }}>100...200,</button>
                        <button onClick={()=>{
                            setfromTwoHundred(prev=>!prev)
                            setfromOne(false);
                            setfromHundred(false)
                        }}>200...</button>
                    </div>

                    <hr />

                    {
                       fromOne ?  chunkedPages.map((chunk, index)=> index === 0 && <div className='inline-block' key={index}>{chunk.map((page, index) => {
                        return <button className='inline-block' key={index} onClick={()=>{
                                setPageNum(page+1);
                               setfromIndex(page*10-1);
                               settoIndex(page*10+10);
                           }}>{page+1},</button>
                       } )},</div> ) :
                        fromHundred ? chunkedPages.map((chunk, index)=> index === 1 && <div className='inline-block' key={index}>{chunk.map((page, index) => {
                            return <button className='inline-block' key={index} onClick={()=>{
                                setPageNum(page+1);
                                   setfromIndex(page*10-1);
                                   settoIndex(page*10+10);
                               }}>{page+1},</button>
                           } )},</div> ) :
                        fromTwoHundred && chunkedPages.map((chunk, index)=> index === 2 && <div className='inline-block' key={index}>{chunk.map((page, index) => {
                            return <button className='inline-block' key={index} onClick={()=>{
                                setPageNum(page+1);
                                   setfromIndex(page*10-1);
                                   settoIndex(page*10+10);
                               }}>{page+1},</button>
                           } )},</div> )
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
                    
                </div>}

        </div>
    );
}

export default App;
