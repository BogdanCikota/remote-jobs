
function Header({ openFilters, setOpenFilters }) {
    const filters = document.querySelector('.filters');
    return (
        <header className="flex bg-blue-400 p-3 pb-5">
            <h1 className=' text-white text-2xl text-center'>Remote Jobs</h1>
            <button className='block  mt-2 bg-blue-500 text-white rounded-full  px-3 ml-auto' onClick={()=> {
                setOpenFilters(openFilters => !openFilters);
                !openFilters? filters.style = `display: grid`:filters.style = `display: none`
                }}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>
        </header>
    )
}

export default Header
