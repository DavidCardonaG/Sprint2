import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout} = useAuth0();

    return <button id="clear" onClick={()=> logout({returnTo:window.location.origin})}>Cerrar Sesión</button>
}

export default LogoutButton;