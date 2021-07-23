import Filters from "./header_components/Filters";

function Header({setJobPositionTop, openFilters, setOpenFilters, setgoToPage, numOfResults, setfromIndex, settoIndex, setPageNum, categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading }) {

    return (
        <header className={`${!openFilters ? `pb-3` : `xl:pb-4 xl:bg-opacity-60`} bg-blue-400 grid grid-cols-3 xl:grid-cols-7 xl:fixed w-full left-0 top-0 xl:px-7  xl:gap-3`}>
            <h1 className='col-span-2 m-3 mb-2  text-white text-2xl cursor-pointer' onClick={()=> window.location.reload()}>Remote Jobs</h1>
            <button className={`${openFilters ? `bg-opacity-0 mr-6 xl:self-start xl:mt-2` : `mt-3` } mr-3  rounded-2xl px-2 py-1 col-start-3 justify-self-end self-center bg-blue-500 text-white  xl:col-start-7 xl:px-3`} 
            onClick={()=> {
                setJobPositionTop(0);
                setOpenFilters(openFilters => !openFilters);
                }}> {openFilters ? <span className='text-xl xl:text-2xl'>x</span> : <span >Filters</span> }  
            </button>
            
            <div className={`${openFilters ? `col-span-full xl:col-start-3 xl:col-end-6 xl:row-span-full` : `hidden`} xl:mt-5 xl:mb-1 `}>
                <Filters 
                setLimit={setLimit} 
                setCategory={setCategory} 
                setSearch={setSearch}
                inputSearch={inputSearch}
                setIsLoading={setIsLoading}
                setInputSearch={setInputSearch}
                categories={categories}
                setfromIndex={setfromIndex}
                settoIndex={settoIndex}
                setPageNum={setPageNum}
                numOfResults={numOfResults}
                setgoToPage={setgoToPage}
                setOpenFilters={setOpenFilters}
                />
            </div>
            
        </header>
    )
}

export default Header
