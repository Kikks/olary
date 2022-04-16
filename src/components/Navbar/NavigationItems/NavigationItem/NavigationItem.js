import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) =>{ 
    let classes = ["nav__link", props.className]
    return(
        <li className = "nav__list-item">
            <NavLink to = {props.link} exact = {props.exact} activeClassName = "nav__link--active" className = {classes.join(' ')} onClick = {props.clicked}>{props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;