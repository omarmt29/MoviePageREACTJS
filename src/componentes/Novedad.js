
import react from "react";
import Peliculasv2 from '../datos/Peliculasv2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCalendarAlt, faUser, faStar } from '@fortawesome/free-solid-svg-icons'




export default class Novedad extends react.Component {
    state = {
        Peliculasv2: Peliculasv2
    }

    render() {

        return <div className="contenedor-cards">
            {this.state.Peliculasv2.map(e => <div onClick={()=> window.open(e.url, "_blank")} className="cards" key={e.id} >
                <img src={"https://image.tmdb.org/t/p/w300" + e.poster_path} alt="Imagen de pelicula"></img>
                <h2 className="titulos">{e.title}</h2>
                <p className="detalles">{e.overview}</p>
                <p className="categorias">{e.release_date} <i><FontAwesomeIcon icon={faCalendarAlt}/></i></p>
                <p className="voto"> {e.vote_average} <i><FontAwesomeIcon icon={faStar}/></i></p>
                <p className="count"> {e.vote_count}<i><FontAwesomeIcon icon={faUser}/></i></p>

            </div>)}
        </div>
    }
}