import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [jobs,
        setJobs] = useState([]);
    const [isLoading,
        setIsLoading] = useState(true);

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
                : <ul>
                    {jobs.map((job, index) => <li key={index}>{job.company_name}</li>)}
                </ul>}
        </div>
    );
}

export default App;
