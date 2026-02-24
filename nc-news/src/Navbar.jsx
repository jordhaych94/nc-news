import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/articles/:article_id" className="links">
          Article
        </Link>
        <Link to="/topics" className="links">
          Topics
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
