import React from 'react'

const GalleryImage = (props) => (
    <div className= {"gallery__image " + props.className}  style = {props.style} data-aos="fade-up"
    onClick = {() => {
        props.imageClicked()
        props.indexSend()
    }}>
    </div>
)

export default GalleryImage