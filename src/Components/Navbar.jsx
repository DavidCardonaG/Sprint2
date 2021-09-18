import React, { useEffect,useState } from 'react'
import { Link} from 'react-router-dom';
import {NAV,Header,Lin} from '../Styled/App'
// import Movies from '../Components/'
import Cards from '../Components/Cards'
import axios from 'axios'
const url = "https://block-master.herokuapp.com/peliculas";

function Navbar(){

    const [pelis,setPelis] = useState([]);
    const [tpeliculas,setTpeliculas] = useState([]);
    const [search,setSearch] = useState("");

    const peticionSearch = async() =>{
      await  axios.get(url)
        .then (response =>{
            setPelis(response.data)
        })
        .catch (error => {
            console.log(error);
        }) 
    }

    const handleChange =(e) => {
        setSearch(e.target.value)
       filtrar(e.target.value )
    }

    const filtrar=(terminoBusqueda)=>{

        setTpeliculas(terminoBusqueda);
      }

    useEffect(()=>{
        peticionSearch()
    }, []);

    return (
        <div>
             { pelis &&
                pelis.map(movies => (
                    <Cards
                        key={movies.id}
                        movie={movies}
                    />
                    
                ))
            }
            <Header>
                <NAV className="">
                    <img 
                        src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631140173/logo-blockBuster_saqw82.png" 
                        id="icon" 
                        alt="User Icon" 
                        className="icon"/>
                    <Lin>
                  <Link id="lin" to="/">Todas</Link>
                  </Lin>
                  <Lin>
                  <Link id="lin" to="/Mas/"> Más Valoradas</Link>
                  </Lin>
                  <Lin>
                  <Link id="lin" to="/Menos">Menos Valoradas</Link>
                </Lin>
                <Link id="lin" to="/Crud/">Administrar Peliculas </Link>
                <input 
                 type ="text"
                 name ="searchTerm"
                 className = "search"
                 id="Search"
                 placeholder="Busca tu pelicula favorita"
                 value={search}
                 onChange={handleChange}
                 />
                    <button type="submit" id="BTN" className="BTN"><img src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631522337/Icon_g4cwyy.png" alt="search"></img></button>
                
                  </NAV>
            </Header>
        </div>
    )
}

export default Navbar