import "./Contador.css";
import Botoes from "./Botoes";
import React, { Component } from "react";
import Display from "./Display";
import Passo from "./Passo";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <Passo passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setDec= {this.dec} setInc={this.inc} />
            </div>
        )
    }
}

export default Contador