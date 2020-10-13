import React from 'react';
import './styles.scss';
import card from '../PrivateTravelList/mountains.jpg';
import card2 from '../PrivateTravelList/foret.jpg';

const PrivateTravelList = ({ allTravels }) => {
    console.log(allTravels)
    console.log(allTravels.archive)

    return(
        <div className="travel">
            <div className="travel-navigation">
                <nav className="travel-nav1">
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
            
            <div className="test-test">
            {
                allTravels.archive && allTravels.archive.map((travel) => (
                    <div className="travel-card">
                        <img className="travel-avatar"src={travel.cover} alt=""/>
                        <div className="travel-img">
                            <h4>{travel.title}</h4>
                            <p>Départ: {travel.departure_at}</p>
                            <button className="travel-supp">Archiver</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default PrivateTravelList;