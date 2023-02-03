import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Registrarse from "./Components/Registrar"
import HomePage from "./Components/Homepage"
import Canciones from "./Components/Canciones"
import Ingresar from "./Components/Ingresar"
import Contacto from "./Components/contacto"
import Navbar from "./Components/Navbar"
import FooterPage from "./Components/FooterPage"
import NotFound from "./Components/NotFoundPage"




export default function App(){
		return (
			<>
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" element = {<HomePage />} />
					<Route path="/registrese" element = {<Registrarse />} />
					<Route path="/songs" element = {<Canciones />} />
					<Route path="/ingreso" element = {<Ingresar />} />
					<Route path="/contacto" element = {<Contacto />} />
					<Route path="/footer" element = {<FooterPage />} />
					<Route path="*" element = {<NotFound />} />
				</Routes>
				<FooterPage />
			</Router>
			</>
		);
}

