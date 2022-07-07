import React from 'react'

export const Sidebar = () => {
    return (
        <div className="offcanvas offcanvas-start d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" tabIndex="-1" id="sidebar" aria-labelledby="offcanvasWithBackdropLabel" style={{ width: 280 }}>
            <a href="/" className="mb-md-0 text-center text-white text-decoration-none">
                <span className='fs-4'><strong>UPTASK</strong>MERN</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto" >
                <li>
                    <a href='/' to="/" className="text-white nav-link">
                        <i className="fa-solid fa-house me-2"></i>Inicio
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong className="text-white">Andrés</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="/">Configuraciones</a></li>
                    <li><a className="dropdown-item" href="/">Perfil</a></li>
                    <li className="dropdown-divider"></li>
                    <li><a href='/' className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Cerrar Sesion</a></li>
                </ul>
            </div>
        </div>
    )
}
