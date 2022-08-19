import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,login } from './actions'


function App() {
  const counter = useSelector(state => state.counter)
  const singIn = useSelector(state => state.login)
  const dispatch = useDispatch()
  let SIGN_IN = '';
  if (singIn) {
    SIGN_IN = 'Sing_In'
  }
  else {
    SIGN_IN = 'Sing_Out'
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
  {/* dispatch excuted the action */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(login())}>{SIGN_IN}</button>
      {
        singIn ?
          <p>Please Login</p> : <p>Thanks....</p>
      }
    </div>
  )
}

export default App