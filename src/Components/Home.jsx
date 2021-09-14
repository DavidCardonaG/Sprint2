import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Movie from '../movie/movie';
import PopularFlyer from './popular.jpg';
import ValoradosFlyer from './valorados.jpg';
import EstrenosFlyer from './estrenos.jpg';

const Home = ()=>(
  <div className="Home">
    <h3>
      Bienvenido a Reacther, el mundo de las películas desarrollado con
      <a href="https://reactjs.org/" targer="_blank"> React</a>
    </h3>
    <Link to="/populares" target="_blank">
      <Movie imageLocal={PopularFlyer} titulo="Populares"/>
    </Link>
    <Link to="/valorados" target="_blank">
      <Movie imageLocal={ValoradosFlyer} titulo="Más Valorados"/>
    </Link>
    <Link to="/estrenos" target="_blank">
      <Movie imageLocal={EstrenosFlyer} titulo="Próximos Estrenos"/>
    </Link>
  </div>
);

export default Home;