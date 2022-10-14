import { useEffect } from "react";
// import axios from "axios";
import JobList from "./components/JobList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobDescription from "./components/JobDescription";
import Loading from "./components/Loading";
import ZeroResults from "./components/ZeroResults";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getJobs, getCategories } from "./redux/features/jobs/jobsSlice";

function App() {
  const dispatch = useDispatch();
  const jobsState = useSelector((store) => store["jobs"]);
  const globalState = useSelector((store) => store["global"]);

  const { loading: isLoading, jobs } = jobsState;
  const { category, search, limit, jobPositionTop } = globalState;

  useEffect(() => {
    dispatch(getJobs({ limit, category, search }));
    dispatch(getCategories());
  }, [dispatch, limit, category, search]);

  return (
    <HashRouter basemname="/">
      <div className={`${!isLoading && `grid`} App`}>
        <Header />

        {isLoading ? (
          <Loading />
        ) : jobs.length === 0 ? (
          <ZeroResults />
        ) : (
          <Routes onClick={window.scrollTo(0, jobPositionTop)}>
            <Route exact path="/" element={<JobList />}></Route>

            <Route exact path="/JobDescription" element={<JobDescription />} />
          </Routes>
        )}

        <Footer isLoading={isLoading} />
      </div>
    </HashRouter>
  );
}

export default App;
