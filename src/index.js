import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import General from './Container/General'


ReactDOM.render(
    <Auth0Provider 
    domain="dev-5dtrsjid.us.auth0.com"
     clientId="BHIa98vPPKi90XXRld7ZnKMluInxnRZI" 
     redirectUri={window.location.origin}
     >
      <General />
    </Auth0Provider>,
  document.getElementById('root')
);


