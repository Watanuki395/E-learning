import React from "react";
import { Link } from "react-router-dom";
import {
	MainHeading,
} from "../../styles/globalStyles";
import {
	HeroVideo,
	HeroSection,
	HeroText,
	ButtonWrapper,
	HeroButton,
} from "./HeroStyles";
import { useLocation } from "react-router-dom";



const Hero = () => {

	let location = useLocation();

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
		behavior: "smooth",
		});
	};

	const goToSection = (to, id) => {
		if (id && id === "about" && location.pathname === "/") {
		scrollTo(id);
		}
	};

	return (
		<HeroSection>
		<HeroVideo src="" autoPlay muted />
		<MainHeading>Inspira - Aprende - Lidera</MainHeading>
		<HeroText>
			El lugar donde nos hubiese gustado formarnos, cuando empezamos nuestra
			carrera.
		</HeroText>
		<ButtonWrapper>
			<Link to="login">
			<HeroButton>Comenzar</HeroButton>
			</Link>
			<HeroButton  onClick={() => {goToSection("/", "about")}}>Ver Más</HeroButton>
		</ButtonWrapper>
		</HeroSection>
	);
};

export default Hero;
