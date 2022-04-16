import React, { Component } from 'react'
import Header from '../../components/Header'
import Svg from '../../components/UI/Svg'

import header from '../../assets/img/registryHeader.jpg'
import Top from '../../hoc/Top'

class Registry extends Component {
    render() {
        return (
            <Top>
                <main className="main">
                    <Header image={header} >
                            <div className="header__container">
                                <h1 className="header__heading" data-aos="fade-left" data-aos-delay="2000">
                                    Gift <span>Registry</span>
                                </h1>
                            </div>
                            <a href="#account" className="header__svg-box">
                                <Svg class="header__svg" src="chevron-down" />
                            </a> 
                    </Header>

                    <section id ="account" className="section">
                        <div className="section__container">
                            <p className="form__paragraph" data-aos="fade-left">Please do not feel obligated to gift us anything. All we really want on our wedding day is to have you there to celebrate the occasion with us. The biggest gift to us is your support and your attendance on our wedding day. However, should you wish to buy us a wedding present, we have set up a gift and honeymoon cash registry for your convenience.</p>
                            <p className="form__paragraph" data-aos="fade-right">We look forward to celebrating with you.</p>
                            <p className="form__paragraph" data-aos="fade-left">Love; <span> Seun & Nathan</span></p>
                            <h1 className="heading--1 bank__heading" data-aos="fade-right">Bank Details</h1>
                            <div className="bank" data-aos="fade-up">
                                <div className="bank__row">
                                    <span className="bank__detail">Account Name:</span>
                                    <span className="bank__value">Nathan Olufemi</span>
                                </div>

                                <div className="bank__row">
                                    <span className="bank__detail">Account Number:</span>
                                    <span className="bank__value">0003550064</span>
                                </div>

                                <div className="bank__row">
                                    <span className="bank__detail">Bank:</span>
                                    <span className="bank__value">GT Bank</span>
                                </div>
                            </div>
                            <div className="bank" data-aos="fade-up">
                                <div className="bank__row">
                                    <h1 className="heading--2">OR</h1>
                                </div>
                            </div>
                            <div className="bank" data-aos="fade-up">
                                <div className="bank__row">
                                    <span className="bank__detail">Account Name:</span>
                                    <span className="bank__value">Oluwaseun Akingbade</span>
                                </div>

                                <div className="bank__row">
                                    <span className="bank__detail">Account Number:</span>
                                    <span className="bank__value">0163883620</span>
                                </div>

                                <div className="bank__row">
                                    <span className="bank__detail">Bank:</span>
                                    <span className="bank__value">GT Bank</span>
                                </div>
                            </div>

                            <div className="bank" data-aos="fade-right">
                                <div className="bank__row">
                                    <p className="bank__paragraph">P.S: Use the hashtag #Olary20 to make transfers so we can identify them. Muchos Gracias!</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </Top>
        )
    }
}

export default Registry