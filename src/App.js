import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRote";
import { ThemeProvider } from "styled-components";
import LayoutSB from "./components/Layout/Layout";

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
import Navbar from "./components/Navbar/Navbar";

export const ThemeContext = React.createContext(null);

function App() {

	const [theme, setTheme] = useState("dark");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
		<ThemeProvider theme={themeStyle}>
			<GlobalStyle />

			<LayoutSB >
			<Navbar />
			<Routes>

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
				
			</Routes>
			</LayoutSB>
		</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
