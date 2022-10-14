import { useEffect } from "react";
import Job from "./jobList_components/Job";
import chunk from "lodash.chunk";
import Pagination from "./jobList_components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setChunkedPages } from "../redux/features/globalSlice";

function JobList() {
  const jobsState = useSelector((store) => store["jobs"]);
  const { jobs } = jobsState;
  const globalState = useSelector((store) => store["global"]);
  const { pages, openFilters, fromIndex, numOfResults, toIndex, pageNum } = globalState;
  const dispatch = useDispatch();

  useEffect(() => {
    //divide pages array into 100 chunks
    dispatch(setChunkedPages(chunk(pages, 100)));
  }, [pages, dispatch, toIndex]);

  return (
    <main
      className={` ${
        !openFilters && `md:mt-16`
      } grid mb-2 md:mx-auto md:w-2/3 items-start`}
    >
      <div className="text-center">
        <div
          className={`${
            openFilters ? `md:bg-opacity-30 bg-blue-400` : `bg-blue-500`
          } p-1 text-white mb-4 md:rounded-b-full md:bg-blue-300 xl:p-1.5`}
        >
          Found <span>{jobs.length} results</span>
        </div>
        <h2
          className={`${
            jobs.length < numOfResults ? `hidden` : `inline-block`
          } font-bold text-blue-900`}
        >
          Page <span className="pageNum">{pageNum}</span>{" "}
        </h2>
      </div>

      <div className="jobs-container">
        {jobs.map((job, index) => {
          return (
            index >= fromIndex &&
            index < toIndex && <Job key={index} job={job} />
          );
        })}
      </div>

      <div className="text-center self-end">
        <h2
          className={`${
            jobs.length < numOfResults ? `hidden` : `inline-block`
          } font-bold text-center text-blue-900`}
        >
          Page <span className="pageNum">{pageNum}</span>{" "}
        </h2>

        {jobs.length > numOfResults && (
          <Pagination />
        )}
      </div>
    </main>
  );
}

export default JobList;
