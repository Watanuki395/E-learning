import { useAuth } from "../../context/AuthContext";
import { Container, Section } from "../../globalStyles";
import Button from '@mui/material/Button';

export function Admin() {
    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {
        await logout();
        } catch (error) {
        console.error(error.message);
        }
    };

    return (
        <Container smPadding="50px 10px"  inverse id="about" margin="auto">
            <Section>
            <Button variant="outlined" onClick={handleLogout}>Salir</Button>
            </Section>
        </Container>
        
    );
}
