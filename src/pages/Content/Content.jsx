import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
    Container,
    Section,
    TextWrapper,
    CustomCard,
    CustomCardContent,
    CardHeading,
    StyledTextField,
    CustomButton
} from "../../styles/globalStyles";
import { CustumAlert } from "../../components/Alert/Alert";
import {DataTable} from '../../components/Table/DataTable';
import { useLocation, useNavigate } from "react-router-dom";

import { StyledHeaderDiv, DataTableWrapper } from "./styles";


const Content = () => {
    
    let navigate = useNavigate();
	let location = useLocation();

    const columns = [
        {
            field: "titulo",
            headerName: "Título",
            flex: 0.6,
            editable: true,
        },
        {
            field: "alias",
            headerName: "Alias",
            flex: 0.3,
            editable: true,
        },
        {
            field: "visibilidad",
            headerName: "Visibilidad",
            type: "number",
            flex: 0.3,
            editable: true,
        },
    ];
    
    const rows = [
        { id: 1, alias: 'Snow', titulo: 'Jon', visibilidad: 'Publicado' },
        { id: 2, alias: 'Lannister', titulo: 'Cersei', visibilidad: 'Pendiente' },
        { id: 3, alias: 'Lannister', titulo: 'Jaime', visibilidad: 'Eliminado' },
        { id: 4, alias: 'Stark', titulo: 'Arya', visibilidad: 'Publicado' },
        { id: 5, alias: 'Targaryen', titulo: 'Daenerys', visibilidad: 'Eliminado' },
        { id: 6, alias: 'VLookUp', titulo: 'Excel', visibilidad: 'Publicado' },
        { id: 7, alias: 'Clifford', titulo: 'Ferrara', visibilidad: 'Publicado' },
        { id: 8, alias: 'Frances', titulo: 'Rossini', visibilidad: 'Pendiente' },
        { id: 9, alias: 'Roxie', titulo: 'Harvey', visibilidad: 'Publicado' },
    ];


    const handleClick = () =>{
        navigate('/content-add');
    }
    return (
        <Section height="100%" position="relative">
            <Container>
                <StyledHeaderDiv>
                    <CardHeading>Contenido del Blog</CardHeading>
                    <CustomButton onClick={handleClick}>Crear Contenido</CustomButton>
                </StyledHeaderDiv>
                <CustomCard id="blog-entries">
                    <DataTable 
                        columns={columns} 
                        rows={rows} 
                        checkboxSelection={true}
                        pageSize={10}
                        cHeight={700}
                        toolBar={false}
                    />
                </CustomCard>

            </Container>
        </Section>
    )

}

export default Content;