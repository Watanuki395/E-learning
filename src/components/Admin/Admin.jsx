import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export function Admin() {
    const { logout, user, setPersist, persist} = useAuth();

    const handleLogout = async () => {
        try {
        await logout()
        setPersist(false);
        console.log('Logout successfully');
        } catch (error) {
        console.error(error.message);
        setPersist(false);
        }
    };

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);
    return (
        <Container smPadding="50px 10px"  inverse id="about" margin="auto">
            <Section>
            
            <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        }}
                    >
                        <Button variant="outlined" onClick={handleLogout}>Salir</Button>
                        <div>
                        <span>
                            {user.uid}
                        </span>
                        <span>
                            {user.email}
                        </span>
                        </div>
                    </Box>
            </Section>
        </Container>
        
    );
}
