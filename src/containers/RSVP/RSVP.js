/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import Top from '../../hoc/Top'
import Spinner from '../../components/UI/Spinner'
import Svg from '../../components/UI/Svg'
import Auxiliary from '../../hoc/Auxiliary'

import header from '../../assets/img/rsvpHeader.jpg'

class RSVP extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        error: "",
        loading: false,
        submitted: false,
        message: "Awesome! We'll send you the details of the zoom meeting two days before the main event. See you soon!!"
    }

    inputChangedHandler = (event) => {
        const newState = {
            ...this.state
        }

        if(event.target.name === "firstName") {
            newState.firstName = event.target.value 
        } else if (event.target.name === "lastName") {
            newState.lastName = event.target.value
        } else if (event.target.name === "email") {
            newState.email = event.target.value 
        }

        
        this.setState({
            firstName: newState.firstName,
            lastName: newState.lastName,
            email: newState.email
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const errors = []
        const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,20})(\.[a-z]{2,20})?$/

        if(regex.test(this.state.email)) {
            this.setState({loading: true})
            const details = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                status: 'unattended'
            }
            axios.put('https://olary20-wedding.firebaseio.com/guestList/' + this.state.email.split('@')[0] + '.json', details)
            .then(response => {
                this.setState({
                    loading: false,
                    submitted: true
                })
            })
            .catch(error => {
                alert(error)
                this.setState({
                    loading: false,
                })
            })
        } else {
            errors.push("Please enter a valid e-mail address.")
            this.setState({error: errors.join(" ")})
        }
    }

    render() {
        let form = (
            <Auxiliary>
               <p className="form__paragraph" data-aos="fade-left">We're so excited to see you at our big day! Kindly fill this form to get the link to the livestream of our wedding on zoom via email. Please do so before the 20th of August, 2020.</p>

               <form className="form" onSubmit={this.onSubmitHandler} data-aos="fade-up">
                    <div className="form__error">{this.state.error}</div>
                    <div className="input__group">
                        <input onChange={this.inputChangedHandler} value={this.state.firstName} type="text" name="firstName" required placeholder="First Name" className="input__text" />
                        <label htmlFor="firstName" className="input__label"> First Name</label>
                    </div>

                    <div className="input__group">
                        <input onChange={this.inputChangedHandler} value={this.state.lastName} type="text" name="lastName" required placeholder="Last Name" className="input__text" />
                        <label htmlFor="lastName" className="input__label">Last Name</label>
                    </div>

                    <div className="input__group">
                        <input onChange={this.inputChangedHandler} value={this.state.email} type="email" name="email" required placeholder="E-mail Address" className="input__text" />
                        <label htmlFor="email" className="input__label">E-mail Address</label>
                    </div>

                    <button className="btn btn--transparent">Submit</button>
                </form> 
            </Auxiliary>
            
        )

        if(this.state.loading) {
            form = <Spinner />
        }  else {
            if(this.state.submitted) {
                form = (
                    <div className="submitted">
                        <p className="submitted__alert">{this.state.message}</p>
                    </div>
                )
            }
        }

        return (
            <Top>
                <main className="main">
                    <Header image={header}>
                        <div className="header__container">
                            <h1 className="header__heading" data-aos="fade-left" data-aos-delay="2000">
                                RSVP
                            </h1>
                        </div>
                        <a href="#form" className="header__svg-box">
                            <Svg class="header__svg" src="chevron-down" />
                        </a> 
                    </Header>

                    <section id="form" className="section">
                        <div className="section__container">
                            {form}
                        </div>
                    </section>
                </main>
            </Top>
        )
    }
} 

export default RSVP