    import React, { useContext, useRef, useState } from "react";
    //import { useSelector } from "react-redux";
    import {
        SDivider,
        SLink,
        SLinkContainer,
        SLinkIcon,
        SLinkLabel,
        SLinkNotification,
        SLogo,
        SSidebar,
        SSidebarButton,
        STheme,
        SThemeLabel,
        SThemeToggler,
        SToggleThumb,
    } from "./style";

    import { logoSVG } from "../../imgs";

    import {
        AiOutlineApartment,
        AiOutlineHome,
        AiOutlineLeft,
        AiOutlineSetting,
    } from "react-icons/ai";

    import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
    import { BsPeople } from "react-icons/bs";

    import { ThemeContext } from "../../App";
    import { useLocation } from "react-router-dom";
    import { useAuth } from "../../context/AuthContext";

    const SideBar = () => {
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();
    const { logout, user, persist, setPersist } = useAuth();

    const handleLogout = async () => {
		try {
		await logout()
		setPersist(false);
		console.log('Logout successfully');
		} catch (error) {
		console.error(error.message);
		setPersist(false);
		}
	};

    return persist ? (
        <SSidebar isOpen={sidebarOpen} id="sidebar">
        <>
            <SSidebarButton
            isOpen={sidebarOpen}
            onClick={() => setSidebarOpen((p) => !p)}
            >
            <AiOutlineLeft />
            </SSidebarButton>
        </>
        <SLogo>
            <img src={logoSVG} alt="logo" />
        </SLogo>
        <SDivider />
        {linksArray.map(({ icon, label, notification, to }) => (
            <SLinkContainer key={label} isActive={pathname === to}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                <SLinkIcon>{icon}</SLinkIcon>
                {sidebarOpen && (
                <>
                    <SLinkLabel>{label}</SLinkLabel>
                    {/* if notifications are at 0 or null, do not display */}
                    {!!notification && (
                    <SLinkNotification>{notification}</SLinkNotification>
                    )}
                </>
                )}
            </SLink>
            </SLinkContainer>
        ))}
        <SDivider />
            <SLinkContainer key='logout' onClick={handleLogout}>
            <SLink style={!sidebarOpen ? { width: `fit-content` } : {}}>
                <SLinkIcon>{<MdLogout />}</SLinkIcon>
                {sidebarOpen && (
                <>
                    <SLinkLabel>{'Cerrar Sesión'}</SLinkLabel>
                </>
                )}
            </SLink>
            </SLinkContainer>

        <SDivider />
        <STheme>
            {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
            <SThemeToggler
            isActive={theme === "dark"}
            onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
            >
            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
            </SThemeToggler>
        </STheme>
        </SSidebar>
    ) : (
        <></>
    );
    };

    const linksArray = [
        {
            label: "Home",
            icon: <AiOutlineHome />,
            to: "/dashboard",
            notification: 0,
        },
        {
            label: "Menú",
            icon: <MdOutlineAnalytics />,
            to: "/menu",
            notification: 0,
        },
        {
            label: "Users",
            icon: <BsPeople />,
            to: "/users",
            notification: 0,
        },
        {
            label: "Diagrams",
            icon: <AiOutlineApartment />,
            to: "/diagrams",
            notification: 0,
        },
        {
            label: "Settings",
            icon: <AiOutlineSetting />,
            to: "/diagrams",
            notification: 0,
        }
    ];


    export default SideBar;