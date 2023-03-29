import styled from "styled-components";
import { ImSpinner6 } from "react-icons/im";



export const StyledButtonGrid = styled.div`
    display:flex;
    flex-direction: row;
    gap:2rem;
    padding-top:1.5rem;
    justify-content: flex-end;

`;

export const SaveBarContainer = styled.div`
    /* Posicionar abajo */
    position: absolute;
    bottom: 0;
    left:0;
    padding-left:3rem;
    padding-right:3rem;
    z-index: 10;
    width:100%;

`;

export const CustomSpinner = styled(ImSpinner6)`
    height: 20px;
    width: 20px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        } 
        100% {
            transform: rotate(360deg);
        }
    }
`;