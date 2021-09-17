import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../Container/App'
import Descripcion from '../Components/Descripcion'
import Crud from '../Components/Crud'
import MenVal from '../Components/MenVal'
import MasVal from '../Components/MasVal'

function About() {
    return ( 
                 <BrowserRouter>
                     <Route exact path="/" component={App} />
                     <Route path="/Descripcion/:id">

                        <Descripcion />
                        </Route>
                        <Route exact path="/Crud" component={Crud}/>
                        <Route exact path="/Menos" component={MenVal} />
                        <Route exact path="/Mas" component={MasVal} />
                 </BrowserRouter>
     );
}
 
export default About;