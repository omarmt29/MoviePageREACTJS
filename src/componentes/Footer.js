import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCommentAlt, faEllipsisV, faFan } from '@fortawesome/free-solid-svg-icons'
import trailer from '../videos/trailer.mp4'
import Matrix from '../videos/matrix.mp4'
import Trailer2 from '../videos/trailer2.mp4'



class Footer extends Component {

    mute() {
        console.log("mmg");
    }

    render() {
        return (<div className='footer-container'>
            <div className='parrafo'>
                <div className='logofooter'> <h2> CineCalidad </h2>
                    <i><FontAwesomeIcon icon={faVideo} className="camera" /></i>
                </div>
                <p> Ver películas online. Cine en casa gratis. Películas online. Excelente calidad brrip (720p/1080p).</p>
                <h2>Muchos más</h2>
              <div className='videocontenedor'>

              <video className='video' onClick={this.mute()}
                    autoPlay
                    loop
                    controls muted
                >
                    <source src={trailer} />

                </video>
                <video className='video' onClick={this.mute()}
                    autoPlay
                    loop
                    controls muted
                >
                    <source src={Matrix} />

                </video>
                <video className='video' onClick={this.mute()}
                    autoPlay
                    loop
                    controls muted
                >
                    <source src={Trailer2} />

                </video>
               
               

              </div>
                


            </div>
        </div>)
    }

}

export default Footer;
