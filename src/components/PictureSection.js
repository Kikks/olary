import React from 'react'

const PictureSection = (props) => {
    const style = {
        backgroundImage: "url(" + props.image + ")"
    }

    return (
        <div className="pictureSection" style={style}>
            <div className="pictureSection__container">
                {props.children}
            </div>
        </div>
    )
}

export default PictureSection