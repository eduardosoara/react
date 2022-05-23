import React, { Component } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <PageTitle
                    title="Módulo Classes"
                    subtitle="Componentes React baseados em classes"
                />

                <SectionTitle title="Saudação" />
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder='Tipo...'
                    value={tipo} onChange={this.setTipo}></input>
                <input type="text" placeholder='Nome...'
                    value={nome} onChange={e => this.setNome(e)}></input>
            </div>
        )
    }


}

