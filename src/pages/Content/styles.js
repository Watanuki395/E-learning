import styled from "styled-components";
import Radio from '@mui/material/Radio';


///Content 
export const StyledHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom:15px;

    @media screen and (max-width: 970px) {
        flex-direction: column;
    }

`;

export const DataTableWrapper = styled.div`
    padding-top: 1rem;
    height: 700px;
    min-height:500px;

    @media screen and (max-width: 568px) {
        width:100%;
        height: 500px;
    }
`;


/// Add Content 

export const AddContentGrid = styled.div`
    display:grid;
    grid-template-columns: 9fr 4fr;
    column-gap:2rem;
    padding-top:1.5rem;

    @media screen and (max-width: 1120px) {
        grid-template-columns: 1fr;
        row-gap:2rem;
    }
`;

export const StyledFormGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top:1.5rem;
`;

export const StyledRadio = styled(Radio)`

    &.MuiButtonBase-root.MuiRadio-root {
        color: ${({ theme }) => theme.text};
    } 


`;