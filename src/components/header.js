import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
    render() {
        return (
            <header>
              <nav >
                <Link to="/"> Home </Link>
                <Link to="/exercises"> Exercises </Link>
                <Link to="/lessons/0">Why Docker?</Link>
                <Link to="/lessons/1">Running Images</Link>
                <Link to="/lessons/2">Building Images</Link>
                <Link to="/lessons/3">More Options</Link>
                <Link to="/lessons/4">Docker Compose</Link>
                <Link to="/1"> Slides </Link>
              </nav>
            </header>
        );
    }
}

export default Header;
