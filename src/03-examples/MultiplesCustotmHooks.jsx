import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultiplesCustotmHooks = () => {
    const {data,data2, isloading, hasError} = useFetch(`https://v3.football.api-sports.io/`);
    const { error, result}=!!data && data.api.error;
    console.log(data, isloading, hasError);
if (isloading) {
    return(
        <h1>cargando....</h1>


    )
}

    return (
    <>
    <h1>BREAKING BAD QUOTES</h1>
    <hr/>

    {
        isloading
        ?(
            <div className="alert alert-info text-center">
                Loading...
            </div>
         )
            :(
                <blockquote className="blockquote text-end">
                    <p className="mb-1">xxx</p>


                    <p className="mb-1">{data.api.error}</p>
                     <footer className="blockquote-footer">{data.api.code}</footer>
                </blockquote>
             )


          
              }
    

    <div className="alert alert-info text-center">
        Loading....
    </div>

    <button ClassName="btn btn-primary">Next Quote</button>
    
    </>
   
  )
}
