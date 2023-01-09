import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setfromIndex,
  setJobPositionTop,
  settoIndex,
  setPageNum,
} from "../../../redux/features/globalSlice";
import { RootState } from "../../../redux/store";

type PagesProps = {
  lastChunk?: number;
  chunkIndex?: number;
  chunk: number[];
};

function Pages({ lastChunk, chunkIndex, chunk }: PagesProps) {
  const [lastNumInChunk, setLastNumInChunk] = useState(0);
  const globalState = useSelector((store: RootState) => store["global"]);
  const { numOfResults, pages } = globalState;
  const dispatch = useDispatch();

  useEffect(() => {
    setLastNumInChunk(
      chunk.filter((num, index) => chunk.length - 1 === index)[0]
    );
  }, [chunk]);
  return (
    <select
      className=" border rounded-md "
      onChange={(e) => {
        let num = Number(e.target.value);
        dispatch(setPageNum(+num + +1));
        dispatch(setfromIndex(num * numOfResults));
        dispatch(settoIndex(+num * numOfResults + +numOfResults));
        e.target.selectedIndex = 0;
        dispatch(setJobPositionTop(0));
      }}
    >
      {pages && pages.length > 100 && chunkIndex ? (
        <option>{`${(chunkIndex + 1) * 100 - 100 + 1}...${
          lastChunk === chunkIndex
            ? +lastNumInChunk + +1
            : (chunkIndex + 1) * 100
        }`}</option>
      ) : (
        <option>{`1...${+lastNumInChunk + +1}`}</option>
      )}
      {chunk.map((num, index) => (
        <option key={index} value={num}>
          {num + 1}
        </option>
      ))}
    </select>
  );
}

export default Pages;
