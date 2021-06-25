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
   const [inputSearch, setInputSearch] = useState('');
   const [search, setSearch] = useState('');


    const getJobs = async() => {
        try {
            const response = await axios.get(`https://remotive.io/api/remote-jobs?limit=${limit}&category=${category}&search=${search}`);
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
    }, [limit, category, search]);

    

    return (
        <div className="App">
            <header className="App-header">
                <h1 className='text-2xl'>Remote Jobs</h1>
            </header>

            

            
            
            <select onChange={(e)=>{
                setCategory(e.target.value);
                setIsLoading(true);
            }}>
                <option>Choose a job category</option>
                {categories.map( (category, index) => <option key={index} value={category.slug} >{category.name}</option> )}
            </select>

            

            <form onSubmit={e => {
                e.preventDefault();
                inputSearch !== '' && setSearch(inputSearch) && setIsLoading(true);
            }}>
            <label htmlFor="search">Search job listing title and description</label>
            <input className='border' type="search" id="search"  onChange={ e => {
                setInputSearch((e.target.value));
            }} />
            <button type="submit">Go!</button>
            </form>

           

            <label htmlFor="limit">Limit the number of job listing result</label>
            <input className='border' type="number"id="limit" min="1" onChange={ e => {
                setLimit(e.target.value);
                setIsLoading(true);
            }} />
          
            {isLoading
                ? <h2>Loading...</h2>
                : <JobList jobs={jobs} pages={pages} pagesCounter={pagesCounter} /> }

                <hr />
            <footer>API Source: <a href="https://remotive.io/" target="_blank">https://remotive.io/api-documentation</a></footer>
        </div>
    );
}

export default App;
