import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, islogin } from './actions';
function App() {
  const counters = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  let SIGN = '';
  if (login) {
    SIGN = 'Logout'
  }
  else {
    SIGN = 'Login'
  }
  return (
    <div>
      <h1>Basic Redux with middleware</h1>
      <h3>counters: {counters}</h3>
      <button onClick={() => { dispatch(increment()) }}>Increment</button>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
      <button onClick={() => { dispatch(islogin()) }}>{SIGN}</button>
      {
        login
        ?
        <h3>Thanks</h3>
        :
        <h3>No Thanks</h3>
      }
    </div>
  )
}
export default App; 