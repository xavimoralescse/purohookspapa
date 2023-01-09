import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterWithCustomHooks = () => {
  
    const {counter, aumenta, disminuye, reset } = useCounter();
  
  
    return (
    <>
    <h1>Counter with hook: {counter} </h1>
    <hr/>
    <button className="btn btn-primary" onClick={ () => aumenta(2)} >+1</button>
    <button className="btn btn-primary"onClick={reset} >Reset</button>
    <button className="btn btn-primary"onClick={()=>disminuye(2)} >-1</button>

    </>



  )
}
