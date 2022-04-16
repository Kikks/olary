import React from 'react';
import Particles from 'react-particles-js'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const Sidebar = (props) => {
    let classes = ["sidebar", "sidebar--closed"];

    if(props.sidebarShown){
        classes = ["sidebar", "sidebar--opened"]
    }

    return (
        <div className = {classes.join(' ')}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }} />
            <div className="sidebar__container">
                <NavigationItem className = "sidebar__link" exact = {true} link = "/" clicked = {props.linkClicked}>Home</NavigationItem>
                <NavigationItem className = "sidebar__link" link = "/story" clicked = {props.linkClicked}>Our Story</NavigationItem>
                <NavigationItem className = "sidebar__link" link = "/gallery" clicked = {props.linkClicked}>Gallery</NavigationItem>  
                <NavigationItem className = "sidebar__link" link = "/rsvp" clicked = {props.linkClicked}>RSVP</NavigationItem>  
                <NavigationItem className = "sidebar__link" link = "/registry" clicked = {props.linkClicked}>Gift Registry</NavigationItem>
            </div>
        </div>
    );
};

export default Sidebar;