import Filters from "./Filters";

function Header({ openFilters, setOpenFilters, setgoToPage, numOfResults, setfromIndex, settoIndex, setPageNum, categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading }) {
    const filters = document.querySelector('.filters');
    return (
        <header className={`${!openFilters && `pb-3` }  bg-blue-400 grid grid-cols-2`}>
            <h1 className='m-3 mb-2  text-white text-2xl cursor-pointer' onClick={()=> window.location.reload()}>Remote Jobs</h1>
            <button className='m-3 mb-2 block  bg-blue-500 text-white rounded-full  px-3 ml-auto h-6 mt-5' onClick={()=> {
                setOpenFilters(openFilters => !openFilters);
                !openFilters? filters.style = `display: grid`:filters.style = `display: none`
                }}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>
            
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
                />
        </header>
    )
}

export default Header
