import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementing, incrementing, logining } from './actions';

function App() {
  const counter = useSelector(state=>state.countersss)
  const login = useSelector(state=>state.login)
  const dispatch = useDispatch();
  let SIGN_IN = '';
  if(login){
    SIGN_IN = 'Login'
  }
  else{
    SIGN_IN = 'Logout'
  }
  return (
    <div>
      <h1>Baisc Redux</h1>
      <h1>counter: {counter}</h1>
      <button onClick={()=>{dispatch(incrementing())}}>Increment</button>
      <button onClick={()=>{dispatch(decrementing())}}>Increment</button>
      <button onClick={()=>{dispatch(logining())}}>{SIGN_IN}</button>
    </div>
  )
}

export default App