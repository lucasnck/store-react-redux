import React from 'react'

import MiniCart from '../../components/cart/MiniCart'
import Menu from '../Menu'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from './MenuActions'

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <nav class="navbar navbar-expand-lg">

                    <button class="navbar-toggler" onClick={props.toggleMenu}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <a class="navbar-brand" href="/"><h1>MyStore</h1></a>

                    <div class={ `collapse navbar-collapse ${props.menu.status}`} id="navbarSupportedContent">
                        <button class="d-block d-lg-none" onClick={props.toggleMenu}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
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

const mapStateToProps = state => ({
    menu: state.menu
})

const mapDispathToProps = dispath => bindActionCreators({ toggleMenu }, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Header)