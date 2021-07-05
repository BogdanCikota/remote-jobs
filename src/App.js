import {useEffect, useState} from "react";
import axios from "axios";
import JobList from "./components/JobList";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import JobDescription from "./components/JobDescription";
import Loading from "./components/Loading";


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
    const [fromIndex, setfromIndex] =useState(0);
    const numOfResults = 7;
    const [toIndex, settoIndex]  = useState(numOfResults);
    const [chunkedPages, setChunkedPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    

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

                for (let i = 0; i < response.data.jobs.length / numOfResults; i++) {
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

        <HashRouter basemname='/'>
            <div className="max-w-sm m-auto">
                <Header openFilters={openFilters} setOpenFilters={setOpenFilters} />
                
                <Filters 
                setLimit={setLimit} 
                setCategory={setCategory} 
                setSearch={setSearch}
                inputSearch={inputSearch}
                setIsLoading={setIsLoading}
                setInputSearch={setInputSearch}
                categories={categories}
                setfromIndex={setfromIndex}
                settoIndex={settoIndex}
                setPageNum={setPageNum}
                numOfResults={numOfResults}
                />
                
                {isLoading
                    ? <Loading/>:

                        <Switch>
                            <Route exact path="/">
                                <JobList 
                                jobs={jobs} 
                                pages={pages} 
                                pagesCounter={pagesCounter} 
                                fromIndex={fromIndex} 
                                setfromIndex={setfromIndex}
                                toIndex={toIndex} 
                                settoIndex={settoIndex}
                                chunkedPages={chunkedPages} 
                                setChunkedPages={setChunkedPages}
                                pageNum={pageNum} 
                                setPageNum={setPageNum}
                                numOfResults={numOfResults}
                                /> 
                            </Route>

                            <Route exact path="/JobDescription" component={JobDescription} />
                        </Switch>
                    
                    }

                    <hr />
                    <Footer />
            </div>
        </HashRouter>
   
    );
}

export default App;
