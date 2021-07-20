import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JobDescription() {
    const location = useLocation();
    const {job} = location.state;
    const str = job.publication_date;
    let date = new Date(str + "Z");

    let jobDate = date.toUTCString();
    jobDate = jobDate.slice(5,16);

    useEffect(() => {
        let jobDescription = document.querySelector('.job-description');
        for (let i = 0; i < jobDescription.children.length; i++) {
            if(jobDescription.children[i].innerHTML === '&nbsp;' || jobDescription.children[i].innerHTML === '' || jobDescription.children[i].innerHTML === '<br><br>' || jobDescription.children[i].innerHTML === '<br>') {
                jobDescription.children[i].classList.add('hidden');
            }
            
        }
    }, [job])
    
    return (
       <div className='xl:mt-16 xl:m-auto xl:max-w-5xl xl:p-4 text-gray-800'>
        <Link to='/' className="underline font-semibold lg:text-lg"> &#8592; back</Link>
        
        <div className='xl:flex gap-2'>
            <div className='w-20 h-20 m-auto xl:border xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center'>
                <img className='rounded-full xl:rounded-none' src={`https://remotive.io/job/${job.id}/logo`} alt={`logo ${job.company_name}`} />
            </div>
           
            <div className='font-semibold p-2 xl:grid gap-2'>
                <h3><span className='font-bold' >{job.company_name}</span> </h3>
                <h2>Job title: {job.title}</h2>
                <p>Category:  <span className='font-normal'>{job.category}</span> </p>
                <div>
                    <div className='inline'>{job.candidate_required_location === '' ? <span>/</span> : <span className='font-normal'>{job.candidate_required_location}</span> } </div> /
                    <div className='inline'> {job.job_type ? <span className='font-normal'>{job.job_type}</span> : <span>/</span> } </div>
                </div>
                <div>Published: <span className='font-normal'>{jobDate}</span> </div>
            </div>
        </div>

        <div className='border job-description py-3 px-6 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4' dangerouslySetInnerHTML={{ __html: job.description }}></div>
        <Link to='/' className="underline font-semibold lg:text-lg"> &#8592; back</Link>
       </div>
    )
}

export default JobDescription