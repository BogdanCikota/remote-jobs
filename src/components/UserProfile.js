import { useSelector } from "react-redux";
import Job from "./jobList_components/Job";

function UserProfile() {
  const user = useSelector((state) => {
    // console.log(state.persistedReducer.user);
    return state.persistedReducer.user;
  });

  const jobsState = useSelector((store) => store["jobs"]);

  const { allJobs } = jobsState;

  const globalState = useSelector((store) => store["global"])

 const {openFilters} = globalState;

  return (
    <main className=" md:mt-16 grid mb-2 md:mx-auto md:w-2/3 items-start gap-4">
    
     <div
          className={`${
            openFilters ? `md:bg-opacity-30 bg-blue-400` : `bg-blue-300`
          } p-1 text-center text-white mb-4 md:rounded-b-full xl:p-1.5`}
        >
          Saved Jobs
        </div>
      
      <div className="jobs-container">
        {user && user.likedJobs.length > 0 ? 
          [...user.likedJobs].reverse().map((likedJobId) =>
            allJobs.map((job, index) => {
              
              return (
                likedJobId === job.id && (
                  <Job fromUserProfile={true} key={index} job={job} />
                )
              );
            })
          ) : <p className="font-serif italic text-center md:text-lg">Your job list is empty.</p>
        
        }
      </div>
      
      
    </main>
  );
}

export default UserProfile;
