import React from "react";

const Botoes = (props) => {
    return (
        <div>
            <button onClick={props.setDec}> - </button>
            <button onClick={props.setInc} > + </button>
        </div>
    )
}

export default Botoes