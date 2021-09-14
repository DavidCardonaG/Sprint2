import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {H1} from '../Styled/App'
import '../Style/app.css';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <button className="" id="btn" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
};

export default LoginButton;