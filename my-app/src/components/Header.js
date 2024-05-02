import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <break></break>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/contact">Contact Me</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Header;