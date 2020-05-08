import React, { Component } from 'react';
import Aux from '../../Hoc/Aux'
import Burger from '../../Component/Burger/Burger'
import Buildcontrols from '../../Component/Burger/Buildcontrols/Buildcontrols'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,

}

class Burgerbuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    totalprice: 4,
    purchasable: false ,
    }

    updatepurchasestate = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum+el
            }, 0)

        this.setState({purchasable: sum > 0})
    }

    addingredienthandler = (type) => {  // be careful, I need to pass the type to this function
        const oldcount = this.state.ingredients[type];
        const updatedcount = oldcount + 1;  // only adding 1 ingredient at 1 time
        const updatedingredients = {
            ...this.state.ingredients  // is it kind of like list2 = list1[:]?????
        };
        updatedingredients[type] = updatedcount;
        const priceaddition = INGREDIENT_PRICES[type];  //mssing the ; will break the code, and it doesn't give correct debugging information 
        const oldprice = this.state.totalprice;
        const newprice = oldprice + priceaddition;  
        this.setState({totalprice: newprice, ingredients: updatedingredients}); 
        this.updatepurchasestate(updatedingredients); // why this.state.ingredient is not updated and "updatedingredients" needs to be passed inside??? 
                                                        // the udemy instructor doesn't explain on it....
    }

    removeingredienthandler = (type) => {
        const oldcount = this.state.ingredients[type];
        if (oldcount <=0 ) {
            return null;
        }  
        const updatedcount = oldcount - 1;  // only adding 1 ingredient at 1 time
        const updatedingredients = {
            ...this.state.ingredients  // is it kind of like list2 = list1[:]?????
        };
        updatedingredients[type] = updatedcount;
        const pricereduction = INGREDIENT_PRICES[type];  //mssing the ; will break the code, and it doesn't give correct debugging information 
        const oldprice = this.state.totalprice;
        const newprice = oldprice - pricereduction;  
        this.setState({totalprice: newprice, ingredients: updatedingredients}); 
        this.updatepurchasestate(updatedingredients);
        
    } 

    render() {
        const disabledinfo = {
            ...this.state.ingredients
        }
        for (let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key] <= 0 // if condition is disabledinfo[key] <= 0, it it is true, disabledinfo[key] will be true, otherwise it will be false
        }
        // disabledinfo is {salad: true, meat: false ...}
        return (
            <Aux>
                <p>this is from burgerbuilder.js </p>
                <Burger ingredients={this.state.ingredients}/>
                <Buildcontrols 
                    ingredientadded={this.addingredienthandler}
                    ingredientremoved={this.removeingredienthandler} 
                    disabled={disabledinfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalprice}/>  /* remember to pass the "type" to the addingredienthandler */
            
            </Aux>

        );
    }
}

export default Burgerbuilder;