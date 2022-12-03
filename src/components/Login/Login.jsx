import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { CustumAlert } from "../Alert/Alert";
import { Container, Section } from "../../globalStyles";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

import {
    LoginWrapper
    } from "./styles";

export function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, loginWithGoogle, resetPassword, persist, setPersist } = useAuth();
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const togglePersist = () => {
        setPersist((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);



    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (user.email && user.password){
                await login(user.email, user.password);
                navigate("/superadmin");
                setErrorMsg("")
                setError(false)
            }else{
                setError(true)
                setErrorMsg("El usuario y la contraseña son requeridos");
            }
        } catch (err) {
            setError(true)
            setErrorMsg("Usuario y/o contraseña no validos");
            console.log(err)
        }
    };

    const handleChange = ({ target: { value, name } }) =>{
        setUser({ ...user, [name]: value });
        setError(false)
        setErrorMsg("");
    }
        

    // const handleGoogleSignin = async () => {
    //     try {
    //     await loginWithGoogle();
    //     navigate("/superadmin");
    //     } catch (error) {
    //     setErrorMsg('Usuario y/o contraseña no validos');
    //     }
    // };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setErrorMsg("Write an email to reset password");
        try {
        await resetPassword(user.email);
        setErrorMsg("We sent you an email. Check your inbox");
        } catch (error) {
            setErrorMsg(error.message);
        }
    };

    return (
        <Section smPadding="50px 10px"  inverse id="about" margin="auto">
        <Container>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://picsum.photos/400/600)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Iniciar Sesion
                        </Typography>
                        <Box component="form" noValidate  sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                            error={error}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            error={error}
                        />
                        {error && <CustumAlert message={errorMsg} title={"Error"} severity={"error"}/>}
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" 
                            onChange={togglePersist} 
                            checked={persist}
                            color="primary" />}
                            label="Recordarme"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(values)=>{handleSubmit(values)}}
                        >
                            Iniciar
                        </Button>
                        {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleGoogleSignin}
                            startIcon={<GoogleIcon />}
                        >
                            Iniciar con Google
                        </Button> */}
                        <Grid container>
                            <Grid item xs>
                            <Link 
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    navigate("/forgotpass");
                                }}>
                                ¿Olvide mi contraseña?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link 
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    navigate("/register");
                                }}>
                                ¿No tienes una cuenta? Registrate.
                            </Link>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
        </Container>
        </Section>
    );
}
