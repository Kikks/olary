import React from 'react'

import sprite from '../../assets/sprite.svg'

const Svg = (props) => (
    <svg onClick={props.clicked} className={props.class}><use xlinkHref={sprite+"#icon-"+props.src} data-aos = {props.animation} data-aos-delay = {props.delay}></use></svg>
)

    
export default Svg