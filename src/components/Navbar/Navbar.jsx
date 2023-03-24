import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import {
	Nav,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	UserWrapper
} from "./NavbarStyles.js";
import { useLocation, useNavigate } from "react-router-dom";
import { navlogout } from "../../data/NavbarData";
import { useAuth } from "../../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const { logout, user, persist, setPersist } = useAuth();


	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
		behavior: "smooth",
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && id === "about" && location.pathname === "/") {
		scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);


	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleGoToSetting = () => {
		navigate("/profile");
		setAnchorEl(null);
	};
	
	const handleLogout = async () => {
		try {
		await logout()
		setPersist(false);
		setAnchorEl(null);
		console.log('Logout successfully');
		} catch (error) {
		console.error(error.message);
		setPersist(false);
		setAnchorEl(null);
		}
	};


	const stringToColor = (string) => {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = "#";

		for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
		}
		/* eslint-enable no-bitwise */

    return color;
	};

	const stringAvatar = (name) => {
		return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	};

	return (
		<Nav>
		{!persist ? <NavLogo to="/">
			<NavIcon src="./assets/logo.png" alt="logo" />
			LearningHub
		</NavLogo>:<></>}
		<MobileIcon onClick={handleClick}>
			{show ? <FaTimes /> : <CgMenuRight />}
		</MobileIcon>
		<NavMenu show={show}>
			{persist
			? 
				<NavItem>
					<Tooltip title="Ver configuraciones">
						<Button color="inherit" onClick={handleMenu}>

							<Avatar {...stringAvatar('Gerardo Salas Montoya')} /> 
							<UserWrapper>{user?.email}</UserWrapper>

						</Button>
					</Tooltip>
					<Menu
						
						id="menu-navbar"
						anchorEl={anchorEl}
						anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
						color:'inherit'
						}}
						keepMounted
						transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleGoToSetting}>Configuración de Cuenta</MenuItem>
						<MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
					</Menu>
				</NavItem>
				
			: navlogout.map((el, index) => (
				<NavItem key={index}>
					<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
					{el.text}
					</NavLinks>
				</NavItem>
				))}
		</NavMenu>
		</Nav>
	);
};

export default Navbar;
