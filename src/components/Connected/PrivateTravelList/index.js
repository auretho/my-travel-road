import React from 'react';
import './styles.scss';
import card from '../PrivateTravelList/mountains.jpg';
import card2 from '../PrivateTravelList/foret.jpg';

const PrivateTravelList = ({ data }) => {
    return(
        <div className="travel">
            <div className="travel-navigation">
                <nav>
                    <ul>
                        <li className="travel-list"><a className="travel-lien" href="#Tous">Tous</a></li>
                        <li className="travel-list"><a className="travel-lien" href="#En cours">En cours </a></li>
                        <li className="travel-list"><a className="travel-lien" href="#Archivé">Archiver</a></li>
                    </ul>
                </nav>
            </div>

            <div className="travel-navigation">
                    <select className="travel-nav">
                        <option className="travel-list">Trier par</option>
                        <option className="travel-list">Date</option>
                        <option className="travel-list">Pays</option>
                        <option className="travel-list">Catégorie</option>
                    </select>
            </div>


            <div className="travel-card">
                <img className="travel-avatar"src={card} alt=""/>
                <div className="travel-img">
                    <h4>Road Trip au Canada</h4>
                    <p>Départ: 27 juillet 2020</p>
                    <button className="travel-supp">Archiver</button>
            </div>
            
                       
                <img className="travel-avatar"src={card2} alt=""/>
                <div className="travel-img">
                    <h4>Trek en Forêt</h4>
                    <p>Départ: 12 mars 2021</p>
                    <button className="travel-supp">Archiver</button>
                </div>
                <button className="travel-btn">Nouveau voyage +</button>
            </div>
                
            
            
            
        </div>
    );
}

export default PrivateTravelList;