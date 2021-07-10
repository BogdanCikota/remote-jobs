import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JobDescription() {
    const location = useLocation();
    const {description} = location.state;
    
    return (
       <div className='bg-gray-50 xl:mt-16 xl:m-auto xl:max-w-5xl xl:p-4'>
        <Link to='/' className="underline text-blue-900 font-semibold lg:text-lg"> &#8592; back</Link>
        <div className='job-description p-2 text-blue-900 grid gap-2' dangerouslySetInnerHTML={{ __html: description }}></div>
        <Link to='/' className="underline text-blue-900 font-semibold lg:text-lg"> &#8592; back</Link>
       </div>
    )
}

export default JobDescription