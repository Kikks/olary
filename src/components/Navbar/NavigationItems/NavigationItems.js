import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

const NavigationItems = (props) => {
    return (
        <nav className = {props.class}>
            <div className="nav__container">
                <NavLink to ="/" className="nav__brand">Seun + Nathan</NavLink>
                <ul className="nav__list">
                    <NavigationItem exact = {true} link = "/">Home</NavigationItem>
                    <NavigationItem  link = "/story">Our Story</NavigationItem>
                    <NavigationItem  link = "/gallery" >Gallery</NavigationItem>
                    <NavigationItem  link = "/rsvp">RSVP</NavigationItem>
                    <NavigationItem  link = "/registry">Gift Registry</NavigationItem>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationItems;