import React, { useState } from "react";
import "./Style.css"

const Input = (props) => {
    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="div" >
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined}/>
        </div>
    )
}

export default Input