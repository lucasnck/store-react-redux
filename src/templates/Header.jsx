import React from 'react'

import MiniCart from '../components/cart/MiniCart'
import Menu from './Menu'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="/"><h1>MyStore</h1></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Menu />
                        </ul>
                    </div>

                    <MiniCart />
                </nav>
            </div>
        </header>
    )
}

export default Header