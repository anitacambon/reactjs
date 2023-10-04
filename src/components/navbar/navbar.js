import CartWidget from '../cartwidget/cartwidget'
import logo_header from './img/logo_header.jpeg'
import './css/style.css'
import { NavLink } from "react-router-dom"


const routes = [
    {
        path: '/ver-todo',
        text: 'Ver todo'
    },
    {
        path: '/categoria/indumentaria',
        text: 'Indumentaria',
    },
    {
        path: '/categoria/accesorios',
        text: 'Accesorios'
    },
    {
        path: '/categoria/abonos',
        text: 'Abonos'
    },
    {
        path: '/categoria/eventos',
        text: 'Eventos'
    },

]


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-logo" src={logo_header} alt="logo"></img>
                <NavLink className="navbar-brand" to='/' >Academia MAGNA</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/actividades' >Actividades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to='/escuelita' >Escuelita</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to='/horarios' >Horarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to='/contacto' >Contacto</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link active dropdown-toggle" to='/tienda' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tienda
                            </NavLink>
                            <ul className="dropdown-menu">
                                {
                                    routes.map((route) => (
                                        <li><NavLink className="dropdown-item" to={route.path}>{route.text} </NavLink></li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li ></li>
                        
                    </ul>
                    <CartWidget />
                </div>
            </div >
            
        </nav >
    )
}





export default NavBar


