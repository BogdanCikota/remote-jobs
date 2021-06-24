import {useEffect, useState} from "react";
import axios from "axios";
import JobList from "./components/JobList";

function App() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagesCounter, setpagesCounter] = useState(0);
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

            setpagesCounter(pagesArr.length);

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
                : <JobList jobs={jobs} pages={pages} pagesCounter={pagesCounter} /> }

        </div>
    );
}

export default App;
