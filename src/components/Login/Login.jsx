import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert/Alert";
import { Container, Section } from "../../globalStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Login() {
    const [email, setUser] = useState("");
    const [password, setPwd] = useState("");
    const { login, loginWithGoogle, resetPassword, persist, setPersist } = useAuth();
    const [error, setError] = useState("");

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .required("Campo Requerido")
        .email("Correo Electrónico Inválido")
        .max(255, `Máximo 255 caracteres`),
        password: Yup.string().required("Campo Requerido"),
    });

    const initialValues = {
        email,
        password,
    };

    const togglePersist = () => {
        setPersist((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);



    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
        await login(email, password);
        navigate("/superadmin");
        } catch (error) {
        setError(error.message);
        }
    };

    // const handleChange = ({ target: { value, name } }) =>
    //     setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
        await loginWithGoogle();
        navigate("/superadmin");
        } catch (error) {
        setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!email) return setError("Write an email to reset password");
        try {
        await resetPassword(email);
        setError("We sent you an email. Check your inbox");
        } catch (error) {
        setError(error.message);
        }
    };

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="about">
        <Container>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
            >
            {({ isSuccess, message }) => (
                <Form>
                <section className="container-fluid bg vh100">
                    <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <div>
                        <div className="form-container">
                            <div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                Email
                                </label>
                                <Field
                                type="text"
                                className="form-text form-control"
                                name="email"
                                id="email"
                                //value={email}
                                //ref={userRef.current}
                                //onChange={(e) => setUser(e.target.value)}
                                placeholder=""
                                />
                                <ErrorMessage
                                name="email"
                                component="div"
                                className="field-error text-danger"
                                />
                                <div id="emailHelp" className="form-text">
                                Nunca compartiremos tu correo con nadie más.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                Password
                                </label>
                                <Field
                                type="password"
                                className="form-text form-control"
                                name="password"
                                id="password"
                                //value={password}
                                //ref={userRef}
                                //onChange={(e) => setPwd(e.target.value)}
                                placeholder=""
                                />
                                <ErrorMessage
                                name="password"
                                component="div"
                                className="field-error text-danger"
                                />
                            </div>
                            <span id="forgotPass" className="haveAccount">
                                <Link to="forgotpass" className="forgot">
                                Olvidé mi contraseña
                                </Link>
                            </span>
                            <div className="d-grid gap-2 py-3">
                                <button
                                className="btn btn-dark btn-block mb-2"
                                type="sumit"
                                >
                                Entrar
                                </button>
                                <div className="persistCheck">
                                <input
                                    type="checkbox"
                                    id="persist"
                                    onChange={togglePersist}
                                    checked={persist}
                                />
                                <label htmlFor="persist">
                                    Confiar en este dispositivo
                                </label>
                                </div>
                            </div>
                            <div>
                                <span className="haveAccount">
                                ¿No tengo una cuenta?
                                <Link to="register">Registrarme</Link>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </section>
                </section>
                </Form>
            )}
            </Formik>
        </Container>
        </Section>
    );
}
