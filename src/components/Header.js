import { useDispatch, useSelector } from "react-redux";
import Filters from "./header_components/Filters";
import { setOpenFilters, setJobPositionTop } from "../redux/features/globalSlice";

function Header() {
  const dispatch = useDispatch();
  const globalState = useSelector((store) => store["global"]);
  const { openFilters } = globalState;
  return (
    <header
      className={`${
        !openFilters ? `pb-3` : `md:pb-4 md:bg-opacity-60`
      } bg-blue-400 grid grid-cols-3 md:grid-cols-7 md:fixed w-full left-0 top-0 md:px-7  md:gap-3`}
    >
      <h1
        className="col-span-2 m-3 mb-2  text-white text-2xl cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Remote Jobs
      </h1>
      <button
        className={`${
          openFilters ? `bg-opacity-0 mr-6 md:self-start md:mt-2` : `mt-3`
        } mr-3  rounded-2xl px-2 py-1 col-start-3 justify-self-end self-center bg-blue-500 text-white  md:col-start-7 md:px-3`}
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

      <div
        className={`${
          openFilters
            ? `col-span-full md:col-start-2 md:col-end-7  xl:col-start-3 xl:col-end-6 xl:row-span-full`
            : `hidden`
        } md:mt-5 md:mb-1 `}
      >
        <Filters />
      </div>
    </header>
  );
}

export default Header;
