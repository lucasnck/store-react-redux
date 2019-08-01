import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProduct } from './cart/CartActions'

const Product = (props) => {
    return (
        <li className="col-12 col-sm-4">
            <div className="product">
                <a onClick={(event) => { props.addProduct(event, props.Value) } }>
                    <div className="product-image">
                        <img src={props.images[0].imageUrl} alt={props.name} width="200" />
                    </div>
                    <div className="product-content">
                        <h3 className="title">{props.name}</h3>
                        <div className="price-container">
                            <span className="best-price">
                                R$ {props.Value}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    )
}


const mapStateToProps = state => ({
    products: state.cart.products
})

const mapDispathToProps = dispath => bindActionCreators({ addProduct }, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Product)
