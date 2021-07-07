import React, { useState } from 'react'

function Filters({goToPage, setgoToPage, numOfResults, setfromIndex, settoIndex, setPageNum, categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading}) {
    const [inputLimit, setInputLimit] = useState(0);
    const resetPage = () => {
        setfromIndex(0); settoIndex(numOfResults); setPageNum(1); setgoToPage(false);
    };
    return (
        <div className='filters grid gap-3'>
            <select className='border p-1.5' onChange={(e)=>{
                setCategory(e.target.value);
                setIsLoading(true);
                resetPage();
            }}>
                <option>Choose a job category</option>
                <option>All jobs</option>
                {categories.map( (category, index) => <option key={index} value={category.slug} >{category.name}</option>
                 )}
            </select>

            <form onSubmit={e => {
                e.preventDefault();
                setSearch(inputSearch);
                setIsLoading(true);
                resetPage();
            }} className='border p-2'>
                <label className='mb-2 block'  htmlFor="search">Search job listing title and description</label>
                <input className='pl-2 border' type="search" id="search"  onChange={ e => {
                    setInputSearch((e.target.value));
                }} />
                <button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' type="submit">Go!</button>
            </form>

           <form onSubmit={e => {
                e.preventDefault();
                setLimit(inputLimit);
                setIsLoading(true);
                setInputLimit(0);
                resetPage();
                document.querySelector("#limit").value = '';
           }} className='border p-2 '>
            <label className='block'  htmlFor="limit">Limit the number of job listing result <span className='text-sm italic'>(will not work with search input, API problem)</span></label>
                <input className='border w-20 my-1.5' type="number" id="limit" min="1" onChange={ e => {
                    setInputLimit(e.target.value);
                }} /><button className='ml-2 rounded-lg px-1  bg-blue-500 text-white' type="submit">Go!</button> 
                
           </form>
        </div>
    )
}

export default Filters
