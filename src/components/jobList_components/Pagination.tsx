import Pages from "./pagination_components/Pages";
import PrevButton from "./pagination_components/PrevButton";
import NextButton from "./pagination_components/NextButton";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setfromIndex,
  setgoToPage,
  setJobPositionTop,
  settoIndex,
  setPageNum,
} from "../../redux/features/globalSlice";
import { RootState } from "../../redux/store";

function Pagination() {
  const [paginationNums, setPaginationNums] = useState(0);
  const globalState = useSelector((store: RootState) => store["global"]);
  const { pages, goToPage, numOfResults } = globalState;
  let chunkedPages: number[][] = globalState.chunkedPages;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 425) {
      setPaginationNums(11);
    } else {
      setPaginationNums(5);
    }
  }, []);

  return (
    <div className="m-auto my-4 flex gap-6 justify-center mb-1.5 items-center px-4">
      <PrevButton />
      {pages && pages.length > 100 && !goToPage && (
        <button
          onClick={(e) => {
            dispatch(setgoToPage(!goToPage));
            dispatch(setJobPositionTop((e.target as HTMLElement).offsetTop));
          }}
          className="rounded-lg px-1 bg-blue-400 hover:bg-blue-500 text-white"
        >
          Go to page...
        </button>
      )}

      {
        // generate from/to select
        goToPage && pages.length > 100 && (
          <div className="flex gap-3 flex-wrap justify-center">
            {chunkedPages.map((chunk, index) => {
              return (
                <Pages
                  key={index}
                  lastChunk={chunkedPages.length - 1}
                  chunkIndex={index}
                  chunk={chunk}
                />
              );
            })}
          </div>
        )
      }

      {chunkedPages.length > 0 &&
        pages.length < 100 &&
        pages.length >= paginationNums && <Pages chunk={chunkedPages[0]} />}

      {chunkedPages.length > 0 && pages.length < paginationNums && (
        <div className="flex flex-wrap gap-2 justify-center">
          {chunkedPages[0].map((num, index) => (
            <button
              key={index}
              className={`${
                num + 1 === 10 && `pr-0.5`
              } rounded-full w-8 py-1  bg-blue-400 hover:bg-blue-500 text-white`}
              onClick={() => {
                dispatch(setPageNum(num + 1));
                dispatch(setfromIndex(num * numOfResults));
                dispatch(settoIndex(+num * numOfResults + +numOfResults));
                dispatch(setJobPositionTop(0));
              }}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}

      <NextButton />
    </div>
  );
}

export default Pagination;
