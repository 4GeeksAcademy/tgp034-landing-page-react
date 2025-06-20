import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
//create your first component
const Footer = () => {
    return (
        <div className="d-flex">
            <nav id="footer" className="p-3 w-100 navbar bg-dark justify-content-center align-items-center" data-bs-theme="dark">
                <p id="footer-text" className="navbar-text text-center m-0">Copyright© My Website 2025</p>
            </nav>
        </div>
    );
};

export default Footer;
