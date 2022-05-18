import './Menu.css';
import React from "react";

import { Link } from 'react-router-dom';

const Menu = props => {
    return(
        <aside className="Menu" >
            <nav>
                <ul>
                </ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    
                    <li>
                        <Link to="/param/456">Parâmetros</Link>
                    </li>
                    
                    <li>
                        <Link to="/param/Text">Parâmetros</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    
                    <li>
                        <Link to="*">Não Existe</Link>
                    </li>
                    
                    <li>
                        <Link to="*"></Link>
                    </li>
                    
            </nav>
        </aside>
    )
}

export default Menu 