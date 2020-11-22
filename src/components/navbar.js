import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
    render() {
        return (
            <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item >{this.props.location.state.status} 1</NavDropdown.Item>
                            <NavDropdown.Item >{this.props.location.state.status} 1.1</NavDropdown.Item>
                            <NavDropdown.Item >{this.props.location.state.status} 1.2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >{this.props.location.state.status} 2.1</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default NavBar;