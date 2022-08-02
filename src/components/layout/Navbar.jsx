import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
                <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                    <i className='fa-solid fa-bars'></i>
                </button>
                <div className="dropdown">
                    <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong className="text-white">Andrés Castro Mamani</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow w-100" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li className="dropdown-divider"></li>
                        <li><a href='/' className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
