import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/features/user/userSlice";

//firebase
import { initializeApp } from "firebase/app";
import { getDoc, getFirestore } from "firebase/firestore";
import { config } from "../firebase/firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import Filters from "./header_components/Filters";
import {
  setOpenFilters,
  setJobPositionTop,
} from "../redux/features/globalSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const app = initializeApp(config.firebaseConfig);

const db = getFirestore(app);

function Header() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store["global"]);
  const { openFilters } = globalState;
  const userState = useSelector((store) => store["persistedReducer"].user);
  const [isActive, setActive] = useState(false);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        // console.log(response.user);

        const docRef = doc(db, "users", response.user.uid);

        getDoc(docRef).then((snapshot) => {
          // console.log(snapshot.data());
          if (snapshot.data() === undefined) {
            setDoc(doc(db, "users", response.user.uid), {
              likedJobs: [],
            }).then(
              dispatch(
                login({
                  uid: response.user.uid,
                  name: response.user.displayName,
                  likedJobs: [],
                })
              )
            );
          } else {
            console.log("user with that id already exists");
            dispatch(
              login({
                uid: response.user.uid,
                name: response.user.displayName,
                likedJobs: [...snapshot.data().likedJobs],
              })
            );
          }
        });

        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutUser = async () => {
    await signOut(auth).then(() => {
      dispatch(logout());
    });
    setActive(false);
  };

  return (
    <header
      className={`${
        !openFilters ? `pb-3` : `md:pb-4 md:bg-opacity-60 h-screen`
      } bg-blue-400 grid auto-rows-min grid-cols-4 md:grid-cols-8 md:fixed z-10 w-full left-0 top-0 md:px-7  md:gap-3`}
    >
      <h1
        className="col-span-2 m-3 mb-2  text-white text-2xl cursor-pointer self-start"
        onClick={() => window.location.replace("/")}
      >
        Remote Jobs
      </h1>
      <div
        className={`${
          openFilters ? `` : `mt-4`
        } nav  col-span-2 col-start-3 justify-self-end  md:col-start-7 `}
      >
        <button
          className={`${
            openFilters ? `bg-opacity-0 mr-6 md:self-start md:mt-2` : ``
          } tracking-wide xl:mr-3 cursor-pointer  px-2 py-1   text-white  md:px-3`}
          onClick={() => {
            dispatch(setJobPositionTop(0));
            dispatch(setOpenFilters(openFilters));
          }}
        >
          {" "}
          {openFilters ? (
            <span className="text-xl md:text-2xl">x</span>
          ) : (
            <span>Filters</span>
          )}
        </button>

        {!userState ? (
          <div
            onClick={signInWithGoogle}
            className={`${
              openFilters ? `hidden` : `inline`
            } tracking-wide mr-2 lg:mr-3 cursor-pointer   px-2 pb-1 pt-0.5 text-white `}
          >
            Login
          </div>
        ) : (
          !openFilters && <div onClick={()=> {
            if(isActive) {
              setActive(false)
            } else {
              setActive(true)
            }
          }} onMouseLeave={() => setActive(false)} className="dropdown relative  tracking-wide cursor-pointer  text-white mr-3  px-2 py-1  md:px-3` ">
            My Profile <span className="relative bottom-0.5">&#8964;</span>
            <ul className={`${isActive ? 'block' : 'hidden'}  dropdown-content absolute max-w-max pt-5 text-white bg-blue-400 text-black`}>
              <li>
                <Link className="" to={"/user"}>
                  My job list
                </Link>
              </li>
              <li>
                <button className="" onClick={signOutUser}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        className={`${
          openFilters
            ? `col-span-full md:col-start-2 md:col-end-7  xl:col-start-3 xl:col-end-7 xl:row-start-1`
            : `hidden`
        } md:mt-5 md:mb-1 `}
      >
        <Filters />
      </div>
    </header>
  );
}

export default Header;
