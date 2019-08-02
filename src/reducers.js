import { combineReducers } from 'redux'

// reducers
import ShowcaseReducer from './components/showcase/ShowcaseReducer'
import CartReducer from './components/cart/CartReducer'
import MenuReducer from './templates/menu/MenuReducer'

const reducers = combineReducers({
    showcase: ShowcaseReducer,
    cart: CartReducer,
    menu: MenuReducer
})

export default reducers