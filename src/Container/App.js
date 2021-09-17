
import LoginButton from '../Components/Login'
import Perfil from '../Components/Perfil'
import LogoutButton from '../Components/Logout'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../Components/Navbar'
import Carrusel from '../Components/Carrusel'
import Movies from '../Components/Movies'

function App() {
const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
       {isAuthenticated ?(
         <>
         <Carrusel/>
         <Navbar/>
         <Movies />
         <Perfil/>
       <LogoutButton/>
       </>
       )  : (
       <LoginButton/>
       )}
    </div>
  );
}

export default App;
