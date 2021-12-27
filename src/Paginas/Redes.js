import React from 'react';
import Headermain from '../componentes/Headermain'
import Integrantes from '../datos/integrantes.json'
import Footer from '../componentes/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

class Redes extends React.Component {

    state = {
        Integrantes: Integrantes
    }

    render() {
        return <div className='redes-container'>
            <div className = "h"> <Headermain /> </div> 

            <div className="cuadro">
                {this.state.Integrantes.map(e => <div className="tarjetas">

                    <img src={e.foto} className="foto"></img>

                    <h2>{e.Nombre}</h2>
                    <p>{e.Matricula}</p>
                    <p>{e.Gmail}</p>

                </div>)}



            </div>






           <div className = "f"> <Footer/> </div> 
           
        </div>
    }

}

export default Redes;