import React from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import "@fortawesome/fontawesome-free/js/all";

import data from './data';

import './style.scss';

const NewTravel = ({location, continent, departure, step, opened, onToggle, handleChange, handleSubmit}) => {

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        handleChange({
            [name]: value,
        });
      };

    const [ activeLocation, setActiveLocation ] = React.useState(null);
      
    return(
        <div className="travel">
            <div className={opened ? 'newTravel-closed' : 'newTravel'}>
                <div className="top-block">
                    <div>
                        <h1 className="newTravel-title">{location}</h1>
                        <h3 className="newTravel-continent">Continent: {continent}</h3>
                        <h4 className="newTravel-departure">Date de départ: {departure}</h4>
                    </div>

                    <button className={opened ? 'newTravel-create opened' : 'newTravel-create'}
                            type="button"
                            onClick={onToggle}>
                        <i className="fas fa-map-marked-alt fa-2x"></i>
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
                    
                <div className="bottom-block">
                <Map center={[43.696319580078125,7.270940780639648]} zoom={13}>
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
                    </Map>
                </div>
            </div>

            <div className={opened ? 'newStep' : 'newStep-closed'}>
                <form className="newStep-form">
                    <label>
                    <span>Pays</span>
                        <input type="text" 
                               name="country" 
                               className="newStep-input" 
                               placeholder="Pays" 
                               value={step.country} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <span>Ville</span>
                        <input type="text" 
                               name="city" 
                               className="newStep-input" 
                               placeholder="Ville" 
                               value={step.city} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <span>Lieu</span>
                        <input type="text" 
                               name="place" 
                               className="newStep-input" 
                               placeholder="Lieu" 
                               value={step.place} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <span>Etape n°</span>
                        <input type="number" 
                               name="stepNb"
                               className="newStep-input" 
                               placeholder="Etape n°" 
                               value={step.stepNb} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <span>Date de départ</span>
                        <input type="date" 
                               name="departure" 
                               className="newStep-input" 
                               placeholder="Date de départ" 
                               value={step.departure} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <span>Date d'arrivée</span>
                        <input type="date" 
                               name="arrival" 
                               className="newStep-input" 
                               placeholder="Date d'arrivée" 
                               value={step.arrival} 
                               onChange={handleInputChange }/>
            </label>

                    <button className="newStep-button">Ajouter nouvelle étape</button>
                </form>
            </div>
        </div>
    )
}
export default NewTravel;

NewTravel.propTypes = {
    location: PropTypes.string.isRequired,
    continent: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    step: PropTypes.shape({
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        place: PropTypes.string,
        stepNb: PropTypes.number,
        departure: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
    })
};