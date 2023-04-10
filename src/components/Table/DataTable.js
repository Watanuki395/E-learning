import { GridToolbar, esES } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

import {
    StyledDataGrid
} from './styles'

export function DataTable({columns, rows, checkboxSelection, pageSize, cHeight, toolBar}) {

    return (
        <Box sx={{ height: cHeight? cHeight : 500, width: '100%' }}>
            <StyledDataGrid
            checkboxSelection={checkboxSelection ? checkboxSelection : false}
            //getRowId={(row) => row.id_prd}
            rows={rows ? rows : undefined}
            columns={columns ? columns : undefined}
            loading={rows.length === 0}
            pageSize={pageSize? pageSize : 10}
            rowsPerPageOptions={[pageSize? pageSize : 10]}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            components={{
                Toolbar: toolBar ? GridToolbar : '',
            }}
            componentsProps={{
                panel: {
                sx: {
                    "& .MuiDataGrid-filterForm": {
                    bgcolor: "inherit",
                    },
                    "& .MuiDataGrid-panelWrapper": {
                    bgcolor: "#a1a0a86b",
                    },
                },
                },
            }}
            />
        </Box>
    );
}
