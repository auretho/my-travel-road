import React from 'react';
import './styles.scss';
import card from '../ConsultTravel/mountains.jpg';
import card2 from '../ConsultTravel/foret.jpg';



const ConsultTravel = () => {
    return(
        <div className="travel">
            <div className="travel-navigation">
                <nav>
                    <ul>
                        <li className="travel-list"><a href="#Tous">Tous</a></li>
                        <li className="travel-list"><a href="#En cours">En cours </a></li>
                        <li className="travel-list"><a href="#Archivé">Archivé</a></li>
                    </ul>
                </nav>
            </div>

            <div className="travel-nav">
                <nav>
                    <h6>Trier par</h6>
                    <ul>
                        <li className="travel-list"><a href="#Date">Date</a></li>
                        <li className="travel-list"><a href="#Pays">Pays </a></li>
                        <li className="travel-list"><a href="#Catégorie">Catégorie</a></li>
                    </ul>
                </nav>
            </div>

            <div className="travel-card">
                        <img src={card} alt="Avatar"/>
                        <div class="travel-img">
                            <h4>Road Trip au Canada</h4>
                            <p>Départ: 27 juillet 2020</p>
                            <button>Archiver</button>
                        </div>
                        
                    

                    
                        <img src={card2} alt="Avatar"/>
                        <div class="travel-img">
                            <h4>Trek en Forêt</h4>
                            <p>Départ: 12 mars 2021</p>
                            <button>Archiver</button>
                        </div>
            </div>
            
            
        </div>
    );
}

export default ConsultTravel;