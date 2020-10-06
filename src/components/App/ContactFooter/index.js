import React from 'react';
import './styles.scss';




const ContactFooter = () => {
    return (
        <div className="contact">
            <div className="contact-intro">
                <h1>Contactez-nous</h1>
                <p>Merci de remplir vos informations et nous vous répondrons dans les plus brefs délais.</p>
            </div>
            
            <div className="contact-form">
                <form>
                    <label for="name">Nom </label>
                        <input className="contact-input" type="text" /><br/>
                    
                    <label for="name">Prénom </label>
                        <input className="contact-input" type="text" /><br/>
                    
                    <label for="name">Email</label>
                        <input className="contact-input" type="text" /><br/>
                    
                    <label for="name">Téléphone* </label>
                        <input className="contact-input" type="number" /><br/>
                    
                    <label for="name">Sujet du message*</label>
                        <input className="contact-input" type="text" /><br/>
                    
                    <label for="name">Message*</label>
                        <textarea className="contact-input" type="text" rows="7"></textarea><br/>
                    
                    <button className="contact-button"type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    );
    }   


export default ContactFooter;