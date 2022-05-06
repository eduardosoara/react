import React from "react";
import './App.css'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from './components/layout/Card';
import NumAlet from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

//forma mais enxuta utilizando uma arrow funciton, o _ indica que não é passado nenhum parâmetro na função
const App = () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#1D8348">
                <Mega />
            </Card>
            
            <Card titulo="#12 - Contador" color="#839192">
                <Contador numeroInicial={10}/>
            </Card>
            
            <Card titulo="#11 - Componente Controlado" color="#F5B041">
                <Input />
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#148F77 ">
                <IndiretaPai />
            </Card>
            
            <Card titulo="#9 - Comunicação Direta" color="#AF601A">
                <DiretaPai />
            </Card>
            
            <Card titulo="#8 - Renderização Condicional" color="#2ECC71">
                <ParOuImpar numero={11}/>
                <UsuarioInfo usuario={{nome: 'Eduardo'}}/>
                <UsuarioInfo />
            </Card>

            <Card titulo="#7 - Tabela de Preços" color="#884EA0">
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Repetição" color="#5D6D7E">
                <ListaAlunos />
            </Card>

            <Card titulo="#5 - Componente com Filho" color="#F1948A">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#4 - Número Aleatório" color="#FF8000">
                <NumAlet min={1} max={10} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#4B8A08">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#0489B1">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.5}
                />
            </Card>

            <Card titulo="#1 - Primeiro" color="#FACC2E">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
);

export default App;

