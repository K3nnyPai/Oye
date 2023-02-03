import { NavLink} from "react-router-dom"
import React, { useState } from 'react';
// import './Navbar.css'
import Contacto from "./contacto"

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
            <figure>
              <img src="imagenes/logo.png" alt="Logo" />
            </figure>
        </NavLink>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>   
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  id="title"
                  >OYE</NavLink>
              </li>
            </ul>
          <div className="navbar-nav me-auto">
            <div className="nav-link">
            <NavLink className= {({ isActive }) => (isActive ? "active" : "noActive")} to="/">Inicio</NavLink>
            </div>
            <div className="nav-link">
            <NavLink className= {({ isActive }) => (isActive ? "active" : "noActive")} to="/songs">Canciones</NavLink>
            </div>
          </div>
            <div className='nav-link'> 
            <button onClick={handleShow} className= 'contact' type="button">Contacto</button>
            </div>  
            <div className="nav-link">
            <NavLink  className= {({ isActive }) => (isActive ? "active" : "noActive")} to="/ingreso">Iniciar sesion</NavLink>      
            </div>
            <div className="nav-link">
            <NavLink className= {({ isActive }) => (isActive ? "active" : "noActive")} to="/registrese">Registrarse</NavLink>
            </div>                                       
          </div>
          </div>
      </nav>
      <Contacto show={show} handleClose={handleClose}/>
      </>
    )
}
