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
import { Dashboard } from "./pages/Admin/Dashboard";
import Profile from "./pages/Profile/Profile";
import Content from "./pages/Content/Content";
import ContentAdd from "./pages/Content/ContentAdd";
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
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/content" element={<Content />} />
					<Route path="/content-add" element={<ContentAdd />} />
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
