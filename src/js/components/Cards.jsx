import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../../styles/index.css';

const Cards = () => {
  //Datos comunes de la tarjeta
  const cardData = {
    imgSrc: "https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
    link: "#",
  };

  //Creamos un array
  const cardsArray = Array.from({ length: 4 });

  return (
    <div
      id="cards"
      className="d-flex align-items-center justify-content-evenly
                 flex-column flex-sm-row flex-wrap gap-4 w-100 pb-5"
    >
      {cardsArray.map((_, i) => (
        <div className="card" key={i}>
          <img
            src={cardData.imgSrc}
            className="card-img-top"
            alt={cardData.title}
          />
          <div className="card-body d-flex flex-column align-items-center">
            {/* Si quieres numerar los títulos: */}
            <h5 className="card-title text-center">
              {cardData.title} {i + 1}
            </h5>
            <p className="card-text text-center">{cardData.text}</p>
            <a href={cardData.link} className="btn btn-primary mb-2">
              Find out more!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
