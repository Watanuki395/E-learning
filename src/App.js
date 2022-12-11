import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRote";
//import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import LayoutSB from "./components/Layout/Layout";
import Layout from "./components/mLayout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Admin } from "./components/Admin/Admin";
import Missing from "./components/Missing/Missing";

export const ThemeContext = React.createContext(null);

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [theme, setTheme] = useState("dark");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
		<ThemeProvider theme={themeStyle}>
			<GlobalStyle />
			<LayoutSB toggle={toggle}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/* we want to protect these routes */}
				<Route element={<ProtectedRoute />}>
					<Route path="/superadmin" element={<Admin />} />
					{/* <Route path="/menu" element={<MenuPage title="Lista de Categorias"/>} />
							<Route path='/new/product' element={<NewProductPage title="Añadir Nuevo Producto"/>} />
							<Route path='/CategoryByProduct/:id_cat' element={<CategoryByProductPage/>} />
							<Route path='/Product/:id_cat' element={<ProductPage/>} />
							<Route path='/Product' element={<ProductPage/>} /> */}
				</Route>
				{/* catch all */}
				<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
			</LayoutSB>
		</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
