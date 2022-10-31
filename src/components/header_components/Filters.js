import React, { useState } from "react";
import {
  setNumOfResults,
  setCategory,
  setSearch,
  setLimit,
  setOpenFilters,
  setfromIndex,
  setgoToPage,
  settoIndex,
  setpagesCounter,
  setPages,
  setPageNum
} from "../../redux/features/globalSlice";
import { useDispatch, useSelector } from "react-redux";

function Filters() {
  const dispatch = useDispatch();
  const jobsState = useSelector((store) => store["jobs"]);

  const [inputLimit, setInputLimit] = useState(0);
  const [selectedCategory, setselectedCategory] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [inputNumOfResults, setInputNumOfResults] = useState(10);

  const resetPage = () => {
    dispatch(setfromIndex(0));
    dispatch(settoIndex(inputNumOfResults));
    dispatch(setPageNum(1));
    dispatch(setgoToPage(false));
    dispatch(setOpenFilters(true));
  };

  const resetFilters = () => {
    //api state
    dispatch(setLimit(0));
    dispatch(setCategory(""));
    dispatch(setSearch(""));
    dispatch(setNumOfResults(10));
    //local state
    setInputLimit(0);
    setselectedCategory("");
    setInputSearch("");
    setInputNumOfResults(10);
    dispatch(setOpenFilters(false));
    //dom
    document.querySelector("#limit").value = "";
    document.querySelector("select").selectedIndex = 0;
    document.querySelector("#search").value = "";
    document.querySelector("#numOfResults").value = "";
  };

  return (
    <form
      className=" max-w-screen-sm mx-auto pb-6 grid gap-3 bg-white md:p-5 md:rounded-lg md:gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setLimit(inputLimit));
        dispatch(setCategory(selectedCategory));
        dispatch(setNumOfResults(inputNumOfResults));
        dispatch(setSearch(inputSearch));

        let pagesArr = [];

        for (let i = 0; i < jobsState.jobs.length / inputNumOfResults; i++) {
          pagesArr.push(i);
        }

        dispatch(setpagesCounter(pagesArr.length));
        dispatch(setPages(pagesArr));

        resetPage();
      }}
    >
      <select
        className="border p-1.5"
        onChange={(e) => {
          setselectedCategory(e.target.value);
        }}
      >
        <option>Choose a job category</option>
        <option>All jobs</option>
        {jobsState.categories.map((category, index) => (
          <option key={index} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>

      <div className="border p-2">
        <label className="mb-2 block" htmlFor="search">
          Search job listing title and description
        </label>
        <input
          className="pl-2 border"
          type="search"
          id="search"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
      </div>

      <div className="border p-2">
        <label className="block" htmlFor="limit">
          Limit the number of results:{" "}
        </label>
        <input
          className="border w-20 my-1.5"
          type="number"
          id="limit"
          min="1"
          onChange={(e) => {
            setInputLimit(e.target.value);
          }}
        />
      </div>

      <div className="border p-2">
        <label className="block" htmlFor="numOfResults">
          Results per page:{" "}
        </label>
        <input
          className="border w-20 my-1.5"
          type="number"
          id="numOfResults"
          min="1"
          onChange={(e) => { e.target.value !== '' ? setInputNumOfResults(e.target.value) : setInputNumOfResults(10)
          }}
        />
      </div>

      <div className="flex justify-evenly mt-2 xl:justify-center xl:gap-14 xl:mt-0">
        <button
          className=" rounded-lg px-4 py-1  bg-blue-400 text-white"
          type="submit"
        >
          Go!
        </button>
        <button
          className=" rounded-lg px-4 py-1  bg-blue-400 text-white"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default Filters;
