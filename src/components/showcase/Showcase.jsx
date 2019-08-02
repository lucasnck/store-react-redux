import React, { Component } from 'react'

// components
import Product from '../Product'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProducts } from './ShowcaseActions'
 
class Showcase extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const data = this.props.products;
        const items = data.map((product, index) =>
            <Product key={index} {...product} />
        );
        return (
            <div className="showcase">
                <div className="container">
                    <h2>Últimos produtos</h2>
                    <ul className="row">
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.showcase.products
})

const mapDispathToProps = dispath => bindActionCreators({ getProducts }, dispath)

export default connect(mapStateToProps, mapDispathToProps)(Showcase)