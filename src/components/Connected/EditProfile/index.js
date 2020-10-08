import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import avata from './avatar.jpeg';
import cove from './cover.jpg';

const EditProfile = ({
    firstname,
    lastname,
    pseudo,
    email,
    city,
    cityCode,
    oldPassword,
    password1,
    password2,
    avatar,
    cover,
    editMessage,
    onInputSubmit,
    handleInputChange,


    }) => {
        const handleSubmit = (evt) => {
            evt.preventDefault();
            onInputSubmit();
    };
    return (
      <div className="edit">
          <main className="edit-main">
              
            <form onSubmit={handleSubmit}>
                <div className="profil">
                    <div className="left">
                        <div className="left-profil">
                            <h5 className="left-title">Editer votre profil</h5>
                            <input className="left-input" name="lastname" type="text" placeholder="Nom" onChange={handleInputChange} value={lastname} /><br/>
                            <input className="left-input" name="firstname" type="text" placeholder="Prénom" onChange={handleInputChange} value={firstname} /><br/>
                            <input className="left-input" name="email" type="text" placeholder="Email" onChange={handleInputChange} value={email} /><br/>
                            <input className="left-input" name="city" type="text" placeholder="Ville" onChange={handleInputChange} value={city} /><br/>
                            <input className="left-input" name="cityCode" type="number" placeholder="Code Postal" onChange={handleInputChange} value={cityCode} /><br/>
                        </div>

                        <div className="left-password">
                            <h5 className="left-title">Modifier votre mot de passe</h5>
                            <input className="left-input" name="oldpassword" type="password" placeholder="Mot de passe actuel" onChange={handleInputChange} value={oldPassword} /><br/>
                            <input className="left-input" name="password1" type="password" placeholder="Nouveau mot de passe" onChange={handleInputChange} value={password1} /><br/>
                            <input className="left-input" name="password2" type="password" placeholder="retaper votre nouveau mot de passe" onChange={handleInputChange} value={password2} /><br/>
                            
                        <div className="right-avatar">
                            <img className="avat"src={avata} alt=""/>
                        </div>
                        
                        <button className="right-second-button" >Editer votre avatar</button>
                        </div>
                    </div>
                    

                    <div className="right">
                        <div className="right-picture">
                            <h5 className="left-title">Modifier votre pseudonyme</h5>
                            <input className="right-input" name="pseudo" type="text" placeholder="Pseudonyme" onChange={handleInputChange} value={pseudo} /><br/>
                            <img className="avat2" src={cove} alt="" />
                        </div>
                    <button className="right-first-button" >Editer votre photo de couverture</button>                
                    </div>
                </div>
            

            <div className="right-button">
                <Link to="/private-profile" >
                    <button className="right-third-button" >Annuler</button>
                </Link>
                    <button className="right-fourth-button" type="submit" >Enregistrer</button>
            </div>
            </form>
        </main>
    </div>
  );
};

EditProfile.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cityCode: PropTypes.number.isRequired,
    password1: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    editMessage: PropTypes.string.isRequired,

    onInputSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default EditProfile;