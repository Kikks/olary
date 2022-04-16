import React, { Component } from 'react'

import {ReactComponent as Left} from '../../../assets/SVG/chevron-left.svg'
import {ReactComponent as Right} from '../../../assets/SVG/chevron-right.svg'

import Auxiliary from '../../../hoc/Auxiliary'
import Svg from '../../UI/Svg'

class ImageSlider extends Component{
    state = {
        updated: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setURL()
        }, 200);
    }

    setURL = () => {
        if(!this.state.updated) {
            window.location.href = window.location.href.split('/')[0] + "/" + window.location.href.split('/')[1] + "/" + window.location.href.split('/')[2] + "/gallery#" + this.props.index
        }

        this.setState({updated: true})
    }

    render() {
        const sliderStyle = {
            gridTemplateColumns: "repeat(" + this.props.sliderImages.length + ", 100vw)"
        }

        return(
            <Auxiliary>
                    <div className = "slider">
                        <Svg src ="cross"class="slider__close" clicked = {this.props.clicked}></Svg>
    
                        <Left className = "slider__svg slider__svg--left" onClick = {this.props.leftClick}/>
                        <Right className = "slider__svg slider__svg--right" onClick = {this.props.rightClick}/>
    
                        <div className="slider__box" style={sliderStyle}>
                            {this.props.sliderImages.map((image, id) => (
                                <div key={id} id = {id} className="slider__img-container">
                                    <img src = {image} className = "slider__img" alt = "Slider__image"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </Auxiliary>
        )
    }   
}

export default ImageSlider