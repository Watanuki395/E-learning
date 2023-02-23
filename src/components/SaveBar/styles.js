import styled from "styled-components";


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