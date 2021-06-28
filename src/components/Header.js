
function Header({ openFilters, setOpenFilters }) {
    return (
        <header className="flex bg-yellow-500 p-3">
            <h1 className=' text-white text-2xl text-center'>Remote Jobs</h1>
            <button className='block m-auto  mt-2 bg-yellow-800 text-white rounded-full  px-3 ' onClick={()=> setOpenFilters(openFilters => !openFilters)}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>
        </header>
    )
}

export default Header
