import {useEffect, useState} from "react";
import axios from "axios";
import Job from "./components/Job";

function App() {
    const [jobs,
        setJobs] = useState([]);
    const [isLoading,
        setIsLoading] = useState(true);

    const [firstIndex, setFirstIndex] =useState(-1);
    const [lastIndex, setLastIndex]  = useState(10);
  

    const getJobs = async() => {
        try {
            const response = await axios.get('https://remotive.io/api/remote-jobs');
            console.log(response.data.jobs);
            setJobs(response.data.jobs);
            setIsLoading(false);
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
                <h1 className='text-2xl text-center'>Job Listing App</h1>
            </header>
            {isLoading
                ? <h2>Loading...</h2>
                : <div>
                    { <h2>First 10 results</h2>}
                    <hr/>
                    <ul>
                        {jobs.map((job, index) => {
                            return index > firstIndex && index < lastIndex && <Job key={index} job={job}/>
                        })}
                    </ul>
                    <hr/>
                    {firstIndex === -1 ? <button disabled>prev 10</button> : 
                    <button onClick={()=>{
                        setFirstIndex(firstIndex-10);
                        setLastIndex(lastIndex-10);
                    }}>prev 10</button>}
                    
                    <hr/>
                    {lastIndex > jobs.length-1 ? <button disabled>next 10</button> :
                     <button onClick={()=>{
                        setFirstIndex(firstIndex+10);
                        setLastIndex(lastIndex+10);
                    }}>next 10</button>}
                    
                </div>}
        </div>
    );
}

export default App;
