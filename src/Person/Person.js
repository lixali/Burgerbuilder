import React from 'react';


var person = (props) => {

return (
    <div>
    <p> this is from person, name is {props.name} </p>
    <p> age is {props.age} </p>
    <p> the rest is {props.children} </p>
    <input type="text" onChange={props.changed}/>
    
    </div>
)




};



export default person;