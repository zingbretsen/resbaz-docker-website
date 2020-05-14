import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
    render() {
        return (
            <header>
              <nav >
                <Link to="/"> Home </Link>
                <Link to="/exercises"> Exercises </Link>
                <Link to="/lessons/0"> Lesson 0 </Link>
                <Link to="/lessons/1"> Lesson 1 </Link>
                <Link to="/lessons/2"> Lesson 2 </Link>
                <Link to="/lessons/3"> Lesson 3 </Link>
                <Link to="/1"> Slides </Link>
              </nav>
            </header>
        );
    }
}

export default Header;
