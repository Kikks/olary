import React from 'react'
import Header from '../../components/Header'
import { ReactComponent as Text } from '../../assets/SVG/text.svg'
import Svg from '../../components/UI/Svg'
import Top from '../../hoc/Top'
import Timer from '../../components/Timer'
import { Link } from 'react-router-dom'
import PictureSection from '../../components/PictureSection'

import header from '../../assets/img/header.jpg'

import picture1 from '../../assets/img/image24.jpg'
import picture2 from '../../assets/img/image16.jpg'
import picture3 from '../../assets/img/image33.jpg'

import composition1 from '../../assets/img/image28.jpg'
import composition2 from '../../assets/img/image30.jpg'

function Home(){
        return (
            <Top>
                <main className="main">
                    <Header image={header}>
                        <div className="header__container">
                            <Text className="header__text"/>
                        </div>
                        <a href="#intro" className="header__svg-box">
                            <Svg class="header__svg" src="chevron-down" />
                        </a> 
                    </Header>

                    <section className="section section--overlap" id="intro">
                        <div className="section__container">
                            <h1 className="heading--1 timer__heading" data-aos="fade-right">
                                When?!
                                <Svg src="clock" class="heading--1__svg" />
                            </h1>
                            <p className="timer__paragraph" data-aos="fade-up">We're tying the knot on the 22nd of August, 2020.</p>
                            <Timer />
                            <div title="Add to Calendar" id="btn" class="btn btn--transparent addeventatc" data-aos="fade-up">
                                Add to Calendar
                                <span class="start">08/22/2020 08:00 AM</span>
                                <span class="end">08/22/2020 10:00 PM</span>
                                <span class="title">Seun + Nathan</span>
                                <span class="description">We're getting married!!! If you've RSVP on our website, check your email to get the details of the Livestream. See you there!</span>
                            </div>
                        </div>
                    </section>

                    <PictureSection image = {picture1}></PictureSection>

                    <section className="section">
                        <div className="section__container">
                            <h1 className="heading--1 timer__heading" data-aos="fade-right">
                                Where?!
                                <Svg src="location" class="heading--1__svg" />
                            </h1>
                            <p className="timer__paragraph" data-aos="fade-up">With Covid-19 on the lose and in accordance with the laws of the land, we won't be partying together physically. Nevertheless, we're going to be having the whole event covered and made available for Livestreaming!! Kindly head over to the RSVP section and fill in your details.</p>
                            <Link to="/rsvp" className="btn btn--transparent" data-aos="fade-up">RSVP</Link>
                        </div>
                    </section>

                    <PictureSection image={picture2}></PictureSection>
                    
                    <section className="section section__about">
                        <svg viewBox="0 0 250 150" className="circle" data-lax-presets="leftToRight-.1">
                            <circle cx="50%" cy="50%" r="70"></circle>
                        </svg>

                        <svg viewBox="0 0 250 150" className="circle" data-lax-presets="rightToLeft-.1">
                            <circle cx="50%" cy="50%" r="70"></circle>
                        </svg>

                        <div className="section__container composition__container">
                            <div className="composition">
                                <div className="composition__animation composition__animation--1" data-aos="fade-left">
                                    <figure className="composition__img-box composition__img-box--1" >
                                        <img src={composition1} alt="Composition 1" className="composition__img" />
                                    </figure>
                                </div>
                                
                                <div className="composition__animation composition__animation--2" data-aos="fade-right" data-aos-delay="500">
                                    <figure className="composition__img-box composition__img-box--2" >
                                        <img src={composition2} alt="Composition 2" className="composition__img"  />
                                    </figure>
                                </div>
                            </div>


                            <div className="composition__details">
                                <h1 className="heading--1" data-aos="fade-right">
                                    Our Story
                                    <Svg src="open-book" class="heading--1__svg" />
                                </h1>
                            
                                <p className="composition__text" data-aos="fade-up">Penning down these memories that have led us to this beautiful moment fills us with joy so unexplainable we can't help but laugh and be thankful to God for ordering our feet to cross each other's paths. </p>
                                <p className="composition__text" data-aos="fade-up">On a cool July evening in 2016, I was scrolling through the then Blackberry Messenger(BBM) Feed ...</p>
                            
                                <Link to="/story" className="btn btn--transparent" data-aos="fade-up">Read more</Link>
                            </div>

                            
                        </div>
                    </section>

                    <PictureSection image={picture3}></PictureSection>

                    <div className="section olary__section">
                        <div className="section__container">
                        </div>
                    </div>
                </main>
            </Top>
        )
    }

export default Home