import React from "react";

const NumAlet = props => (
    <div>
        <h2> Valor Aleatório</h2>
        <p> O valor mínimo é {props.min}</p>
        <p> O valor máximo é {props.max}</p>
        <p> O valor aleatório é { Math.ceil (Math.random() * (props.max - props.min) + props.min)}</p>
    </div>
);

export default NumAlet;