import React from 'react';
import GlobalStyle from './globalStyles';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRote";

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Admin } from "./components/Admin/Admin";



function App() {
	return (
		<AuthProvider>
		<GlobalStyle />
		<Navbar />

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/pricing" element={<Pricing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route
			path="/superadmin"
			element={
				<ProtectedRoute>
				<Admin />
				</ProtectedRoute>
			}
			/>
		</Routes>
		
		</AuthProvider>
	);
}

export default App;
