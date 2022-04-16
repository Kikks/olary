import React from 'react'
import { Parallax } from 'react-parallax'

const ParallaxComponent = (props) => (
    <Parallax
            blur={0}
            bgImage={props.img}
            bgImageAlt="BgImage"
            strength={300}
        >
            <div className="parallax">
               {props.children}
            </div>
            
        </Parallax>
)

export default ParallaxComponent