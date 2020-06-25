import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">RaaBee guides</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">

					<Link to="/"> Read Code</Link>

					<Link to="/insert"> Insert Data</Link>

					<Link to="/manage"> Manage Data</Link>
                    
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
