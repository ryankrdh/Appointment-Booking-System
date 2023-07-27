import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import collapseIcon from '../../../Images/a-small-pom.gif';
import logo from '../../../Images/a-tooth1.gif';
import './Header.css';

const Header = () => {
	return (
		<div className="head-bg">
			<Navbar className="navbar" collapseOnSelect expand="lg">
				<Container className="container-head">
					<Navbar.Brand href="/home">
						<img src={logo} className="header-logo" alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg">
						<img src={collapseIcon} alt="Icon" className="collapse-icon" />
					</Navbar.Toggle>

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto align-items-center">
							<Link to="/home" className="list-item text-decoration-none">
								Home
							</Link>
							<Link to="/FAQ" className="list-item text-decoration-none">
								FAQ
							</Link>
							<Link to="/team" className="list-item text-decoration-none">
								Meet The Team
							</Link>
							<Link to="/directions" className="list-item text-decoration-none">
								Directions
							</Link>
							<Link to="/contact" className="list-item text-decoration-none">
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
