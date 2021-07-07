
function Loading({hasData}) {
    return (
        <div className='grid gap-2'>
            <h2 className='text-center bg-blue-500 p-1 text-white'>
                {hasData ? <span>Loading...</span> : <span>No data! Try again later!</span>}
            </h2>
            <div className='rounded-full bg-gray-100 h-8' > </div>
            <div>
                <div className='bg-gray-50 p-3 h-32'></div>
                <div className='bg-gray-100 p-3 h-32'></div>
            </div>
        </div>
    )
}

export default Loading
