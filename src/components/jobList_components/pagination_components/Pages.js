
function Pages({goToTop, numOfResults, chunk, setPageNum, setfromIndex, settoIndex}) {
    return (
        <select className='block m-auto border rounded-md' onChange={(e)=>{
            let num = e.target.value;
            setPageNum(+num + +1);
            setfromIndex(num * numOfResults);
            settoIndex(num * numOfResults+numOfResults);
            e.target.selectedIndex = 0;
            goToTop();
        }}>
            <option>Go to page...</option>
            {
                chunk.map((page, index) => <option key={index} value={page}>{page+1}</option> )
            }
        </select>
    )
}

export default Pages
