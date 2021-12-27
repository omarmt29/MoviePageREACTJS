import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCommentAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { getElementError } from "@testing-library/react";



class Headermain extends Component {

    addClass() {
        const datos = document.querySelector(".menu-container")
        datos.classList.toggle("menu-visible")
    }

    toggle() {
        const botonsito = document.querySelector(".principal-contenedor")
        const header = document.querySelector(".header-container")
        const contactanos = document.querySelector(".redes-container ")
        botonsito.classList.toggle("principal-contenedor-light")
        header.classList.toggle("header-container-light") 
    }

    render() {
        return <div className="header-container">

            <div className="titulo">
                <h1><b>Cine</b>Calidad</h1>
                <i><FontAwesomeIcon icon={faVideo} className="camera" /></i>
                <i><FontAwesomeIcon icon={faEllipsisV} className="menu" onClick={() => { this.addClass() }} /></i>
            </div>

            <div className="menu-container">
                <Link to='/' className="h2">Películas</Link>    
                <Link to='/categorias' className="h2">Ver trailers</Link>
                <Link to='/redes-sociales' className="h2" id="share">Contáctanos</Link>
                <h2 className="h2" id="switcher" onClick={() => {this.toggle()}}>SWITCH THEME</h2>

            </div>



        </div>
    }
}

export default Headermain;