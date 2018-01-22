import React from 'react';
import Aux from '../../../hocs/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const orderSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {orderSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.orderCancelled} buttonType="Danger">CANCEL</Button>
            <Button clicked={props.orderContinued} buttonType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;