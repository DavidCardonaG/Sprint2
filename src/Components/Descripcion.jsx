  
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import {MainDetalles, ProfileM, BX, Value, TitleDetalles, AñoDetalles, DescripcionD} from '../Styled/App'

const Descripcion = () => {

    const id = useParams().id
    

    const [ info, setInfo ] = useState([])

        React.useEffect(() => {
            obtenerDatos()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const obtenerDatos = async () => {
            const data = await fetch(`https://block-master.herokuapp.com/peliculas/${id}`)
            const users = await data.json()
            setInfo(users)
            console.log(info);
        }

        const trailer = () =>{
            Swal.fire(
                'Gracias Por Elegirnos!',
                'Disfruta la pelicula!',
                'success'
              )
              setTimeout(function(){window.location  = `${info.Trailer}`} , 3000);  
        }
        const later = () =>{
            Swal.fire(
                'Lo Sentimos!',
                'Será En La Próxima!',
                'error'
              )
              setTimeout(function(){window.location = 'http://localhost:3000'} , 3000);  
        }


    return ( 
        
 
        <MainDetalles>
            <ProfileM src={info.Poster} alt="" />
            
        <div className="contenido_mostrar">
        
     <Link to="/"> <BX id="Salir"> <strong>X</strong> </BX></Link>
   
                 <TitleDetalles>{info.Title}</TitleDetalles>
                <AñoDetalles>{info.Year}</AñoDetalles>
                <Value id="value-card" ><i class="fas fa-star"></i>  {info.Value}</Value>
                 <DescripcionD>{info.Description}</DescripcionD> 
                 <button  id="btn3" onClick={trailer} ><i id="fas2" class="fas fa-play"></i>VER AHORA</button>
                 <button id="btn4" onClick={later}><i class="fas fa-plus"></i>VER DESPUES</button>
                 
        </div>
         </MainDetalles>
         

     );
}
 
export default Descripcion;