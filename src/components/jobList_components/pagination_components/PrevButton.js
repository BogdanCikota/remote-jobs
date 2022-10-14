import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setfromIndex,
  setJobPositionTop,
  settoIndex,
  setPageNum,
} from "../../../redux/features/globalSlice";

function PrevButton({ pageNumElement }) {
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store["global"]);
  const { numOfResults, fromIndex, toIndex } = globalState;

  return (
    <button
      disabled={fromIndex === 0 ? true : false}
      className="font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white"
      onClick={() => {
        let pageNumCurrent = pageNumElement.innerHTML;
        dispatch(setPageNum(pageNumCurrent - 1));

        dispatch(setfromIndex(fromIndex - numOfResults));
        dispatch(settoIndex(toIndex - numOfResults));
        dispatch(setJobPositionTop(0));
      }}
    >
      &#60;
    </button>
  );
}

export default PrevButton;
