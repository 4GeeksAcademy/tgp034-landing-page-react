import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
//create your first component
const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
			<div id="navbar" className="container-fluid">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" >Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;