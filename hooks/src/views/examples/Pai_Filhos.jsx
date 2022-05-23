import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import Filho from './Filho'

const Pai_Filhos = props => {
    return (
        <div>
            <PageTitle
                title="Componentes Pai e Filho"
                subtitle="Comunicação direta e indireta entre os componentes"
            />

            <SectionTitle title="Comunicação direta de Pai para Filhos"/>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
                {
                    React.Children.map(props.children, child => {
                        return React.cloneElement(child, {
                            ...props, ...child.props
                        })
                    })
                }
                {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
                <Filho {...props} />
                <Filho {...props} nome="Carla"/> */}
            </ul>
            <hr />
            <hr />
            <hr />

            <SectionTitle title="Comunicação de Pai para Filhos e de Filhos para Pai"/>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
                {props.children}
            </ul>
        </div>

    )
}
    


export default Pai_Filhos