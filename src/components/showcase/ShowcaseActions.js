import axios from 'axios'

export function getProducts() {
    const products = axios('https://api.myjson.com/bins/qc8d9')
    return {
        type: 'PRODUCTS_REQUEST',
        payload: products
    }
}