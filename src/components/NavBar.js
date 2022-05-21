import "./BlogList.css";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navBar">
          <h2>CarBlog</h2>
        <ul>
            <li><Link to = "/Home" >Home</Link></li>
            <li><Link to = "/About" >About</Link></li>
            <li><Link to = "/Contact" >Contact</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
<Link to ="/Home"><button>Yes</button></Link>