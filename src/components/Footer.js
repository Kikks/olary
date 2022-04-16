import React from 'react'
import Svg from './UI/Svg'

const Footer = () => (
    <footer className="footer">
        <div className="section__container">
            <div className="footer__verse-container">
                <div to="#header" className="footer__top" onClick={() => window.scrollTo(0,0)}>
                    <Svg src="chevron-up" class="footer__top-svg" />
                    <span>top</span>
                </div>
                <p className="footer__verse" data-aos="fade-right">"And now these three remain: faith, hope and love. But the greatest of these is love."</p>
                <span className="footer__verse-book" data-aos="fade-left">1 Corinthians 13:13</span>
            </div>
        </div>
        <div className="footer__legal">
            <p className="footer__legal-text">Designed & Developed by <a href="https://okikioluwa-portfolio.netlify.app" className="footer__legal-link">Olufemi Samuel</a></p>  
        </div>
    </footer>
)

export default Footer