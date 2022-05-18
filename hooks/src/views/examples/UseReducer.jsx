import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <SectionTitle title= 'Exercício #01 '/>
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={()=> dispatch({type:'numberAdd2'})}>+2</button>
                    <button className="btn"
                        onClick={()=> dispatch({type:'login', payload:'Maria'})}>Login</button>
                </div>
            </div>

            <SectionTitle title='Exercício #02 - Desafio'/>
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={()=> dispatch({type:'numberMult7'})}>X7</button>
                    <button className="btn"
                        onClick={()=> dispatch({type:'numberDiv25'})}>/25</button>
                    <button className="btn"
                        onClick={()=> dispatch({type:'numberInt'})}>Inteiro</button>
                    <button className="btn"
                        onClick={()=> dispatch({type:'numberAddn', payload: 10})}>+10</button>
                </div>
            </div>
        </div>      
    )
}

export default UseReducer
