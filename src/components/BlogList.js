import { Link } from 'react-router-dom';

import "./BlogList.css"

const Bloglist = ({content, heading}) => {
    return (
        <div>
            <h1 className='firsthead'>{heading}</h1>

            <div>
                {content.map((vehicle) => (
                    <div key={vehicle.id}>
                        <Link to={`/blog/${vehicle.id}`}>
                        <h2 className='head'>{vehicle.title}</h2>
                        
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;
