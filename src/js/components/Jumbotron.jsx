import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../../styles/index.css'
//create your first component
const Jumbotron = () => {
    return (
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
    );
};

export default Jumbotron;