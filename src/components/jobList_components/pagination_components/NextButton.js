import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setfromIndex,
  setJobPositionTop,
  settoIndex,
  setPageNum,
} from "../../../redux/features/globalSlice";

function NextButton() {
  const jobsState = useSelector((store) => store["jobs"]);
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store["global"]);
  const { numOfResults, fromIndex, toIndex, pageNum } = globalState;

  return (
    <button
      disabled={toIndex > jobsState.jobs.length - 1 ? true : false}
      className="font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white"
      onClick={() => {
        dispatch(setPageNum(+pageNum + +1));
        dispatch(setfromIndex(+fromIndex + +numOfResults));
        dispatch(settoIndex(+toIndex + +numOfResults));
        dispatch(setJobPositionTop(0));
      }}
    >
      &#62;
    </button>
  );
}

export default NextButton;
