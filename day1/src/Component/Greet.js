import React from 'react';

// function Greet(){
// return <h1>Greet</h1>

// }
// export default Greet

// export const Greet = ()=><h1>Welcome to greet</h1>

export const Greet = (props)=>{
    console.log(props);

    return (
        <div>
            <h1>Greet {props.name} kids {props.children}</h1>

        </div>
    )
}