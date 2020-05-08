import React from 'react';
import classes from './Layout.css'
import Aux from '../../Hoc/Aux'


const layout = (props) => (
    <Aux>
    <div>this is from layout.js</div>
    <main className= {classes.Content}>
        {props.children}
    </main>

    </Aux>

);

export default layout;