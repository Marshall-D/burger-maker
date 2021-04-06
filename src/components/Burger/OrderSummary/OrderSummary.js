import React from 'react';
import Auxiliary from "../../../hoc/auxiliary";
import Button from "../../ui/Button/Button";

const OrderSummary = (props) => {

    const orderSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}> {igKey} </span> {props.ingredients[igKey]}
            </li>)
    });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your Delicious Burger with the following ingredients: </p>
            <ul>
                {orderSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button buttonType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};


export default OrderSummary;