import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JobDescription() {
    const location = useLocation();
    const history = useHistory();
    const [dateStr, setDateStr] = useState();
    const [jobDate, setJobDate] = useState();

    useEffect(() => {
        if(location.state === undefined) {
            history.push('/');
        } else {
            setDateStr(location.state.job.publication_date);
            let date = new Date(dateStr + "Z");
            setJobDate(date.toUTCString().slice(5,16));

            window.scroll(0,0);
            let jobDescription = document.querySelector('.job-description');
            for (let i = 0; i < jobDescription.children.length; i++) {
                if(jobDescription.children[i].innerHTML === '&nbsp;' || jobDescription.children[i].innerHTML === '' || jobDescription.children[i].innerHTML === '<br><br>' || jobDescription.children[i].innerHTML === '<br>') {
                    jobDescription.children[i].classList.add('hidden');
                }
                
            }
        }
        
    }, [location.state, history, dateStr])
    
    return (
       <div>
           {location.state !== undefined &&
            <div className='md:mt-16 xl:mt-16 xl:m-auto xl:max-w-5xl xl:p-4 text-gray-800'>
            <Link to='/' className="ml-2 underline font-semibold lg:text-lg"> &#8592; back</Link>
            
            <div className='xl:flex gap-2 px-4 xl:px-0'>
                <div className='w-20 h-20 m-auto xl:border xl:p-3 xl:m-0 xl:w-auto xl:h-auto self-center'>
                    <img className='rounded-full xl:rounded-none' src={`https://remotive.io/job/${location.state.job.id}/logo`} alt={`logo ${location.state.job.company_name}`} />
                </div>
            
                <div className='font-semibold p-2 xl:grid gap-2'>
                    <h3><span className='font-bold' >{location.state.job.company_name}</span> </h3>
                    <h2>Job title: {location.state.job.title}</h2>
                    <p>Category:  <span className='font-normal'>{location.state.job.category}</span> </p>
                    <div>
                        <div className='inline'>{location.state.job.candidate_required_location === '' ? <span>/</span> : <span className='font-normal'>{location.state.job.candidate_required_location}</span> } </div> /
                        <div className='inline'> {location.state.job.job_type ? <span className='font-normal'>{location.state.job.job_type}</span> : <span>/</span> } </div>
                    </div>
                    <div>Published: <span className='font-normal'>{jobDate}</span> </div>
                </div>
            </div>

            <div className='border job-description py-3 px-5 w-screen overflow-scroll sm:w-full sm:overflow-visible grid gap-4 leading-relaxed' dangerouslySetInnerHTML={{ __html: location.state.job.description }}></div>
            <Link to='/' className="ml-2 underline font-semibold lg:text-lg"> &#8592; back</Link>
        </div>
        }
       </div>
    )
}

export default JobDescription