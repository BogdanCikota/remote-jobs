
function Pages({goToTop, numOfResults, chunk, setPageNum, setfromIndex, settoIndex}) {
    return (
        <div className='p-2 grid grid-cols-7 gap-2' >
            {   
                chunk.map((page, index) => {
                return <button className='rounded-lg px-1  bg-blue-400 text-white' key={index} onClick={()=>{
                        
                        setPageNum(page+1);

                        setfromIndex(page*numOfResults);

                        settoIndex(page*numOfResults+numOfResults);
                        goToTop();
                    }}>
                        {page+1}
                    </button>
                } )
            }
        </div>
    )
}

export default Pages
