import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../../styles/index.css';

const Card = ({ imgSrc, title, text, link }) => (
  <div className="card">
    <img src={imgSrc} className="card-img-top" alt={title} style={{height:"200px",objectFit:"cover"}} />
    <div className="card-body d-flex flex-column align-items-center">
      <h5 className="card-title text-center">{title}</h5>
      <p className="card-text text-center">{text}</p>
      <a href={link} className="btn btn-primary mb-2">
        Find out more!
      </a>
    </div>
  </div>
);

export default Card;