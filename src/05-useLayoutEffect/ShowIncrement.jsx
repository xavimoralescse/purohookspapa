import React from 'React';
export const ShowIncrement = React.memo(( {increment}) => {
    console.log("me cago en 3");

  return (
    <button 
    className="btn btn-primary"
    onClick={() =>{
        increment(5);
    }}
>Incrementar</button>
  )
} )
