import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div id="body" className="d-flex flex-column container-fluid h-100 p-0 m-0">
			<Navbar/>
			<div id="content" className="container p-0">
				<Jumbotron/>
				<div id="cards" className="d-flex align-items-center justify-content-evenly flex-column flex-sm-row flex-wrap gap-4 w-100 pb-5">
					<div className="card">
						<img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="..."/>
						<div className="card-body d-flex flex-column align-items-center">
							<h5 className="card-title text-center">Card title</h5>
							<p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary mb-2">Find out more!</a>
						</div>
					</div>
					<div className="card">
						<img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="..."/>
						<div className="card-body d-flex flex-column align-items-center">
							<h5 className="card-title text-center">Card title</h5>
							<p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary mb-2">Find out more!</a>
						</div>
					</div>
					<div className="card">
						<img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="..."/>
						<div className="card-body d-flex flex-column align-items-center">
							<h5 className="card-title text-center">Card title</h5>
							<p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary mb-2">Find out more!</a>
						</div>
					</div>
					<div className="card">
						<img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="..."/>
						<div className="card-body d-flex flex-column align-items-center">
							<h5 className="card-title text-center">Card title</h5>
							<p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn btn-primary mb-2">Find out more!</a>
						</div>
					</div>
				</div>
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