
import { Link } from 'react-router-dom';

function Job({job, index}) {

    const goToTop = () => {
        window.scroll(0,0);
    }

    return (
        <div className={`${index%2 !== 0 ? `bg-gray-100`: `bg-gray-50`} p-3`}>

            <h3 className='text-blue-900 font-semibold'>Company: <span className='font-bold' >{job.company_name}</span> </h3>
            <p className='text-blue-900 font-semibold'>Category: <span className='font-normal'>{job.category}</span> </p>
            <div className='text-blue-900 font-semibold'>Required location: {job.candidate_required_location === '' ? <span>/</span> : <span className='font-normal'>{job.candidate_required_location}</span> } </div>
            <div className='text-blue-900 font-semibold'>Job Type: {job.job_type ? <span className='font-normal'>{job.job_type}</span> : <span>/</span> } </div>
            <div className='text-blue-900 font-semibold'>Published: <span className='font-normal'>{job.publication_date}</span> </div>
            <Link onClick={goToTop} className='text-blue-900 font-semibold' to={{pathname:"/JobDescription", state: {description: job.description}}}>Read more...</Link>
        </div>
    )
}

export default Job
