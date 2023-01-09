import React, { useEffect } from 'react'
import { useState } from 'react'
import { Mesagge } from './Mesagge';

export const Simpleform  = () => {
const [formstate, setFormState ]= useState(

    {
        username: 'strider',
        email: 'fxavi182morales@gmail.com'
    }


);

 const {username, email} =formstate;
 const onInputChange= ( {target} )=>
 {
    const { name, value} =target;
    setFormState(
        {
            ...formstate,
            [name]:value
        }
    );
 }
 useEffect( () =>
 {
    //console.log('useEffect Called!')
 },[formstate] );

 useEffect( () =>
 {
   // console.log('email changed!')
 },[email] );



  return (
    <>
    <h1>Formulario simple</h1>
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
    placeholder="xaviermorales@emelec.com.ec"
    name="email"
    value={email}
    onChange={ onInputChange }


    
    />
    {
        username=="strider2" && <Mesagge/>
    }


    </>
    
  )
}
