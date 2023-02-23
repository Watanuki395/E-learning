import styled from "styled-components";
import Avatar from "@mui/material/Avatar";



export const ProfileGrid = styled.div`
    display:grid;
    grid-template-columns: 9fr 4fr;
    column-gap:2rem;
    padding-top:1.5rem;

    @media screen and (max-width: 1120px) {
        grid-template-columns: 1fr;
        row-gap:2rem;
    }
`;

export const StyledAvatar = styled(Avatar)`
cursor:pointer;

&.MuiAvatar-root{
    width: 120px;
    height:120px;
    font-size:xx-large;
}

&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}

@media screen and (max-width: 768px) {
    &.MuiAvatar-root{
    width: 90px;
    height:90px;
    font-size:large;
    }
}
`;


export const StyledFormGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
