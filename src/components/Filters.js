import React from 'react'

function Filters({categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading}) {
    return (
        <div className='grid gap-3'>
            <select className='border p-1.5' onChange={(e)=>{
                setCategory(e.target.value);
                setIsLoading(true);
            }}>
                <option>Choose a job category</option>
                {categories.map( (category, index) => <option key={index} value={category.slug} >{category.name}</option> )}
            </select>

            <form onSubmit={e => {
                e.preventDefault();
                setSearch(inputSearch);
                setIsLoading(true);
            }} className='border p-2'>
                <label className='mb-2 block'  htmlFor="search">Search job listing title and description</label>
                <input className='pl-2 border' type="search" id="search"  onChange={ e => {
                    setInputSearch((e.target.value));
                }} />
                <button type="submit">Go!</button>
            </form>

           <div className='border p-2 grid gap-1'>
            <label  htmlFor="limit">Limit the number of job listing result</label>
                <input className='border w-20' type="number" id="limit" min="1" onChange={ e => {
                    setLimit(e.target.value);
                    setIsLoading(true);
                }} /> <span>...will not work if all tree filters are selected, backend problem :(</span>
           </div>
        </div>
    )
}

export default Filters
