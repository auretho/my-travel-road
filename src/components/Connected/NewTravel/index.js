import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import "@fortawesome/fontawesome-free/js/all";

import data from './data';

import './style.scss';

const NewTravel = () => {

    const [ activeLocation, setActiveLocation ] = React.useState(null);

    return(
        <div className="newTravel">
            <div className="top-block">
                <div>
                    <h1 className="newTravel-title">TITRE DU VOYAGE</h1>
                    <h3 className="newTravel-continent">Continent: Nom du continent</h3>
                    <h4 className="newTravel-departure">Date de départ: 25 avril 2020</h4>
                </div>
                
                
    <button className="newTravel-create">
    <i className="fas fa-map-marked-alt fa-lg"></i>
        <span>Nouvelle étape</span>
    </button>

                <label htmlFor="steps-select" className="steps-select">
                    <select name="steps" id="steps">
                        <option value="">--Choisissez une étape--</option>
                        <option value="step">Etape 1</option>
                        <option value="step">Etape 2</option>
                        <option value="step">Etape 3</option>
                        <option value="step">Etape 4</option>
                    </select>
                </label>
            </div>
            
            <Map center={[43.696319580078125,7.270940780639648]} zoom={13}>
            <div className="bottom-block">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {data.map((place) => (
                    <Marker 
                        key={place.id} 
                        position={[place.x, place.y]}
                        onClick={()=> {
                            setActiveLocation(place)
                        }} 
                    />
                ))}
                {activeLocation && (
                    <Popup 
                        position={[ activeLocation.x, activeLocation.y ]}
                    >
                        <div>
                            <h2>{activeLocation.name}</h2>
                            <h3>{activeLocation.context}</h3>
                        </div>
                    </Popup>
                )}
            </div>
            </Map>
        </div>
    )
}
export default NewTravel;