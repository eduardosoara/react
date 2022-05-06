import React from "react";

const FamiliaMembro = (props) => (
        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )

export default FamiliaMembro;