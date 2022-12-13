import styled, {css} from "styled-components";
import TextField from "@mui/material/TextField";


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