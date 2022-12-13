import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { navlogout, navloged } from '../../data/NavbarData';
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const { logout, user, persist } = useAuth();
	const data = []

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && id === "about" && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

	return (
			<Nav>

					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						SuperEs
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{persist ? navloged.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						)) :
						navlogout.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						)) 
						}
					</NavMenu>

			</Nav>
	);
};

export default Navbar;
