import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
//create your first component
const Home = () => {
	return (
		<div id="body" className="d-flex flex-column container-fluid h-100 p-0 m-0">
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
			<div id="content" className="container p-0">
				<div id="jumbotron" className="p-2 pb-5 mb-4"> 
					<div className="container-fluid"> 
						<h1 className="fw-normal">
							A Warm Welcome!
						</h1> 
						<p className="col-md-12 fs-15">
							You can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
						</p> 
						<button className="btn btn-primary" type="button">
							Call to action!
						</button> 
					</div> 
				</div>
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