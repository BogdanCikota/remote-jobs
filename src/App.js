import {useEffect, useState} from "react";
import axios from "axios";
import Job from "./components/Job";

function App() {
    const [jobs,
        setJobs] = useState([]);
    const [isLoading,
        setIsLoading] = useState(true);

    const [fromIndex, setfromIndex] =useState(-1);
    const [toIndex, settoIndex]  = useState(10);

    const [pages, setPages] = useState([]);

  

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

    return (
        <div className="App">
            <header className="App-header">
                <h1 className='text-2xl text-center'>Remote Jobs</h1>
            </header>
            
            {isLoading
                ? <h2>Loading...</h2>
                : <div>                    
                    <ul>
                        {jobs.map((job, index) => {
                            return index > fromIndex && index < toIndex && <Job key={index} job={job}/>
                        })}
                    </ul>
                    <hr/>
                    {fromIndex === -1 ? <button disabled>prev 10</button> : 
                    <button onClick={()=>{
                        setfromIndex(fromIndex-10);
                        settoIndex(toIndex-10);
                    }}>prev 10</button>}

                    <hr/>
   

                    {
                        pages.map((page, index) => <button className='inline-block' key={index} onClick={()=>{
                            setfromIndex(page*10-1);
                            settoIndex(page*10+10);
                        }}>{page+1},</button> )
                    }
                    
                    <hr/>
                    {toIndex > jobs.length-1 ? <button disabled>next 10</button> :
                     <button onClick={()=>{
                        setfromIndex(fromIndex+10);
                        settoIndex(toIndex+10);
                    }}>next 10</button>}
                    
                </div>}
        </div>
    );
}

export default App;
