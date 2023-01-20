import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Container, Section, StyledTextField } from "../../styles/globalStyles";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { CustumAlert } from "../Alert/Alert";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  password2: "",
};

const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(5, `Mínimo 5 caracteres`)
    .max(25, `Máximo 25 caracteres`)
    .required("Campo Requerido"),
  lname: Yup.string()
    .min(5, `Mínimo 5 caracteres`)
    .max(25, `Máximo 25 caracteres`)
    .required("Campo Requerido"),
  email: Yup.string()
    .required("Campo Requerido")
    .email("Correo Electrónico Inválido")
    .max(255, `Máximo 255 caracteres`),
  password: Yup.string()
    .required("Campo Requerido")
    .min(8, `Mínimo 8 caracteres`),
  password2: Yup.string()
    .required("Campo Requerido")
    .min(8, `Mínimo  8 caracteres`)
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales"),
});

export const Register = () => {
  const ERROR_CODE_ACCOUNT_EXISTS = "auth/email-already-in-use";

  const ERROR_MSG_ACCOUNT_EXISTS = `
    Una cuenta con este correo electronico ya existe.
  `;

  const { signup } = useAuth();

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (vals) => {
    setError(false);
    const data = {
      fname: vals.fname,
      lname: vals.lname,
    };
    try {
      if (vals.email && vals.password) {
        await signup(vals.email, vals.password, data)
          .then(() => {
            setErrorMsg("");
            setError(false);
            navigate("/dashboard");
          })
          .catch((error) => {
            if ((error.code = ERROR_CODE_ACCOUNT_EXISTS)) {
              setErrorMsg(ERROR_MSG_ACCOUNT_EXISTS);
              setError(true);
            }
          });
      }
    } catch (error) {
      setErrorMsg(error);
      setError(true);
    }
  };

  return (
    <Section smPadding="50px 10px" inverse id="register" height="100vh">
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Grid container component="main" sx={{ height: "100%" }}>
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
                <Grid item xs={12} sm={8} md={5} elevation={6} >
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {error && (
                      <CustumAlert
                        message={errorMsg}
                        title={"Error"}
                        severity={"error"}
                      />
                    )}
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                      Registrarse
                    </Typography>
                    {isSubmitting && (
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                      </Box>
                    )}
                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Field
                            name="fname"
                            fullWidth
                            label="Nombre"
                            as={StyledTextField}
                            error={
                              Boolean(errors.fname) && Boolean(touched.fname)
                            }
                            helperText={Boolean(touched.fname) && errors.fname}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            name="lname"
                            fullWidth
                            label="Apellidos"
                            as={StyledTextField}
                            error={
                              Boolean(errors.lname) && Boolean(touched.lname)
                            }
                            helperText={Boolean(touched.lname) && errors.lname}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="email"
                            label="Correo Electronico"
                            type="email"
                            as={StyledTextField}
                            error={
                              Boolean(errors.email) && Boolean(touched.email)
                            }
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
                            error={
                              Boolean(errors.password) &&
                              Boolean(touched.password)
                            }
                            helperText={
                              Boolean(touched.password) && errors.password
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="password2"
                            label="Confirme la Contraseña"
                            type="password"
                            as={StyledTextField}
                            error={
                              Boolean(errors.password2) &&
                              Boolean(touched.password2)
                            }
                            helperText={
                              Boolean(touched.password2) && errors.password2
                            }
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Registrarme
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            ¿Ya tienes una cuenta? Inicia Sesion.
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
};
