import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { Container, Section, TextWrapper } from "../../styles/globalStyles";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import {DataTable} from '../../components/Table/DataTable'


import {
    DashboardHeader,
    DashboardGrid,
    ChartGrid,
    TableWrapper,
    CustomCard,
    CustomCardContent,
    CardHeading,
    StyledDoneAllOutlinedIcon,
    StyledTrendingUpOutlinedIcon,
    IconContainer,
    CardContentWrapper,
    DataTableWrapper
} from './styles'

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 222 },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const pedidosArray = [
    {
        idPed:123456,
        numDays:2
    },
    {
        idPed:222222,
        numDays:3
    },
    {
        idPed:333333,
        numDays:1
    },
    {
        idPed:4444444,
        numDays:0
    },
    {
        idPed:55555555,
        numDays:10
    },
];

export function Dashboard() {
    const { logout, user, setPersist, persist} = useAuth();

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);
    return (
        
            <Section height="100%">
                <Container>
                    <DashboardHeader>
                        <TextWrapper>Hola, <strong>{user.email}</strong></TextWrapper>
                        <TextWrapper size="smaller">Aquí hay información que recopilamos para ti</TextWrapper>
                    </DashboardHeader>
                    <DashboardGrid>
                        <div>
                            <ChartGrid>
                                <CustomCard>
                                    <CustomCardContent>
                                        <CardContentWrapper>
                                        <CardHeading>Ventas</CardHeading>
                                        <TextWrapper size="small" color="grey">Hoy</TextWrapper>
                                        <TextWrapper align="right">
                                            $
                                            <span>{"1023"}</span>
                                        </TextWrapper>
                                        </CardContentWrapper>
                                        <IconContainer><StyledTrendingUpOutlinedIcon/></IconContainer>

                                    </CustomCardContent>
                                </CustomCard>
                                <CustomCard>
                                        <CustomCardContent>
                                        <CardContentWrapper>
                                            <CardHeading>Completos</CardHeading>
                                            <TextWrapper size="small" color="grey">Hoy</TextWrapper>
                                            <TextWrapper align="right">
                                            $
                                            <span>{"33"}</span>
                                        </TextWrapper>
                                        </CardContentWrapper>
                                        <IconContainer><StyledDoneAllOutlinedIcon/></IconContainer>
                                        </CustomCardContent>
                                </CustomCard>
                            </ChartGrid>
                            <TableWrapper>
                                <CustomCard>
                                    <CardContent>
                                            <CardHeading>Productos principales</CardHeading>
                                            {!rows? 
                                                <span>no se encontraron productos</span>
                                                :
                                                <DataTableWrapper>
                                                    <DataTable 
                                                    columns={columns} 
                                                    rows={rows} 
                                                    checkboxSelection={false}
                                                    pageSize={5}
                                                    />
                                            </DataTableWrapper>
                                            }
                                    </CardContent>
                                </CustomCard>
                            </TableWrapper>
                        </div>
                        <CustomCard>
                            <CardContent>
                                <CardHeading>Actividad</CardHeading>
                                <List>
                                    {pedidosArray.map(({idPed, numDays})=>(
                                    <ListItem key={idPed}>
                                        <CardContentWrapper>
                                            <TextWrapper align="left">
                                                El pedido #
                                                {idPed}
                                                <span> fue enviado con exito</span>
                                            </TextWrapper>
                                            <TextWrapper size="small" color="grey">{`${
                                                                                        numDays === 0 ?
                                                                                        "Justo hoy" :
                                                                                        numDays === 1 ?
                                                                                        "Un dia atras":
                                                                                        numDays + " dias atras"
                                                                                    }`
                                                                                }
                                            </TextWrapper>
                                        </CardContentWrapper>
                                    </ListItem>
                                    )
                                    )
                                    }
                                </List>
                            </CardContent>
                        </CustomCard>
                        
                    </DashboardGrid>
                </Container>
            </Section>
        
    );
}
