import React, { useEffect,useState } from 'react'
import { Link} from 'react-router-dom';
import {NAV,Header,Lin} from '../Styled/App'
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
       console.log(e.target.value )
    }

    // const filtrar=(terminoBusqueda)=>{
    //     var resultadosBusqueda=tpeliculas.filter((elemento)=>{
    //       if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //       || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //       ){
    //         return elemento;
    //       }
    //     });
    //     setTpeliculas(resultadosBusqueda);
    //   }

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
                  <a className="link" href="#">Todas</a>
                  </Lin>
                  <Lin>
                  <Link to="/Mas/"> Más Valoradas</Link>
                  </Lin>
                  <Lin>
                  <Link to="/Menos">Menos Valoradas</Link>
                </Lin>
                <Link className="link" to="/Crud/">Administrar Peliculas </Link>
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