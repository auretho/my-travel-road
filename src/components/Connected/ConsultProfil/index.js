import React from 'react';
import './styles.scss';
import avatar from '../ConsultProfil/avatar.jpeg';







const ConsultProfil = () => {
    return (
        <div className="consult">
             <div className="consult-profil">
                <h6><b>Nom</b></h6>
                <p>Pexels</p>
                
                <h6><b>Prénom</b></h6>
                <p>Camille</p>
                
                <h6><b>Email</b></h6>
                <p>Camillep@gmail.com</p>
                
                <h6><b>Ville</b></h6>
                <p>Montreal</p>
                
                <h6><b>Code Postal</b></h6>
                <p>H2Y 1C6</p>
                
                <button className="consult-button">Editer le profil</button>
             </div>
            
            <div className="consult-pseudo">
                {/*<button className="consult-public">Profil public</button>*/}
                    <h2 className="consult-name">Cami<span>&#x2661;</span></h2>
                    <img className="consult-avat"src={avatar} alt=""/>
                <button className="consult-pseudo-button">Mes voyages</button>
            </div>
            
            <div className="consult-article">
                <article>
                    <h4>A Propos</h4>
                        <p>
                            Je suis Camille, Française de 22 ans et expatriée au Canada depuis bientôt 3 ans. 
                            Je suis monteuse vidéo en Freelance et passionnée de voyage.
                            Depuis toute petite j’aime faire des voyages et capturer des images. Lorsque j’ai eu 14 ans, 
                            j’ai rencontrée un grand voyageur, Daniel Girard, qui m’emmenait explorer différents horizons. 
                            Au fil des sorties, il m’a transmit sa passion du voyage. 
                            C’est naturellement que j’ai décidé de devenir digital nomade et de faire de cette passion du voyage mon quotidien.
                        </p>
                </article>
            </div>
        </div>




    );
}


export default ConsultProfil;