    import { useState, useEffect } from "react";
    import { useNavigate } from "react-router-dom";
    import { useAuth } from "../../context/AuthContext";
    import { CustumAlert } from "../Alert/Alert";
    import { 
        Container, 
        Section, 
        StyledTextField } from '../../styles/globalStyles';
    import Avatar from "@mui/material/Avatar";
    import Button from "@mui/material/Button";
    import TextField from "@mui/material/TextField";
    import Link from "@mui/material/Link";
    import Paper from "@mui/material/Paper";
    import Box from "@mui/material/Box";
    import LinearProgress from '@mui/material/LinearProgress';
    import Grid from "@mui/material/Grid";
    import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
    import Typography from "@mui/material/Typography";
    import * as Yup from "yup";
    import { Formik, Form, Field } from "formik";

    const initialValues = {
    email: "",
    password: "",
    };

    const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Campo Requerido")
        .email("Correo Electrónico Inválido")
        .max(255, `Máximo 255 caracteres`)
        .min(5, `Minimo 5 caracteres`),
    password: Yup.string()
        .required("Campo Requerido")
        .min(8, `Mínimo 8 caracteres`),
    });

    export function Login() {
        const ERROR_CODE_WRONG_PASS = "auth/wrong-password";

        const ERROR_MSG_WRONG_PASS = `Usuario y/o contraseña no validos`;

    const { login, resetPassword, persist, setPersist } = useAuth();
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);

    const navigate = useNavigate();

    const handleSubmit = async (vals) => {
        setError(false);
        try {
        if (vals.email && vals.password) {
            await login(vals.email, vals.password).then(()=>{
                setErrorMsg("");
                setError(false);
                navigate("/dashboard");
                setPersist(true);
            }).catch((error)=>{
                console.log(error);
                    if(error.code = ERROR_CODE_WRONG_PASS){
                        setErrorMsg(ERROR_MSG_WRONG_PASS);
                        setError(true);
                    }
                })
            }
        } catch (err) {
        setError(true);
        setErrorMsg(err);
        console.log(err);
        }
    };


    const handleResetPassword = async (vals) => {
        if (!vals.email) return setErrorMsg("Write an email to reset password");
        try {
        await resetPassword(vals.email);
        setErrorMsg("We sent you an email. Check your inbox");
        } catch (error) {
        setErrorMsg(error.message);
        }
    };

    return (
        <Section smPadding="50px 10px" inverse id="login" height="100vh">
        <Container>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
            >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                <Grid container component="div" sx={{ height: "100%"}}>
                    <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(https://picsum.photos/400/600)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                        t.palette.mode === "light"
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    />
                    <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    elevation={6}
                    
                    >
                    <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4">
                        Iniciar Sesion
                        </Typography>
                        {isSubmitting && (
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress />
                    </Box>
                  )}
                        <Box sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Field
                                fullWidth
                                name="email"
                                label="Correo Electronico"
                                type="email"
                                as={StyledTextField}
                                error={ Boolean(errors.email) && Boolean(touched.email) }
                                helperText={Boolean(touched.email) && errors.email}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <Field
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                as={StyledTextField}
                                error={ Boolean(errors.password) && Boolean(touched.password) }
                                helperText={ Boolean(touched.password) && errors.password }
                            />
                            </Grid>
                            <Grid item xs={12}>
                            {error && (
                            <CustumAlert
                            message={errorMsg}
                            title={"Error"}
                            severity={"error"}
                            />
                            )}
                        </Grid>
                        </Grid>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                navigate("/forgotpass");
                                }}
                            >
                                ¿Olvide mi contraseña?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                navigate("/register");
                                }}
                            >
                                ¿No tienes una cuenta? Registrate.
                            </Link>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
                </Form>
            )}
            </Formik>
        </Container>
        </Section>
    );
    }
