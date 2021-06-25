import React from 'react'

function Filters({categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading}) {
    return (
        <div>
            <select onChange={(e)=>{
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
            }}>
            <label htmlFor="search">Search job listing title and description</label>
            <input className='border' type="search" id="search"  onChange={ e => {
                setInputSearch((e.target.value));
            }} />
            <button type="submit">Go!</button>
            </form>

            <label htmlFor="limit">Limit the number of job listing result</label>
            <input className='border' type="number"id="limit" min="1" onChange={ e => {
                setLimit(e.target.value);
                setIsLoading(true);
            }} /> <span>...will not work if all tree filters are selected, backend problem :(</span>
        </div>
    )
}

export default Filters
