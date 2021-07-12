function Footer({isLoading, jobs}) {
    
    return (
        <footer className={`${isLoading && `fixed bottom-0 w-full`} ${jobs.length === 0 && `fixed bottom-0 w-full`} text-white mt-4 text-center`}>
            <p className='py-2 bg-blue-400  xl:bg-blue-300 xl:rounded-t-full xl:p-1.5'>API Source: <a href="https://remotive.io/api-documentation" rel="noreferrer" target="_blank">https://remotive.io/api-documentation</a></p>
            <p className='bg-blue-500 py-2'>Made by <a className='underline' href="https://github.com/BogdanCikota" rel="noreferrer" target="_blank">Bogdan</a> </p>
        </footer>
    )
}

export default Footer
