import  React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    // this component receives ingrediens as props
    // converting the ingredient objecct into an array of the values of the ingredient
    let transformedIngredient = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,index) =>{
            return <BurgerIngredient key={igKey + index} type={igKey}/>;

        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[]);
        console.log(transformedIngredient);
        if (transformedIngredient.length === 0){
            transformedIngredient = <p>start adding items here</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>


        </div>
    )

}

export default Burger;