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
import { RootState } from "../redux/store";

const app = initializeApp(config.firebaseConfig);

const db = getFirestore(app);

function Header() {
const auth = getAuth();
const navigate = useNavigate();
const dispatch = useDispatch();
const globalState = useSelector((store: RootState) => store["global"]);
const { openFilters } = globalState;
const userState = useSelector((store: RootState) => store["persistedReducer"].user);
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
    }).then(() => {
      dispatch(
        login({
          uid: response.user.uid,
          name: response.user.displayName,
          likedJobs: [],
        })
      );
    });
  } else {
    console.log("user with that id already exists");
    dispatch(
      login({
        uid: response.user.uid,
        name: response.user.displayName,
        likedJobs: [...snapshot.data()?.likedJobs],
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
        !openFilters ? `sm:pb-3 flex` : ` rows gap-2 md:pb-4 md:bg-opacity-60 h-screen`
      } bg-blue-400 grid grid-cols-2  justify-between px-1 py-3 sm:pt-0 md:fixed z-10 w-full left-0 top-0 md:px-7  md:gap-3`}
    >
      <h1
        className="inline sm:m-3 sm:mb-2 text-xl  text-white sm:text-2xl cursor-pointer self-start"
        onClick={() => window.location.replace("/remote-jobs")}
      >
        Remote Jobs
      </h1>
      <div
        className={`${
          openFilters ? `grid justify-end items-center` : `sm:mt-4`
        } nav   justify-self-end  `}
      >
        <button
          className={`${
            openFilters ? `bg-opacity-0 mr-6 self-start md:mt-2 sm:pt-4 md:pt-2` : ``
          } tracking-wide xl:mr-3 cursor-pointer     text-white  md:px-3`}
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
            } tracking-wide mr-2 lg:mr-3 cursor-pointer pl-3  px-2 pb-1 pt-0.5 text-white `}
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
          }} onMouseLeave={() => setActive(false)} className="dropdown relative  tracking-wide cursor-pointer  text-white sm:mr-3  pl-3 py-1  md:px-3` ">
            My Profile <span className="relative bottom-0.5">&#8964;</span>
            <ul className={`${isActive ? 'block' : 'hidden'}  dropdown-content absolute left-0 w-28 pt-5 text-white bg-blue-400 text-black`}>
              <li onClick={()=> dispatch(setJobPositionTop(0))}>
                <Link className="" to={"/user"}>
                  Saved jobs
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
            ? ` col-span-full sm:mt-6   `
            : `hidden`
        }  `}
      >
        <Filters />
      </div>
    </header>
  );
}

export default Header;
