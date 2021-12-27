
import '../estilos/App.css';
import '../estilos/cards.css';
import '../estilos/header.css';
import '../estilos/footer.css';
import React from 'react';
import { Component } from "react";
import Headermain from '../componentes/Headermain';
import Cards from '../componentes/Cards';
import Footer from '../componentes/Footer';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Carousels from '../componentes/Carousels'





class Inicio extends Component {


  render() {
    return (<div className="principal-inicio">
      {/* header */}
      <Headermain />


      {/* contenido */}
      <div className="contenido-contenedor">
        <Cards />
      </div>

      <div className="footers">
        <Footer />
      </div>
    </div>)

  }

}

export default Inicio;