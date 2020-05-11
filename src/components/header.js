import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
    render() {
        return (
            <header>
              <nav >
                <Link to="/"> Home </Link>
                <Link to="/exercises"> Exercises </Link>
                <Link to="/1"> Slides </Link>
              </nav>
            </header>
        );
    }
}

export default Header;
