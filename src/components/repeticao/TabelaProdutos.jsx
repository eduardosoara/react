import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

const TabelaPrecos = (props) => {

    const produtoTabId = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        )
    });

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="th">
                        <th > Código </th>
                        <th> Produto </th>
                        <th> Valor </th>
                    </tr>
                </thead>

                <tbody>
                    {produtoTabId}
                </tbody>

            </table>
        </div>
    )
};

export default TabelaPrecos;