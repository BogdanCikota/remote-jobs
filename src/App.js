import {useEffect, useState} from "react";
import axios from "axios";
import JobList from "./components/JobList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes  } from "react-router-dom";
import JobDescription from "./components/JobDescription";
import Loading from "./components/Loading";
import ZeroResults from "./components/ZeroResults";


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
    const [numOfResults, setNumOfResults] = useState(10);
    const [toIndex, settoIndex]  = useState(numOfResults);
    const [chunkedPages, setChunkedPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [goToPage, setgoToPage] = useState(false);
    const [hasData, setHasData] = useState(true);
    const [jobPositionTop, setJobPositionTop] = useState(0);
    

    const getCategories = async() => {
        try {
            const response = await axios.get('https://remotive.io/api/remote-jobs/categories');
            console.log(response.data.jobs);
            setCategories(response.data.jobs);

        } catch (error) {
            console.error(error);
            setHasData(false);
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
                setHasData(false);
            }
        };
        getJobs();
        getCategories();
    }, [limit, category, search, numOfResults]);

    

    return (

        <HashRouter basemname='/'>
            <div className={`${!isLoading && `grid` } App`}>
                <Header 
                openFilters={openFilters} 
                setOpenFilters={setOpenFilters}
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
                setNumOfResults={setNumOfResults}
                setgoToPage={setgoToPage}
                setJobPositionTop={setJobPositionTop}
                />
                
                
                
                {isLoading ? <Loading hasData={hasData} />:
                    
                    jobs.length === 0 ? <ZeroResults/> :
                        <Routes  
                        onClick={window.scrollTo(0, jobPositionTop)}
                        >
                            <Route exact path="/" element={
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
                                goToPage={goToPage}
                                setgoToPage={setgoToPage}
                                openFilters={openFilters}
                                setJobPositionTop={setJobPositionTop}
                                />
                            }> 
                            </Route>

                            <Route exact path="/JobDescription" element={<JobDescription />} />
                        </Routes >
                    
                    }

                    <Footer isLoading={isLoading} />
            </div>
        </HashRouter>
   
    );
}

export default App;
