import React, { Component } from "react";

import BotaoNum from "./BotaoNum";
import QuantNum from "./QuantNum";
import Aposta from "./Aposta";


class Mega extends Component {

    state = {
        numeros: this.props.numeroInicial || 6,
        numAposta: this.props.apostaInicial || [1, 2, 3, 4, 5, 6],
    }

    setNumeros = (novoNum) => {
        this.setState({
            numeros: novoNum
        })
    }
    
    setnumAposta = ( ) => {
        /*let array = []
        for (let i = 0; i <= numeros; i++) {
            array.push(Math.floor(Math.random() * (60 - 0 + 1)) + 0);
        }*/
        
        this.setState({
            numAposta : [9,9,9,9]
        })
    }


    render() {
        return (
            <div>
                <h3> Quantos números você deseja jogar: </h3>
                <QuantNum numeros={this.state.numeros} setNumeros={this.setNumeros} />
                <BotaoNum setAposta={this.setnumAposta} />
                <h3> Você está concorrendo com os números: </h3>
                <Aposta numeros={this.state.numAposta} />

            </div>
        )
    }
}

export default Mega