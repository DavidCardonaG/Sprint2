import React, { useEffect,useState } from 'react';
import Cards from './Cards'
import {H1} from '../Styled/App'
import { Link } from 'react-router-dom';


const MENOS = () => {

    const [peli, setPeli] = useState([])

    useEffect(()=> {
        obtenerPelis()
    })

    const obtenerPelis = async () => {
        const data = await fetch('https://block-master.herokuapp.com/peliculas?Value_gte=7&Value_lte=10')
        const peli = await data.json()
        setPeli(peli)
    }
    return(
        <>

        <H1>MÁS VALORADAS</H1>
        <Link to="/"> <strong>RETURN</strong></Link>
        <div  className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">
            {
                 
                peli.map(mas => (
                    <Cards
                        key={mas.id}
                        movie={mas}
                    />
                ))
            }
        </div>
</>
    )
}

export default MENOS;