import React from 'react'
import preloader from '../assets/img/preloader.png'

const Preloader =() => (
    <div className="preloader">
        <img src={preloader} alt="preloader_img" className="preloader__img"/>
    </div>
)

export default Preloader