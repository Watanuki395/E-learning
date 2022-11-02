import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Los mejores cursos de Excel de toda la web</MainHeading>
				<HeroText>
				El lugar donde nos hubiese gustado formarnos, cuando empezamos nuestra carrera.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Comenzar</Button>
					</Link>
					<HeroButton>Ver Más</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
