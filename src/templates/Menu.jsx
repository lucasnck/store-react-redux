import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <React.Fragment>
            <li class="nav-item active">
                <Link to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link to="/">Perfumaria</Link>
            </li>
            <li class="nav-item">
                <Link to="/">Maquiagem</Link>
            </li>
            <li class="nav-item">
                <Link to="/">Cabelos</Link>
            </li>
            <li class="nav-item">
                <Link to="/">Infantil</Link>
            </li>
        </React.Fragment>
    )
}

export default Menu