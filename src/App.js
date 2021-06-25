import {useEffect, useState} from "react";
import axios from "axios";
import JobList from "./components/JobList";

function App() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagesCounter, setpagesCounter] = useState(0);
    const [pages, setPages] = useState([]);
    const [limit, setLimit] = useState('all');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    const getJobs = async() => {
        try {
            const response = await axios.get(`https://remotive.io/api/remote-jobs?limit=${limit}&category=${category}`);
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


    const getCategories = async() => {
        try {
            const response = await axios.get('https://remotive.io/api/remote-jobs/categories');
            console.log(response.data.jobs);
            setCategories(response.data.jobs);

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getJobs();
        getCategories();
    }, [limit, category]);

    

    return (
        <div className="App">
            <header className="App-header">
                <h1 className='text-2xl'>Remote Jobs</h1>
            </header>

            <label htmlFor="limit">Limit the number of job listing result</label>
            <br />
            <input className='border' type="number" name="" id="limit" min="1" onChange={ e => {
                setLimit(e.target.value);
                setIsLoading(true);
            }} />

            <br />
            
            <select onChange={(e)=>{
                setCategory(e.target.value);
                setIsLoading(true);
            }}>
                <option>Choose a job category</option>
                {categories.map( (category, index) => <option key={index} value={category.slug} >{category.name}</option> )}
            </select>
          
            {isLoading
                ? <h2>Loading...</h2>
                : <JobList jobs={jobs} pages={pages} pagesCounter={pagesCounter} /> }

        </div>
    );
}

export default App;
