
import { Link } from 'react-router-dom';

function Job({job, index}) {

    const goToTop = () => {
        window.scroll(0,0);
    } 

    return (
        <Link onClick={goToTop} className={` job border-b  hover:bg-gray-50 p-4 block xl:p-4 xl:pl-6 lg:flex justify-between `} to={{pathname:"/JobDescription", state: {description: job.description}}}>
            <div className='flex gap-4 xl:gap-5'>
                <img src={`https://remotive.io/job/${job.id}/logo`} alt={`logo ${job.company_name}`} className='rounded-full w-16 h-16' />
                <div>
                    <h3 className='text-blue-400'>{job.company_name}</h3>
                    <h2 className='text-blue-900 font-semibold'>{job.title}</h2>
                </div>
            </div>

            <div className='hidden text-blue-400 text-right text-sm lg:grid '>
                <p>{job.category}</p>
                <div>{job.candidate_required_location}</div>
            </div>
        </Link>
    )
}

export default Job
