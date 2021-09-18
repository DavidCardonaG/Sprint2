import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FooterP, NamePe,EmailPe } from '../Styled/App'

const Perfil = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            
        <FooterP>
            <img id="imgP"src={user.picture} alt={user.name}/>
            <NamePe>{user.name}</NamePe>
            <EmailPe>Email:{user.email}</EmailPe>
        </FooterP>
        )
    )
}
export default Perfil;