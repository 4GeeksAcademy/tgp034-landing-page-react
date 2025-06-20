import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
//create your first component
const Home = () => {
	return (
		<div id="body" className="d-flex flex-column container-fluid h-100 p-0 m-0">
			<Navbar/>
			<div id="content" className="container p-0">
				<Jumbotron/>
				<Cards/>
			</div>
			<div className="d-flex">
				<nav id="footer" className="p-3 w-100 navbar bg-dark justify-content-center align-items-center" data-bs-theme="dark">
					<p id="footer-text" className="navbar-text text-center m-0">Copyright© My Website 2025</p>
				</nav>
			</div>
		</div>
	);
};

export default Home;