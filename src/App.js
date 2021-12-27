import './estilos/App.css';
import './estilos/cards.css';
import './estilos/header.css';
import './estilos/footer.css';
import './estilos/redess.css';
import './estilos/Novedades.css'
import React from 'react';
import { Component } from "react";
import Novedades from './Paginas/Novedades';
import Inicio from '../src/Paginas/Inicio';
import Redes from './Paginas/Redes';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (<div className="principal-contenedor">  
      <Router>
        <Routes>
          <Route exact path='/' element={<Inicio />}></Route>
          <Route path='/categorias' element={<Novedades />}></Route>
          <Route path='/redes-sociales' element={<Redes />}></Route>
        </Routes>
      </Router>

    </div>)
  }
}
 
