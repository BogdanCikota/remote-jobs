
import { Link } from 'react-router-dom';

function Job({job, index}) {

    const goToTop = () => {
        window.scroll(0,0);
    } 

    return (
        <Link onClick={goToTop} className={`bg-gray-50 hover:bg-gray-100 p-4 block xl:text-lg xl:p-4 xl:pl-6 lg:flex justify-between`} to={{pathname:"/JobDescription", state: {description: job.description}}}>
            <div className='flex gap-4 xl:gap-5'>
                <img src={`https://remotive.io/job/${job.id}/logo`} alt={`logo ${job.company_name}`} className='rounded-full w-16 h-16' />
                <div>
                    <h3 className='text-blue-400'>{job.company_name}</h3>
                    <h2 className='text-blue-900 font-semibold'>{job.title}</h2>
                </div>
            </div>

            <div className='hidden lg:block text-blue-400 text-right'>
                <p>{job.category}</p>
                <div>{job.candidate_required_location}</div>
            </div>
        </Link>
    )
}

export default Job
