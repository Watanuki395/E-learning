import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { Container, Section, TextWrapper } from "../../styles/globalStyles";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


import {
    DashboardHeader,
    DashboardGrid,
    ChartGrid,
    CustomCard,
    CustomCardContent,
    CardHeading,
    StyledDoneAllOutlinedIcon,
    StyledTrendingUpOutlinedIcon,
    IconContainer,
    CardContentWrapper
} from './styles'

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

export function Admin() {
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
