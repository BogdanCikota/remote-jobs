import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Job from "./jobList_components/Job";

function UserProfile() {
  const user = useSelector((state) => {
    // console.log(state.persistedReducer.user);
    return state.persistedReducer.user;
  });

  const jobsState = useSelector((store) => store["jobs"]);

  const { allJobs } = jobsState;

 

  return (
    <main class=" md:mt-20 grid mb-2 md:mx-auto md:w-2/3 items-start gap-4">
      <Link to="/" className="underline font-semibold lg:text-lg">
        &#8592; back
      </Link>
      
      <div className="jobs-container">
        {user &&
          [...user.likedJobs].reverse().map((likedJob) =>
            allJobs.map((job, index) => {
              
              return (
                likedJob === job.id && (
                  <Job fromUserPage={true} key={index} job={job} />
                )
              );
            })
          )}
      </div>
      
      
    </main>
  );
}

export default UserProfile;
