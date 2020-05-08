import React from 'react';
import classes from './Burger.css';
import Burgeringredient from './Burgeringredient/Burgeringredient'

const burger = (props) => {
    {/*this is to transfor the object of key value pair to dynamically get the number of cheese, meet, etc   */}
    let transformedingredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Burgeringredient key={igKey + i} type={igKey} />;
            });

        })    
        .reduce((arr,el) => {
            return arr.concat(el)
        }, []);
    if (transformedingredients.length === 0) {
        transformedingredients = <p>Please start adding ingredient! </p>
    }

    console.log(transformedingredients);        
    return (

        <div className={classes.Burger}>
            <Burgeringredient type="bread-top" />
            {transformedingredients}
            <Burgeringredient type="bread-bottom" />
            {/*this is comment  */}
        </div>

    );


};

export default burger