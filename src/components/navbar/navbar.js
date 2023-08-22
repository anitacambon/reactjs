import CartWidget from "../cartwidget/cartwidget"
import logo_header from './img/logo_header.jpeg'
import './css/style.css'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className="navbar-logo" src={logo_header} alt="logo"></img>
                <a className="navbar-brand" href="#">Academia MAGNA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Actividades</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active" href="#">Escuelita</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active" href="#">Horarios</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tienda
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Indumentaria</a></li>
                                <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                <li><a className="dropdown-item" href="#">Abonos</a></li>
                                <li><a className="dropdown-item" href="#">Eventos</a></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}


export default NavBar