import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../../styles/index.css';
import Card from "./Card";

const Cards = () => {

const cardsData = [
    {
      imgSrc: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/12/28/658d3cc8a1698.jpeg?resize=1024,683",
      title: "Panda gigante",
      text: "El panda gigante es conocido por su pelaje blanco y negro y su dieta casi exclusivamente de bambú.",
      link: "/animales/panda",
    },
    {
      imgSrc: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2018/04/19/tigre-caminando.jpg?ramen_itok=iqwQftIcTf",
      title: "Tigre",
      text: "El tigre es el felino más grande del mundo, famoso por sus franjas anaranjadas y negras.",
      link: "/animales/tigre",
    },
    {
      imgSrc: "https://www.selwo.es/content/dam/swa/images/descubre-el-zoo/especies-y-territorios/animales/panda-rojo/Panda-rojo-Selwo-Aventura-13.jpg",
      title: "Panda rojo",
      text: "El panda rojo, más pequeño que el gigante, vive en los bosques de Asia y come bambú y frutas.",
      link: "/animales/panda-rojo",
    },
    {
      imgSrc: "https://static.nationalgeographic.es/files/styles/image_3200/public/01-waq-animal-hoarders-nationalgeographic_1902487.webp?w=1023&h=682&q=100",
      title: "Ardilla",
      text: "Las ardillas son roedores ágiles, famosas por recolectar y almacenar bellotas y frutos secos.",
      link: "/animales/ardilla",
    },
  ];
  
  return (
    <div
      id="cards"
      className="
        d-flex align-items-center justify-content-evenly
        flex-column flex-sm-row flex-wrap gap-4 w-100 pb-5
      "
    >
      {cardsData.map((card, i) => (
        <Card
          key={i}
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Cards;