const INITIAL_STATE = { products: [], subTotal: 0 }

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'CART_PRODUCTS_ADD':
            console.log(action.payload)
            console.log(state.products.length)
            return {
                ...state, subTotal: state.subTotal + action.payload
            }
        default:
            return state
    }

}