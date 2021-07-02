import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JobDescription() {
    const location = useLocation();
    const {description} = location.state;
    
    return (
       <div className='bg-gray-50'>
        <Link to='/' className="underline text-blue-900 font-semibold"> &#8592; back</Link>
        <div className='job-description p-2 text-blue-900 grid gap-2' dangerouslySetInnerHTML={{ __html: description }}></div>
        <Link to='/' className="underline text-blue-900 font-semibold"> &#8592; back</Link>
       </div>
    )
}

export default JobDescription