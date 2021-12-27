import peliculas from '../datos/peliculas.json';
import React, { Component } from "react";



class Cards extends Component  {
    state = {
      peliculas: peliculas
    }
    
    render() {
      return <div className = "contenedor-cards">
        {this.state.peliculas.map(e => <div onClick={()=> window.open(e.url, "_blank")} className = "cards">
          <img src={e.imagen} alt="Imagen de pelicula"></img>
          <h2 className="titulos">{e.titulo}</h2>
          <p className="detalles">{e.descripcion}</p>
          <p className="categorias">{e.categoria}</p>
        </div>) }
      </div>
    }
}

export default Cards;