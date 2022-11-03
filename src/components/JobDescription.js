import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as HeartRed } from "../assets/icons/heart-red.svg";
import { ReactComponent as HeartWhite } from "../assets/icons/heart-white.svg";
import swipe from "../assets/icons/swipe.png";
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
  const [dateStr, setDateStr] = useState();
  const [jobDate, setJobDate] = useState();
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.persistedReducer.user;
  });

  const jobsState = useSelector((store) => store["jobs"]);

  const { jobs, allJobs } = jobsState;

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
  }, [job, dateStr, navigate, allJobs, jobId, dispatch]);

  const handlePrev = () => {
    params.saved
      ? user.likedJobs.find(
          (foundId, index) =>
            foundId === job.id &&
            index + 1 <= jobs.length - 1 &&
            allJobs.find(
              (foundJob) =>
                foundJob.id === user.likedJobs[index + 1] &&
                navigate(
                  `/${params.saved ? "saved/" + foundJob.id : foundJob.id}`
                )
            )
        )
      : jobs.find(
          (foundJob, index) =>
            foundJob.id === job.id &&
            index - 1 >= 0 &&
            navigate(
              `/${
                params.saved
                  ? "saved/" + jobs[index - 1].id
                  : jobs[index - 1].id
              }`
            )
        );
  };

  const handleNext = () => {
    params.saved
      ? user.likedJobs.find(
          (foundId, index) =>
            foundId === job.id &&
            index - 1 >= 0 &&
            allJobs.find(
              (foundJob) =>
                foundJob.id === user.likedJobs[index - 1] &&
                navigate(
                  `/${params.saved ? "saved/" + foundJob.id : foundJob.id}`
                )
            )
        )
      : jobs.find(
          (foundJob, index) =>
            foundJob.id === job.id &&
            index + 1 <= jobs.length - 1 &&
            navigate(
              `/${
                params.saved
                  ? "saved/" + jobs[index + 1].id
                  : jobs[index + 1].id
              }`
            )
        );
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        // console.log("swipe left");
        handleNext();
        // navigate(`/123456`)
        // console.log(job.id);
      } else {
        // console.log("swipe right");
        handlePrev();
      }
    }
    // add your conditional logic here
  };

  return (
    <div>
      {job !== null && (
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="md:mt-16 m-auto max-w-6xl md:p-4 md:px-20 lg:px-40 text-gray-800 relative"
        >
          <img src={swipe} alt="swipe icon" className="md:hidden fade-out w-40 absolute ml-auto mr-auto left-0 right-0 top-20" />
          <div
            onClick={handlePrev}
            className="hidden md:grid z-10 cursor-pointer text-2xl absolute left-0 w-24  h-screen justify-center items-center"
          >
            <span className="relative bottom-14">&#8810;</span>
          </div>

          <div
            onClick={handleNext}
            className="hidden md:grid z-10 cursor-pointer text-2xl absolute right-0 w-24  h-screen justify-end justify-center  items-center"
          >
            <span className="relative bottom-14">&#8811;</span>
          </div>

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
