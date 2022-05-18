import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)

    useEffect(function() {
        count.current++
    }, [value1])

    return (

        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #1"/>
                <div className="center">
                    <div className='text'>
                        <span className="tex"> Valor:  </span>
                        <span className="text"> {value1} [ </span>
                        <span className="text red"> {count.current} </span>
                        <span className="tex">]</span>
                    </div>
                    <input type="text" className="input" 
                        value={value1} onChange={ e => setValue1(e.target.value)}/>
                </div>

            <SectionTitle title="Exercício #2"/>
                <div className="center">
                    <input type="text" className="input" 
                        value={value2} onChange={ e => setValue2(e.target.value)}/>
                </div>

        </div>
    )
}

export default UseRef
