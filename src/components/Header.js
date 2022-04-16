import React from 'react'
import ParallaxComponent from './ParallaxComponent'


const Header = (props) => {
    
    return(
        <ParallaxComponent img = {props.image}>
            <header id="header" className="header">
                {props.children}
            </header>
        </ParallaxComponent>
    )   
}

export default Header