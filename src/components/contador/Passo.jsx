import React from "react";

const Passo = (props) => {
    return(
        <div>
            <label For="passoInput">Passo:</label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={event => props.setPasso(+event.target.value)}
            />
        </div>
    )
}

export default Passo