import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
const iconStyle = (Icon) => <Icon size="3rem" color="rgb(210,210,210)" />;

export const featuresData = [
	{
		name: 'Privacidad y seguridad',
		description: 'Ofrecemos cursos personales, en un ambiente seguro, donde podras evacuar todas tus dudas.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Facilidad de uso',
		description: 'Aprender a usar las herramientas que tienes a amano es muy pero muy facil',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Actualizacion de cursos',
		description: 'Nuestros cursos son acutalizados, muy frecuentemente por nuestros profesionales',
		icon: iconStyle(IoIosOptions),
		imgClass: 'three',
	},
	{
		name: 'Soporte 24/7',
		description: 'Nuestro equipo de soporte estara disponible para ti cuando lo necesites.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Precios justos',
		description: 'Los mejores precios del mercado',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Archivos seguros des de la nube',
		description:
			'Nuestros archivos estan almacenados de manera segura en la nube',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
