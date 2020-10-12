import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

const DeleteAccount = () => {
        const onDeleteAccount = () => {
        const token = localStorage.getItem('token');
        axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'delete',
            url: `http://127.0.0.1:8000/api/user/delete`,  
        })
          .then((response) => {
            console.log('la reponse', response);
            window.location.assign('/');
          })
          .catch((error) => {
            console.log("y'a eu une erreur chef!",error);
          });
      };

    return (
        <div className="delAccount">
            <div className="delAccount-advertissement">
                <h2 className="delAccount-title">Achtung bitte!</h2>
                <p className="delAccount-content">
                    Vous allez suppimer définitivement votre compte et toutes vos données.<br/>
                    Voulez-vous vraiment continuer?</p>
            </div>
            <div className="delAccount-button">

                <button className="delAccount-delete" onClick={() => {onDeleteAccount();}}>Supprimer mon compte</button>

                <Link to='/private-profile'>
                <button className="delAccount-cancel">Annuler</button>
                </Link>
            </div>
            
        </div>
)};



export default DeleteAccount;
