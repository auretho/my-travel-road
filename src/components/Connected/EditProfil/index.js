import React from 'react';
/*import PropTypes from 'prop-types';*/
import './styles.scss';
import pic from '../EditProfil/cover.jpg';
import avatar from '../EditProfil/avatar.jpeg';

const EditProfil = () => {

  return (
      <div className="edit">
          <main className="edit-main">
              
            <form>
                <div className="profil">
                    <div className="left">
                        <div className="left-profil">
                            <h5 className="left-title">Editer votre profil</h5>
                            <input className="left-input" type="text" placeholder="Nom"/><br/>
                            <input className="left-input" type="text" placeholder="Prénom"/><br/>
                            <input className="left-input" type="text" placeholder="Email"/><br/>
                            <input className="left-input" type="text" placeholder="Ville"/><br/>
                            <input className="left-input" type="text" placeholder="Code Postal"/><br/>
                        </div>

                        <div className="left-password">
                            <h5 className="left-title">Modifier votre mot de passe</h5>
                            <input className="left-input" type="text" placeholder="Mot de passe actuel"/><br/>
                            <input className="left-input" type="text" placeholder="Nouveau mot de passe"/><br/>
                            
                        <div className="right-avatar">
                            <img className="avat"src={avatar} alt=""/>
                        </div>
                        
                        <button className="right-second-button" >Editer votre avatar</button>
                        </div>
                    </div>
                    

                    <div className="right">
                        <div className="right-picture">
                            <h5 className="left-title">Modifier votre pseudonyme</h5>
                            <input className="right-input" type="text" placeholder="Pseudonyme"/><br/>
                            <img className="avat2" src={pic} alt="" />
                        </div>
                        <button className="right-first-button" >Editer votre photo de couverture</button>
                     
                    
                    </div>
                    </div>
                    </form>
                        <div className="right-button">
                            <button className="right-third-button" >Annuler</button>
                            <button className="right-fourth-button" >Enregistrer</button>
                        </div>
        </main>
    </div>
  );
};



export default EditProfil;