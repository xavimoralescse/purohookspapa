import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook  = () => {

 const {formstate, onInputChange, onResetForm, username,email, password} = useForm(
  
      {
            username: '',
            email: '',
            password: ''
        });

  //const {username, email, password}=formstate;


  return (
    <>
    <h1>Form with custom hook</h1>
    <hr/>
    <input
    type= "text"
    className="form-control"
    placeholder="username"
    name="username"  
    value={username}
    onChange={ onInputChange }
    />
    <input
    type= "email"
    className="form-control mt-2"
    placeholder="email"
    name="email"
    value={email}
    onChange={ onInputChange }
   
    />
  
  <input
    type= "password"
    className="form-control mt-2"
    placeholder="password"
    name="password"
    value={password}
    onChange={ onInputChange }
   
    />
    <button
    onClick={ onResetForm }
    type= "password"
    className="btn btn-primary mt-4"> Borrar </button>
    </>
    
  )
}
