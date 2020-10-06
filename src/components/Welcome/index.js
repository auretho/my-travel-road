import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Form from '../../containers/CreateAccount';
import Video from './Video';

import './styles.scss';




const Welcome = () => (
    <div className='welcome'>
        
      <Route exact path="/welcome">
        <Main />
      </Route>      
      
      <Route path="/welcome/create-account">
        <Form />      
      </Route>

      <Video />
     
    </div>
  );

  export default Welcome;