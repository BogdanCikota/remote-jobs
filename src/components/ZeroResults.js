
function ZeroResults() {
    return (
        <div className='grid gap-2 xl:mt-16 xl:m-auto xl:max-w-5xl'>
            <h2 className='text-center bg-blue-500 p-1 text-white xl:bg-blue-300 xl:rounded-b-full xl:p-1.5'>0 results</h2>
            <div className='rounded-full bg-gray-100 h-8' > </div>
            <div>
                <div className='bg-gray-50 p-3 h-32'></div>
                <div className='bg-gray-100 p-3 h-32'></div>
                <div className='bg-gray-50 p-3 h-32'></div>
                <div className='hidden bg-gray-100 p-3 h-32 xl:block'></div>
                <div className='hidden bg-gray-50 p-3 h-32 xl:block'></div>
            </div>
        </div>
    )
}

export default ZeroResults
