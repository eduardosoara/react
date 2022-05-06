import React from "react";
import Cond from './Cond.js'

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return(
        <div>
            <Cond test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </Cond>
            
            <Cond test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </Cond>
        </div>
    )
}

export default UsuarioInfo