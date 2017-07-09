import { combineReducers } from 'redux'
import {
  SET_PRODUCTS,
  SET_ORDERS,
  SET_ADMIN,
  SET_LOADING
} from './actions'

const productsReducer = (state=[], action) => {
  const { type, products } = action
  switch(type) {
    case SET_PRODUCTS:
      return products
    default:
      return state
  }
}

const ordersReducer = (state=[], action) => {
  const { type, orders } = action
  switch(type) {
    case SET_ORDERS:
      return orders
    default:
      return state
  }
}

const adminReducer = (state={}, action) => {
  const { type, admin } = action
  switch(type) {
    case SET_ADMIN:
      return admin
    default:
      return state
  }
}

const loadingReducer = (state=null, action) => {
  const { type, loading } = action
  switch(type) {
    case SET_LOADING:
      return loading
    default:
      return state
  }
}

export default combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  admin: adminReducer,
  loading: loadingReducer
})
