import { useState } from "react";

function Job({job, index}) {

    const jobDescription = job.description;
    const [readMore, setReadMore] = useState(false);

    return (
        <div className={index%2 !== 0 ? 'bg-gray-100 p-3': 'bg-gray-50 p-3'}>
            <h3 className='font-semibold'>Company: <span className='text-gray-700 font-bold' >{job.company_name}</span> </h3>
            <p className='font-semibold'>Category: <span className='font-normal'>{job.category}</span> </p>
            <div className='font-semibold'>Required location: {job.candidate_required_location === '' ? <span>/</span> : <span className='font-normal'>{job.candidate_required_location}</span> } </div>
            <div className='font-semibold'>Job Type: {job.job_type ? <span className='font-normal'>{job.job_type}</span> : <span>/</span> } </div>
            <div className='font-semibold'>Published: <span className='font-normal'>{job.publication_date}</span> </div>
            <button className='underline' onClick={()=> setReadMore(prev=>!prev)}>Read more...</button>
            {readMore && <div dangerouslySetInnerHTML={{ __html: jobDescription }}></div>}
        </div>
    )
}

export default Job
