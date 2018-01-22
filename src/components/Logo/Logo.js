import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png' //Let webpack know logo is being used

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;