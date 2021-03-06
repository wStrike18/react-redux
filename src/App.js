import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementbydos } from './store/slices/counter/counterSlice'

 const App = () => {
  const { counter } = useSelector((state) => state.counter) //para obtener algo de nuestro store
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Increment value of two"
          onClick={() => dispatch(incrementbydos(2))}
        >
          IcrementBy2
        </button>

        
        <span> {counter}</span>
       
      </div>
    </div>
  )
}

export default App ; 