import React from 'react';
import PropTypes from 'prop-types';

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import "@fortawesome/fontawesome-free/js/all";

import data from './data';
import countryList from './countryList';



import './style.scss';


const NewTravel = ({fetchCountries, countryData, location, country, departure, step, opened, onToggle, handleChange, handleSubmit} ) => {

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        handleChange({
            [name]: value,
        });
        fetchCountries();
      };

      const handleInputSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
      };

    const [ activeLocation, setActiveLocation ] = React.useState(null);
      
    return(
        <div className="travel">
            <div className={opened ? 'newTravel-closed' : 'newTravel'}>
                <div className="top-block">
                    <div>
                        <h1 className="newTravel-title">{location}</h1>
                        <h3 className="newTravel-country">Pays de départ: {country}</h3>
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
                            <option value="step">{countryData.name}</option>

                        </select>
                    </label>
                </div>
                    
                <div className="bottom-block">
                <Map center={[43.696319580078125,7.270940780639648]} zoom={4}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* ===================MARKER ON MAP======================== */}
                        {
                            countryData.latlng && countryData.latlng.map((data) => {
                                return(
                                <Marker 
                                    key={data} 
                                    position={[countryData.latlng[0],countryData.latlng[1]]}
                                    onClick={()=> {
                                        setActiveLocation(data)
                                    }} 
                                />
                            )})
                        }
                        {/* ======================================================= */}


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
                <form className="newStep-form" onSubmit={handleInputSubmit}>
                    <label>
                    <h1>Pays<span>*</span></h1>

{/*================== LISTE DEROULANTE COUNTRIES ===============*/}
                    <select name="countryList" className="newStep-input" value={step.country} onChange={handleInputChange}>
                        <option value="Liste des pays">Choisir un pays</option>
                        {
                        countryList.map((country) => {
                            return (
                                <option key={country} value={country}>{country}</option>
                            );    
                        })
                        }
                        

                    </select>
{/* ============================================================== */}
                    </label>
                    <label>
                    <h1>Date de départ<span>*</span></h1>
                        <input type="date" 
                               name="departure" 
                               className="newStep-input" 
                               placeholder="Date de départ" 
                               value={step.departure} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <h1>Date d'arrivée</h1>
                        <input type="date" 
                               name="arrival" 
                               className="newStep-inputb" 
                               placeholder="Date d'arrivée" 
                               value={step.arrival} 
                               onChange={handleInputChange }/>
    {/* ========================================================                  
    !!A METTRE EN V2!!
                    <label>
                    <h1>Ville</h1>
                        <input type="text" 
                               name="city" 
                               className="newStep-input" 
                               placeholder="Ville" 
                               value={step.city} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <h1>Lieu</h1>
                        <input type="text" 
                               name="place" 
                               className="newStep-input" 
                               placeholder="Lieu" 
                               value={step.place} 
                               onChange={handleInputChange}/>
                    </label>

                    <label>
                    <h1>Etape n°</h1>
                        <input type="number" 
                               name="stepNb"
                               className="newStep-input" 
                               placeholder="Etape n°" 
                               value={step.stepNb} 
                               onChange={handleInputChange}/>
                    </label>
    ======================================================== */}
                    
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
    country: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    step: PropTypes.shape({
        country: PropTypes.string,
        city: PropTypes.string,
        place: PropTypes.string,
        // stepNb: PropTypes.number,
        departure: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
    })
};