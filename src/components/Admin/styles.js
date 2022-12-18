import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

export const DashboardHeader = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom:4rem;
    justify-content:space-between;
`;

export const DashboardGrid = styled.div`
    display:grid;
    grid-template-columns: 9fr 4fr;
    column-gap:2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap:2rem;
    }
`;

export const ChartGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:1.5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap:2rem;
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
    grid-template-columns:1fr 64px;
    grid-column-gap:2.4rem;

    @media screen and (max-width: 768px) {
    }
`;

export const CardHeading = styled.div`
    font-size:1.2rem;

    @media screen and (max-width: 768px) {
    }
`;

export const StyledTrendingUpOutlinedIcon = styled(TrendingUpOutlinedIcon)`
    &.MuiSvgIcon-root{
        display:inline-block;
        width:1em;
        height:1em;
        color: ${({ theme }) => theme.text};
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        user-select:none;
    }

    @media screen and (max-width: 768px) {
    }
`;

export const StyledDoneAllOutlinedIcon = styled(DoneAllOutlinedIcon)`
    &.MuiSvgIcon-root{
        display:inline-block;
        width:1em;
        height:1em;
        color: ${({ theme }) => theme.text};
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        user-select:none;
    }

    @media screen and (max-width: 768px) {
    }
`;

export const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    padding:1.5rem 5px 1.5rem 5px;
    font-size: 54px;
    border-radius:8px;
    background-color:${({ theme }) => theme.bg2};

    @media screen and (max-width: 768px) {
    }
`;

export const CardContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    @media screen and (max-width: 768px) {
    }
`;