import {useSelector} from 'react-redux';
import { RootState } from '../redux/store';

function Loading() {

    const jobsState = useSelector((store: RootState) => store["jobs"]);
    
    return (
        <div className='loading grid gap-0.5 mb-2 md:mx-40 md:mt-16 xl:mt-16 xl:m-auto xl:w-2/3'>
            <div className='bg-blue-500 text-center  p-1 text-white mb-4 md:rounded-b-full md:bg-blue-300 xl:p-1.5'>
                {jobsState.hasData ? <span>Loading...</span> : <span>No data! Try again later!</span>}
            </div>
            <div>
                <div className='job border-b hover:bg-gray-50 h-24'></div>
                <div className='job border-b hover:bg-gray-50 h-24'></div>
                <div className='job border-b hover:bg-gray-50 h-24'></div>
                <div className='hidden job border-b hover:bg-gray-50 xl:block h-24'></div>
                <div className='hidden job border-b hover:bg-gray-50 xl:block h-24'></div>
            </div>
        </div>
    )
}

export default Loading
