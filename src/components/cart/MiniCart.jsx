import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux'

class MiniCart extends Component {

    render() {
        const subTotal = this.props.subTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
        return (
            <div className="badge badge-cart">
                <span className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="sub-total">
                    <span className="price">{subTotal}</span>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subTotal: state.cart.subTotal
})

export default connect(mapStateToProps)(MiniCart)
