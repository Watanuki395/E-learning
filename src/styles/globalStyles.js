import styled, { createGlobalStyle } from "styled-components";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
		padding: 0;
    }
    body {
        background: ${({ theme }) => theme.bg3};
        color: ${({ theme }) => theme.text};
		font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
    background: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
	@media screen and (max-width: 768) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;
export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	text-align:  ${({ align }) => (align ? align : '')};
`;
export const Section = styled.div`
	display: flex;
	flex-direction:column;
	padding: ${({ padding }) => (padding ? padding : '100px 0')};
	margin: ${({ margin }) => (margin ? margin : 'auto')};
	background: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
	position: ${({ position }) => (position ? position : 'auto')};
	width: ${({ width }) => (width ? width : '100%')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '100px 0')};
		width: ${({ width }) => (width ? width : '100%')};
	}
`;
export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
export const xButton = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: black;
	}
`;
export const StyledTextField = styled(TextField)`
    .MuiFormLabel-root {
        color: inherit;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
        & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.text};
    }

    & label.Mui-focused {
        color:${({ theme }) => theme.text};
    }

    & .MuiOutlinedInput-root {
        color:${({ theme }) => theme.text};

        & fieldset {
        border-color: ${({ theme }) => theme.TextFieldBorder};
        }
        &:hover fieldset {
        border-color: ${({ theme }) => theme.textFieldHover};
        }
        &.Mui-focused fieldset {
        border-color: ${({ theme }) => theme.text};
        }
    }
`;

export const CustomCard = styled(Card)`
    &.MuiCard-root{
        background-color: ${({ theme }) => theme.bg3};
        color: ${({ theme }) => theme.text};
        border: 1px solid #26293A;
        overflow: visible;
        border-radius:10px;
    }

    @media screen and (max-width: 768px) {
    }
`;

export const CustomCardContent = styled(CardContent)`
    display:grid;
    grid-template-columns: ${({ gcolumns }) => (gcolumns ? gcolumns : '1fr')};
    grid-column-gap:2.4rem;

    @media screen and (max-width: 768px) {
    }
`;

export const CardHeading = styled.div`
    font-size:1.2rem;

    @media screen and (max-width: 768px) {
    }
`;

export const CustomButton = styled(Button)`
	&.MuiButton-root{
		color: ${({ theme }) => theme.text};
		border: 1px solid ${({ theme }) => theme.text};

		&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
		background-color: ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.bg3};
		border: 1px solid ${({ theme }) => theme.bg3};
		/* box-shadow: 5px 5px 5px #aaaaaa; */
	}
	}
	
    @media screen and (max-width: 768px) {
    }
`;