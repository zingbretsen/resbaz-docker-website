import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand >
                  <Link to="/" className="nav-link"> Intro to Docker </Link>
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/exercises" className="nav-link"> Exercises </Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Lessons
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link to="/lessons/0">
                      <DropdownItem>
                          Why Docker?
                      </DropdownItem>
                      </Link>
                      <Link to="/lessons/1">
                      <DropdownItem>
                        Running Images
                      </DropdownItem>
                      </Link>
                        <Link to="/lessons/2">
                          <DropdownItem>
                          Building Images
                      </DropdownItem>
                        </Link>
                        <Link to="/lessons/3">
                          <DropdownItem>
                          More Options
                      </DropdownItem>
                        </Link>
                        <Link to="/lessons/4">
                          <DropdownItem>
                          Docker Compose
                      </DropdownItem>
                        </Link>
                      <Link to="/lessons/5">
                        <DropdownItem>
                          Sharing Images
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Navbar>
            </div>
        );
    }
}

export default Header;
