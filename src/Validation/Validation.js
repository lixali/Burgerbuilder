import React from 'react';


const validation = (props) => {

    let length_message = "length is too short";
    if (props.inputLength >= 5){
        length_message = "length is too long";
    }
return (
    <div>
        <p>{length_message}</p>
    </div>

)

};



export default validation;