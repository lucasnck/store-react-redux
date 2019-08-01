export function addProduct(event, price = 0) {
    return {
        type: 'CART_PRODUCTS_ADD',
        payload: price
    }
}
