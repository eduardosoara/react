import React, { useState } from "react";

//import BotaoNum from "./BotaoNum";
//import QuantNum from "./QuantNum";
//import Aposta from "./Aposta";

const Mega = (props) => {

    //const numeros2 = []
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    function gerarNumeros(qtde) {

        let array = [];
        
        for (let i = 0; i < qtde; i++) {
           array.push(Math.floor(Math.random() * (60 - 0 + 1)) + 0);
        }
        
        return array;
    }

    return (
        <div>
            <h3> Você está concorrendo com os números: </h3>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label htmlFor="num"> <h3> Quantos números você deseja jogar: </h3> </label>
                <input id="num"
                    type="number"
                    value={qtde}
                    onChange={e => setQtde(+e.target.value)}
                />
            </div>
            <button onClick={_ => setNumeros([gerarNumeros(qtde)])}>
                Faça sua aposta!!
            </button>
                
        </div>
    )
}

export default Mega