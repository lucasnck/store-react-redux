import { combineReducers } from 'redux'

// reducers
import ShowcaseReducer from './components/showcase/ShowcaseReducer'
import CartReducer from './components/cart/CartReducer'

const reducers = combineReducers({
    showcase: ShowcaseReducer,
    cart: CartReducer 
})

export default reducers