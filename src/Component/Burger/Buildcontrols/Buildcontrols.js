import React from 'react';
import classes from './Buildcontrols.css'
import Buildcontrol from './Buildcontrol/Buildcontrol'

const buildcontrols = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },

    ];

    return (
        <div className={classes.Buildcontrols}>
            <p>Total price of the burger is {props.price.toFixed(2)}</p>
            {controls.map(ctrl => (<Buildcontrol
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientadded(ctrl.type)}
                removed={() => props.ingredientremoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />))}
            
            <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>

        </div>
    );  //disabled is is button built-in property, it can disbale the button
};

export default buildcontrols