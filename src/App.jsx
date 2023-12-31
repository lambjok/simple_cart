import { useEffect, useReducer } from 'react'
import axios from 'axios'

import { cartReducer } from './reducers/cartReducer'

import Products from './components/Products'
import Cart from './components/Cart'

function App() {

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  useEffect(() => {
    getProgucts()
  }, [])
  
  const getProgucts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products,
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
