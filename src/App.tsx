import { useEffect } from "react";
// import axios from "axios";
import JobList from "./components/JobList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import JobDescription from "./components/JobDescription";
import Loading from "./components/Loading";
import ZeroResults from "./components/ZeroResults";
import AuthRoute from "./firebase/AuthRoute";

//redux
import { useSelector } from "react-redux";
import {
  getJobs,
  getCategories,
  getAllJobs,
} from "./redux/features/jobs/jobsSlice";
import UserProfile from "./components/UserProfile";
import { RootState, useAppDispatch } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  const jobsState = useSelector((store: RootState) => store["jobs"]);
  const globalState = useSelector((store: RootState) => store["global"]);

  const { loading: isLoading = false, jobs = [] } = jobsState;
  const { category, search, limit, jobPositionTop, openFilters } = globalState;

  useEffect(() => {
    dispatch(getJobs({ limit, category, search }));
    dispatch(getCategories());
    dispatch(getAllJobs());
  }, [dispatch, limit, category, search]);

  return (
    <HashRouter basename="/">
      <div className={`${!isLoading && `grid`} App`}>
        <Header />

        {isLoading ? (
          <Loading />
        ) : jobs.length === 0 ? (
          <ZeroResults />
        ) : (
          <Routes >
            <Route path="/" element={!openFilters && <JobList onClick={window.scrollTo(0, jobPositionTop)}/>}></Route>
            <Route
              path="/user"
              element={
                <AuthRoute>
                  <UserProfile />
                </AuthRoute>
              }
            />

            <Route path="/:saved/:jobId" element={<JobDescription />} />

            <Route path=":jobId" element={<JobDescription />} />
          </Routes>
        )}

        {!openFilters && <Footer isLoading={isLoading} />}
      </div>
    </HashRouter>
  );
}

export default App;
