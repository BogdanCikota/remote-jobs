import {useEffect, useState} from "react";
import axios from "axios";
import JobList from "./components/JobList";
import Filters from "./components/Filters";

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
   const [openFilters, setOpenFilters] = useState(false);


   


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
        getJobs();
        getCategories();
    }, [limit, category, search]);

    

    return (
        <div className="App">
            <header className="App-header">
                <h1 className='text-2xl text-center'>Remote Jobs</h1>
            </header>

            <button className='m-auto block' onClick={()=> setOpenFilters(openFilters => !openFilters)}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>

            {
                openFilters && 
                <Filters 
                setLimit={setLimit} 
                setCategory={setCategory} 
                setSearch={setSearch}
                inputSearch={inputSearch}
                setIsLoading={setIsLoading}
                setInputSearch={setInputSearch}
                categories={categories}
                />
            }
            
          
            {isLoading
                ? <h2>Loading...</h2>
                : <JobList jobs={jobs} pages={pages} pagesCounter={pagesCounter} /> }

                <hr />
            <footer>API Source: <a href="https://remotive.io/" rel="noreferrer" target="_blank">https://remotive.io/api-documentation</a></footer>
        </div>
    );
}

export default App;
