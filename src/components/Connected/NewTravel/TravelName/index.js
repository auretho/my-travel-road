import React from 'react';
import './style.scss';

const TravelName = () => (

    <div className="travel">
        <form className="travel-form" >
            <label>
            <h1>Nom du voyage<span>*</span></h1>
                <input type="text" 
                        name="country" 
                        className="travel-input" 
                        placeholder="Pays" 
                        value="" 
                        />
            </label>
            <label>
            <h1>Continent<span>*</span></h1>
                <input type="text" 
                        name="city" 
                        className="travel-input" 
                        placeholder="Continent" 
                        value=""
                        />
            </label>
            <label>
            <h1>Date de départ<span>*</span></h1>
                <input type="date" 
                        name="place" 
                        className="travel-input" 
                        placeholder="Date de départ" 
                        value=""
                        />
            </label>
            <button className="newStep-button">Créer un nouveau voyage</button>
        </form>
    </div>
);

export default TravelName;
