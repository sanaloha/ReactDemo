import React from 'react';


const Hello = ()=>{

    return React.createElement('div',{id:'div1',className:'dummyClass'},
        React.createElement('h2',null,'Hello')

    )
}
export default Hello
