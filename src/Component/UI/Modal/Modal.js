import React from 'react'
import classes from './Modal.css'
import Aux from '../../../Hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalclosed}/>
            <div className={classes.Modal} style={{
                transform:props.show? 'translateY(0)': 'translateY(-200vh)',
                opacity: props.show? '1':'0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;