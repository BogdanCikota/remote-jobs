import { useState } from "react";

function Job({job}) {

    const jobDescription = job.description;
    const [readMore, setReadMore] = useState(false);

    return (
        <div className='border'>
            <h3>{job.company_name}</h3>
            <p>{job.category}</p>
            <div>Required location: {job.candidate_required_location === '' ? <span>/</span> : <span>{job.candidate_required_location}</span> } </div>
            <div>Job Type: <span>{job.job_type}</span> </div>
            <div>Published: <span>{job.publication_date}</span> </div>
            <button onClick={()=> setReadMore(prev=>!prev)}>Read more...</button>
            {readMore && <div dangerouslySetInnerHTML={{ __html: jobDescription }}></div>}
        </div>
    )
}

export default Job
