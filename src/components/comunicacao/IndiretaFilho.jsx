import React from "react";

const IndiretaFilho = (props) => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
   // let nomes = ['Maria', 'João', 'José'];
    //const gerarNome = () => nomes.map.return
    

    return(
        <div>
            <div>Filho</div>
            <button onClick={
                function (exp) {
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }

            }>
                Fornecer informações
            </button>
        </div>
    )
}

export default IndiretaFilho