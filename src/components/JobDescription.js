import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const location = useLocation();
  const history = useNavigate();
  const [dateStr, setDateStr] = useState();
  const [jobDate, setJobDate] = useState();
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.persistedReducer.user;
  });

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
                )
          }
        });

        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (location.state.job === undefined) {
      history.push("/");
    } else {
      setDateStr(location.state.job.publication_date);
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
  }, [location.state.job, history, dateStr]);

  return (
    <div>
      {location.state.job !== undefined && (
        <div className="md:mt-16 xl:mt-16 m-auto max-w-5xl xl:p-4 text-gray-800">
          <Link
            to={location.state.fromUserPage ? "/user" : "/"}
            className="ml-2 underline font-semibold lg:text-lg"
          >
            {" "}
            &#8592; back
          </Link>

          <div className="xl:flex gap-2 px-4 xl:px-0 relative">
            <div className="w-20 my-4 h-20 xl:border xl:my-0 xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center">
              <img
                className="rounded-full xl:rounded-none"
                src={`https://remotive.io/job/${location.state.job.id}/logo`}
                alt={`logo ${location.state.job.company_name}`}
              />
            </div>

            <div className="font-semibold p-2 xl:grid gap-2">
              <h3>
                <span className="font-bold">
                  {location.state.job.company_name}
                </span>{" "}
              </h3>
              <h2>Job title: {location.state.job.title}</h2>
              <p>
                Category:{" "}
                <span className="font-normal">
                  {location.state.job.category}
                </span>{" "}
              </p>
              <div>
                <div className="inline">
                  {location.state.job.candidate_required_location === "" ? (
                    <span>/</span>
                  ) : (
                    <span className="font-normal">
                      {location.state.job.candidate_required_location}
                    </span>
                  )}{" "}
                </div>{" "}
                /
                <div className="inline">
                  {" "}
                  {location.state.job_type ? (
                    <span className="font-normal">
                      {location.state.job_type}
                    </span>
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
              {user &&
              user.likedJobs.find((job) => job === location.state.job.id) ? (
                <HeartRed
                  className="cursor-pointer"
                  onClick={() => {
                    removeLikedJob(location.state.job.id);
                  }}
                />
              ) : (
                <HeartWhite
                  className="cursor-pointer"
                  onClick={() => {
                    if (user) {
                      addLikedJob(location.state.job.id);
                    } else {
                      signInWithGoogle(location.state.job.id);
                    }
                  }}
                />
              )}
            </div>
          </div>

          <div
            className="border job-description py-3 px-5 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: location.state.job.description }}
          ></div>
          <Link
            to={location.state.fromUserPage ? "/user" : "/"}
            className="ml-2 underline font-semibold lg:text-lg"
          >
            {" "}
            &#8592; back
          </Link>
        </div>
      )}
    </div>
  );
}

export default JobDescription;
