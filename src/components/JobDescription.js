import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as HeartRed } from "../assets/icons/heart-red.svg";
import { ReactComponent as HeartWhite } from "../assets/icons/heart-white.svg";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { config } from "../firebase/firebaseConfig";

import { login } from "../redux/features/user/userSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function JobDescription() {
  const params = useParams();
  const jobId = params.jobId;

  const [job, setJob] = useState(null);

  const history = useNavigate();
  const [dateStr, setDateStr] = useState();
  const [jobDate, setJobDate] = useState();
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.persistedReducer.user;
  });

  const jobsState = useSelector((store) => store["jobs"]);

  const { allJobs } = jobsState;

  const app = initializeApp(config.firebaseConfig);

  const db = getFirestore(app);

  const addLikedJob = (id) => {
    user.likedJobs.find((jobId) => jobId === id)
      ? console.log("job with that id already exist")
      : setDoc(doc(db, "users", user.uid), {
          likedJobs: [...user.likedJobs, id],
        }).then(
          dispatch(
            login({
              ...user,
              likedJobs: [...user.likedJobs, id],
            })
          )
        );
  };

  const removeLikedJob = (id) => {
    let updatedArr = user.likedJobs.filter((job) => job !== id);

    updateDoc(doc(db, "users", user.uid), {
      likedJobs: updatedArr,
    }).then(
      dispatch(
        login({
          ...user,
          likedJobs: updatedArr,
        })
      )
    );
    navigate("/user");
  };

  const signInWithGoogle = async (id) => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        // console.log(response.user);

        const docRef = doc(db, "users", response.user.uid);

        getDoc(docRef).then((snapshot) => {
          // console.log(snapshot.data());
          if (snapshot.data() === undefined) {
            setDoc(doc(db, "users", response.user.uid), {
              likedJobs: [id],
            }).then(
              dispatch(
                login({
                  uid: response.user.uid,
                  name: response.user.displayName,
                  likedJobs: [id],
                })
              )
            );
          } else {
            console.log("user with that id already exists");
            snapshot.data().likedJobs.find((jobId) => jobId === id)
              ? dispatch(
                  login({
                    uid: response.user.uid,
                    name: response.user.displayName,
                    likedJobs: snapshot.data().likedJobs,
                  })
                )
              : setDoc(doc(db, "users", response.user.uid), {
                  likedJobs: [...snapshot.data().likedJobs, id],
                }).then(
                  dispatch(
                    login({
                      uid: response.user.uid,
                      name: response.user.displayName,
                      likedJobs: [...snapshot.data().likedJobs, id],
                    })
                  )
                );
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allJobs.find(
      (foundJob) => foundJob.id === Number(jobId) && setJob(foundJob)
    );
    if (job !== null) {
      setDateStr(job.publication_date);
      let date = new Date(dateStr + "Z");
      setJobDate(date.toUTCString().slice(5, 16));

      window.scroll(0, 0);
      let jobDescription = document.querySelector(".job-description");
      for (let i = 0; i < jobDescription.children.length; i++) {
        if (
          jobDescription.children[i].innerHTML === "&nbsp;" ||
          jobDescription.children[i].innerHTML === "" ||
          jobDescription.children[i].innerHTML === "<br><br>" ||
          jobDescription.children[i].innerHTML === "<br>"
        ) {
          jobDescription.children[i].classList.add("hidden");
        }
      }
    }
  }, [job, history, dateStr, navigate, allJobs, jobId, dispatch]);

  return (
    <div>
      {job !== null && (
        <div className="md:mt-16 xl:mt-16 m-auto max-w-5xl xl:p-4 text-gray-800">

          <div className="xl:flex gap-2 px-4 xl:px-0 relative">
            <div className="w-20 my-4 h-20 xl:border xl:my-0 xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center">
              <img
                className="rounded-full xl:rounded-none"
                src={`https://remotive.io/job/${job.id}/logo`}
                alt={`logo ${job.company_name}`}
              />
            </div>

            <div className="font-semibold p-2 xl:grid gap-2">
              <h3>
                <span className="font-bold">{job.company_name}</span>{" "}
              </h3>
              <h2>Job title: {job.title}</h2>
              <p>
                Category: <span className="font-normal">{job.category}</span>{" "}
              </p>
              <div>
                <div className="inline">
                  {job.candidate_required_location === "" ? (
                    <span>/</span>
                  ) : (
                    <span className="font-normal">
                      {job.candidate_required_location}
                    </span>
                  )}{" "}
                </div>{" "}
                /
                <div className="inline">
                  {" "}
                  {job.job_type ? (
                    <span className="font-normal">{job.job_type}</span>
                  ) : (
                    <span>/</span>
                  )}{" "}
                </div>
              </div>
              <div>
                Published: <span className="font-normal">{jobDate}</span>{" "}
              </div>
            </div>
            <div className="HeartRed flex-1 grid justify-end z-0 absolute top-7 right-12 md:top-4 ">
              {user && user.likedJobs.find((likedJob) => likedJob === job.id)
                ? job !== null && (
                    <HeartRed
                      className="cursor-pointer"
                      onClick={() => {
                        removeLikedJob(job.id);
                      }}
                    />
                  )
                : job !== null && (
                    <HeartWhite
                      className="cursor-pointer"
                      onClick={() => {
                        if (user) {
                          addLikedJob(job.id);
                        } else {
                          signInWithGoogle(job.id);
                        }
                      }}
                    />
                  )}
            </div>
          </div>

          <div
            className="border job-description py-3 px-5 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default JobDescription;
