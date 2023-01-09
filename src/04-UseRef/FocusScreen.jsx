import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
  
    const inputRef = useRef();
    const onClick = () =>{
        ///console.log(inputRef);
        inputRef.current.select();
    }
    //console.log(inputRef);

  {
   // document.querySelector('input').select();
  }

  
  
    return (
    <>
    <h1>Focus Screen</h1>
    <hr/>
    <input
    ref={inputRef}
    type="text"
    placeholder="Ingrese su nombre"
    className="form-control">
    
    </input>

    <input
    type="text"
    placeholder="Ingrese su nombre"
    className="form-control">
    
    </input>

    <input
    type="text"
    placeholder="Ingrese su nombre"
    className="form-control">
    
    </input>
    <input
    type="text"
    placeholder="Ingrese su nombre"
    className="form-control">
    
    </input>
    <button 
    className="btn btn-primary mt-4"
    onClick={onClick}>Set Foccus</button>
    </>
  )
}
