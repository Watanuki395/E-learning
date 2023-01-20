import styled from "styled-components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


export const StyledDataGrid = styled(DataGrid)`

            border: none;
            color: inherit;
            //backgroundColor: 'rgba(20, 19, 19, 0.082)',

            & .MuiDataGrid-main{
            color: ${({ theme }) => theme.text};
            }

            & .MuiTablePagination-root{
            color: ${({ theme }) => theme.text};
            }

            & .MuiDataGrid-booleanCell{
            color: ${({ theme }) => theme.text};
            }

            & .MuiDataGrid-cell:focus{
            outline: ${({ theme }) => theme.text};
            }

            & .MuiButtonBase-root{
            color: ${({ theme }) => theme.text};
            }

`;