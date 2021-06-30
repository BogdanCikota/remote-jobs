import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function JobDescription() {
    const location = useLocation();
    const {description} = location.state;
    return (
       <div>
        <Link to='/' className="underline text-blue-900 font-semibold"> &#8592; back</Link>
        <div className='job-description' dangerouslySetInnerHTML={{ __html: description }}></div>
       </div>
    )
}

export default JobDescription