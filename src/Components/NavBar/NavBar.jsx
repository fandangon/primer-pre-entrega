import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light estilo_barra ">
            <div className="container-fluid ">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Cuidado Personal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Suplementos y Nutrición</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bebe y Maternidad</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dermocosmetica</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfumes y Fragancias</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="#">Farmatips</a>
                            </li>
                            <li className="nav-item">
                                <a className
                                ="nav-link" href="#">Conocenos</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">Contacto</a>
                            </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
            
        </nav>
  )
}
export default NavBar


