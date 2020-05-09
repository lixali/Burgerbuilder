import React from 'react';
import Aux from '../../../Hoc/Aux'
import Button from '../../../Component/UI/Button/Button'

const ordersummary = (props) => {
    const ingredientsummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })
    return (
        <Aux>
            <h3>Your Order </h3>
            <p>A delicious burger with the following ingredient</p>
            <ul>
                {ingredientsummary}
            </ul>
            <p><strong>Total Price:</strong> {props.totalprice}</p>
            <p>Continue to check out?</p>
            <Button btntype='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btntype='Success' clicked={props.continue}>CONTINUE</Button>
        </Aux>

    );

};

export default ordersummary