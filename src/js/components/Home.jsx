import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div id="body" className="d-flex flex-column container-fluid h-100 p-0 m-0">
			<Navbar />
			<div id="content" className="container p-0">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;