import React, { cloneElement } from "react";

import './FamiliaMembro'

const Familia = (props) => (
    <div>
        {
            React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })
        }
    </div>
)


export default Familia;