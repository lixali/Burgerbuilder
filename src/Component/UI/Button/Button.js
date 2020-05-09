import React from 'react' //rafce
import classes from './Button.css'

const Button = (props) => {
    return (
        <button className={
            [classes.Button, classes[props.btntype]].join(' ')} 
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button






//import React from 'react'  //shortcut imr

//const button = (params) => { //shortcut nfn
    
//}

//export default button