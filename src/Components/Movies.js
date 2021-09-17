import React, { useEffect,useState } from 'react';
import Cards from '../Components/Cards'
import {H1} from '../Styled/App'
import { Link } from 'react-router-dom';
const Movies = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(()=> {
        obtenerPelis()
    })

    const obtenerPelis = async() => {
        const data = await fetch('https://block-master.herokuapp.com/peliculas')
        const peliculas = await data.json()
        setPeliculas(peliculas)

    }
    return(
        <>

        <H1>Todas las peliculas</H1>
        <div  className="container row row-cols-1 row-cols-md-5 g-4 py-5 text-center">
            {
                 
                peliculas.map(movie => (
                    <Link to={`/Descripcion/${movie.id}`}>
                    <Cards
                        key={movie.id}
                        movie={movie}
                    />
                    </Link>
                ))
            }
        </div>
</>
    )
}

export default Movies;