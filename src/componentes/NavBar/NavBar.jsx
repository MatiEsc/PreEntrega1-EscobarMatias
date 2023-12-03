import CartWidget from "./CartWidget";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar">
            <div className="container-fluid d-flex justify-content-between align-items-center fondo">
                <a className="navbar-brand" href="#">
                    Motz-Encantos
                </a>
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
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Talles
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Productos
                            </a>
                            <ul className="dropdown-menu NavBar">
                                <li>
                                    <a className="dropdown-item " href="#">
                                        Bebes
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Niñ@s
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Accesorios
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
