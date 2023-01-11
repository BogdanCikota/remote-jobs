import { useSelector } from "react-redux";
import Job from "./jobList_components/Job";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

function UserProfile() {
  const navigate = useNavigate();

  const user = useSelector((state: RootState | any) => {
    // console.log(state.persistedReducer.user);
    return state.persistedReducer.user;
  });

  const jobsState = useSelector((store: RootState) => store["jobs"]);

  const { allJobs } = jobsState;

  const globalState = useSelector((store: RootState) => store["global"]);

  const { openFilters } = globalState;

  return (
    <main className=" md:mt-16 grid mb-2 md:mx-auto md:w-2/3 items-start gap-4">
      <div
        className={`${
          openFilters ? `md:bg-opacity-30 bg-blue-400` : `bg-blue-300`
        } p-1 text-center text-white mb-4 md:rounded-b-full xl:p-1.5`}
      >
        Saved Jobs
      </div>

      <div className="mb-2">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          &larr; back to the main list
        </span>
      </div>

      <div className="jobs-container">
        {user && user.likedJobs.length > 0 ? (
          [...user.likedJobs].reverse().map((likedJobId: string) =>
            allJobs.map((job: any, index: number) => {
              return (
                likedJobId === job.id && (
                  <Job fromUserProfile={true} key={index} job={job} />
                )
              );
            })
          )
        ) : (
          <p className="font-serif italic text-center md:text-lg">
            Your job list is empty.
          </p>
        )}
      </div>
    </main>
  );
}

export default UserProfile;
