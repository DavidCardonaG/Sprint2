import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
export default class Descripcion extends Component {

    state={
        abierto:false,
    }
    abrirModal=() =>{
this.setState({abierto: ! this.state.abierto})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
