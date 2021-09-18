import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {H1M} from '../Styled/App'
import Swal from 'sweetalert2'
import {  RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';
const url = "https://block-master.herokuapp.com/peliculas";


function RegistroProducto() {

    const [modalInsertar, setTipoModalInsertar] = useState(false);
    const [modalEliminar, setTipoModalEliminar] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [tipoModal, setTipoModal] = useState("");
   const [peliculas, setPeliculas] = useState([]);
 
   const searchref = useRef()
    const [values, setValues] = useState({
        id: '',
        Type: '',
        Title: '', 
        Year: '',
        Value: '',
        Description: '',
        Trailer: '',
        Poster: ''
       
    })
    const {  id, Type, Title, Year,Value, Description, Trailer,Poster} = values;
 
    const modalInsertar1 = () => {
        setTipoModalInsertar(!modalInsertar)
    }
    const peticionGet = async () => {
       const res =  await fetch(url);
       const data = await res.json();
       console.log(data)
       setPeliculas(data)
    }
    const seleccionar = (pel) => {
        setTipoModal('actualizar')
        setValues({
            id: pel.id,
            Type: pel.Type,
            Title: pel.Title, 
            Year: pel.Year,
            Value: pel.Value,
            Description: pel.Description,
            Trailer: pel.Trailer,
            Poster: pel.Poster

        })
        console.log(pel)
   }
    const peticionPost = async () => {
       await axios.post(url,values)
       .then(response => {
         console.log(response);
         peticionGet();
         modalInsertar1()
       })
       .catch(error => {
          console.log(error.message)
       })
    }
    const peticionPut = async () => {
        await axios.put(url+id,values)
        .then(response => {
            modalInsertar1();
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }
    const handleChange = ({target}) => {
          setValues({
            ...values,
            [target.name]: target.value
          })
          console.log(values);
    }
    const peticionDelete = async () => {
        await axios.delete(url+id)
        .then(response => {
            setTipoModalEliminar(false);
           peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }
  const handleChangeBusca = (e) => {
      console.log(searchTerm)
    setSearchTerm(e.target.value )
  }
  const filtro = (e) => {
      e.preventDefault()
    console.log(searchTerm)
            
    let filtro = peliculas.filter(fil => fil.Title.toLowerCase()  === searchTerm.toLowerCase() )
  
    console.log(filtro)
    setPeliculas(filtro)
  }
    useEffect((url) => {
            peticionGet(url)
        },[searchTerm]);
 
console.log(setValues)
    return (
        <div className="App">
            <H1M className="titleBodega">TIENDA PELICULAS</H1M>
            <Link  to="/"> <i id="returnmas" class="fas fa-arrow-left"></i></Link>
                <button className="btn btn-primary" style={{display: 'flex', margin: "20px auto"}}
                onClick={() => {setTipoModal('insertar');modalInsertar1()}}
                >Registrar Nueva Pelicula</button>
                <form onSubmit={filtro} >
                <input type="text"  name="buscar" style={{display: 'flex', margin: "5px auto"}}  onChange={handleChangeBusca} placeholder="Titulo de la pelicula"/>
                </form>
                <button className="btn btn-success" style={{display: 'flex', margin: "5px auto"}}
                onClick={filtro}
                >Buscar</button>
                <br /> <br />
                <table className="table">
                    <thead>
                        <tr id="table1">
                            
                            <th>IMAGEN</th>
                            <th>TÍTULO</th>
                            <th>AÑO</th>
                            <th>CALIFICACIÓN</th>
                            <th>DESCRIPCIÓN</th>
                            <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            peliculas.map(produc => {
                                return(
                                    <tr id ="table" key={produc.id}>
                                        <td><img src={produc.Poster} width="100px" height="120px" alt=""/></td>
                                        <td>{produc.Title}</td>
                                        <td>{produc.Year}</td>
                                        <td><i class="fas fa-star"></i>{produc.Value}</td>
                                        <td>{produc.Description}</td>
                                       <td> <button className="btn btn-primary"
                                         onClick={() => {seleccionar(produc); modalInsertar1()}}><BiEdit/></button>
                                        <br/><br/>
                                       <button className="btn btn-danger"
                                         onClick={() => {seleccionar(produc); setTipoModalEliminar(true)}}><RiDeleteBin5Line/></button></td>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>
<Modal isOpen={modalInsertar}>
                    <ModalHeader style={{display: 'block'}}>
                        <span onClick={() =>{ modalInsertar1();setValues({}) }  } style={{float: 'right', cursor: 'pointer'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <h1>INVENTARIO BLOCK-MASTER</h1>
                       
                        <input className="form-control" ref={searchref} required type="text" hidden name="id" id="id" readOnly onChange={handleChange} value={values?values.id:''}/>
                            <br/>
                            <label htmlFor="nombre">Tipo</label>
                        <input className="form-control" type="text" required name="Type" id="tipo" onChange={handleChange} value={values.Type}/>
                            <br/>
                           <label htmlFor="nombre">Titulo</label>
                        <input className="form-control" type="text" required name="Title" id="nombre" onChange={handleChange} value={values.Title}/>
                            <br/>
                            <label htmlFor="precio">Año</label>
                        <input className="form-control" type="text" required name="Year" id="precio" onChange={handleChange} value={Year}/>
                            <br/>
                            <label htmlFor="iva">Calificación</label>
                        <input className="form-control" type="text" required name="Value" id="calificacion" onChange={handleChange} value={values?values.Value:''}/>
                            <br/>
                            <label htmlFor="descripcion">Descripcion</label>
                        <input className="form-control" type="text" required name="Description" id="descripcion" onChange={handleChange} value={values?values.Description:''}/>
                            <br/>
                            <label htmlFor="descripcion">Imagen</label>
                        <input className="form-control" type="text" required name="Poster" id="descripcion" onChange={handleChange} value={values?values.Poster:''}/>
                            <br/>
  
                                     </div>

                    </ModalBody>
                    <ModalFooter>
                       {tipoModal ==='insertar'}
                        <button className="btn btn-success"
                        onClick={() =>{ peticionPost();setValues({}) }}>
                            Insertar
                        </button>
                        
                        <button className="btn btn-primary" 
                        onClick={() =>{ peticionPut();setValues({}) }}>
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                         onClick={() =>{ modalInsertar1();setValues({}) }}
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={modalEliminar}>
                    <ModalBody>
                    Está seguro de eliminar {values && values.Title}
                   </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-danger"
                       onClick={peticionDelete}>Sí</button>
                        <button className="btn btn-secundary"
                       onClick={() => setTipoModalEliminar(false)}>No</button>
                    </ModalFooter>
                </Modal>
       
    </div>
    )
}

export default RegistroProducto