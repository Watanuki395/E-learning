import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";

import {
    StyledDataGrid
} from './styles'

export function DataTable({columns, rows, checkboxSelection, pageSize}) {

    return (
        <StyledDataGrid
        checkboxSelection={checkboxSelection ? checkboxSelection : false}
        //getRowId={(row) => row.id_prd}
        rows={rows ? rows : undefined}
        columns={columns ? columns : undefined}
        pageSize={pageSize? pageSize : 10}
        rowsPerPageOptions={[pageSize? pageSize : 10]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{
            Toolbar: GridToolbar,
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
    );
}
