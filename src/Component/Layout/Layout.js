import React from 'react';
import classes from './Layout.css'
import Aux from '../../Hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
{/* 
const layout = (props) => {
    return (
    <div>
        <div>this is from layout.js</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
)

    }
*/}
// the following code is the same as above; but why use Aux, it seems that it is redundant????
const layout = (props) => (
    <Aux>
        <div>this is from layout.js</div>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)




export default layout;