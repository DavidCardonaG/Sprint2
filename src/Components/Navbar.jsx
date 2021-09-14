import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {NAV,Header,Lin} from '../Styled/App'
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            error: ''
        }
        this.apiKey = process.env.REACT_APP_API
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        fetch (`https://block-master.herokuapp.com/peliculas`)
        .then(data => data.json())
        .then(data =>{
            console.log(data);
            this.setState({movies:[...data.results]})
        })
    }

    render() {
        
        return (
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
                  <a className="link" href="#">Más Valoradas</a>
                  </Lin>
                  <Lin>
                  <a className="link" href="#">Menos Valoradas</a>
                </Lin>
                <form action="" id="form" onSubmit="">
                  <input 
                    type ="text"
                    name ="searchTerm"
                    className = "search"
                    id="Search"
                    placeholder="Busca tu pelicula favorita"
                    onChange={(e) =>this.setState({searchTerm: e.target.value})}
                    value={this.state.searchTerm}
                    />
                    <button handleSubmit={this.handleSubmit} id="BTN" className="BTN"><img src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631522337/Icon_g4cwyy.png" alt="search"></img></button>
                  </form>
                  </NAV>
            </Header>
        )
    }
}
