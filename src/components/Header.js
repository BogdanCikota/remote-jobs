import Filters from "./header_components/Filters";

function Header({ openFilters, setOpenFilters, setgoToPage, numOfResults, setfromIndex, settoIndex, setPageNum, categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading }) {
   
    return (
        <header className={`${!openFilters && `pb-3`}  bg-blue-400 grid grid-cols-2 xl:grid-cols-7 xl:fixed w-full left-0 top-0 xl:px-7 ${openFilters && `xl:pb-4`} xl:gap-3`}>
            <h1 className='m-3 mb-2  text-white text-2xl cursor-pointer' onClick={()=> window.location.reload()}>Remote Jobs</h1>
            <button className=' col-start-2  m-3 mb-2 block  bg-blue-500 text-white rounded-full  px-3 ml-auto h-6 mt-5 xl:p-1 xl:mt-0 xl:relative top-2 xl:h-auto xl:px-3  xl:col-start-7' onClick={()=> {
                setOpenFilters(openFilters => !openFilters);
                }}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>
            
            <div className={`${openFilters ? `col-span-full` : `hidden`} `}>
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
