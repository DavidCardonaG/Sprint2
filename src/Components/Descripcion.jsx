  
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import {MainDetalles, ProfileM, BX, BA, IVA, TitleDetalles, PreciosDetalles, DescripcionD} from '../Styled/Rejistro_Styled'

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
                'Gracias Por Elegirnos!',
                'Disfruta la pelicula!',
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
                <PreciosDetalles>{info.Year}</PreciosDetalles>
                <IVA>{info.Value}</IVA>
                 <DescripcionD>{info.Description}</DescripcionD> 
                 <button  onClick={trailer} ><i id="fas2" class="fas fa-play"></i>VER AHORA</button>
                 <button  onClick={later}><i class="fas fa-plus"></i>VER DESPUES</button>
                 
        </div>
         </MainDetalles>
         

     );
}
 
export default Descripcion;