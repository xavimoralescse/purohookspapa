import React, { useEffect, useState } from 'react'

export const Mesagge = () => 
 {

    const [coords, setCoords]=useState({x:10, y:10});
    useEffect( () =>
    {

        const onMouseMove = ({x,y})=>
        {
            //const coords={x,y};
            //console.log(coords);
            setCoords({x,y})
        }
        window.addEventListener('mousemove' , onMouseMove);
        return()=>
        {
            window.removeEventListener('mousemove' , onMouseMove); 
        }
           
        }, []);
      

   

        return (
    <>
    <h3>Usuario ya existente</h3>
    {
        JSON.stringify(coords)
    }
    
    </>
   )
} 