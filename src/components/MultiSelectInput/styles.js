import styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';



export const StyledAutocomplete = styled(Autocomplete)`
    & .MuiFormLabel-root.MuiInputLabel-root{
        color: ${({ theme }) => theme.text};
    }
    & .MuiOutlinedInput-root{
        color: ${({ theme }) => theme.text};
    }

    & .MuiAutocomplete-tag{
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.bg2};
    }

    & .MuiButtonBase-root.MuiChip-root .MuiChip-deleteIcon{
        color: ${({ theme }) => theme.text};
    }

    & .MuiButtonBase-root{
        color: ${({ theme }) => theme.text};
    }

    & .MuiAutocomplete-inputFocused {
        color: ${({ theme }) => theme.text};
    }
    
    & .MuiAutocomplete-paper{
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.text};
    }

`;
