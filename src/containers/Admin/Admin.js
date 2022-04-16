/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import { Route } from 'react-router'
import axios from 'axios'

import GuestList from './GuestList/GuestList'
import Spinner from '../../components/UI/Spinner'

import logo from '../../assets/img/preloader.png'

class Admin extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        loading: "",
        userId: null,
        token: null,
    }

    componentDidMount() {
        this.checkAuthState()
        setTimeout(() => {
            if(this.state.userId) {
                this.props.history.replace('/admin/guest-list')
            }
        }, 200);
    }

    inputChangedHandler = (event) => {
        const newState = {
            ...this.state
        }

        if(event.target.name === "email") {
            newState.email = event.target.value 
        } else if (event.target.name === "password") {
            newState.password = event.target.value
        } 

        
        this.setState({
            email: newState.email,
            password: newState.password
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const errors = []
        const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,20})(\.[a-z]{2,20})?$/

        if(regex.test(this.state.email)) {
            this.setState({loading: true})
            const details = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true
            }
            axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAv6qzuRTygvSuxveLmSNVAbdnWT1mQbC0", details)
            .then(response => {
                this.setState({
                    loading: false,
                    userId: response.data.localId,
                    token: response.data.idToken
                })
                this.props.history.replace('/admin/guest-list')
                const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn) * 1000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', response.data.localId)
                this.checkAuthTimeout(response.data.expiresIn)
            })
            .catch(error => {
                errors.push("Sorry, you're not allowed here!")
                this.setState({error: errors.join(" ")})
                this.setState({
                    loading: false,
                })
            })
        } else {
            errors.push("Please enter a valid e-mail address.")
            this.setState({error: errors.join(" ")})
        }
    }

    logout = () => {
        this.setState({
            userId: null,
            token: null
        })
        localStorage.removeItem('token')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('userId')
    }

    checkAuthTimeout = (time) => {
        setTimeout(() => {
            this.logout()
        }, time * 1000)
    }

    checkAuthState = () => {
        const token = localStorage.getItem('token')
        if(!token){
            this.logout()
        } else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                this.logout()
            } else{
                const userId  = localStorage.getItem('userId')
                this.setState({
                    userId: userId,
                    token: token
                })
                this.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
            }
        }
    }

    render() {
        let admin = null
        let form = (
            <form className="form" onSubmit={this.onSubmitHandler} data-aos="fade-up">
                <div className="form__error">{this.state.error}</div>
                <div className="input__group">
                    <input onChange={this.inputChangedHandler} value={this.state.email} type="email" name="email" required placeholder="E-mail" className="input__text" />
                    <label htmlFor="email" className="input__label">E-mail</label>
                </div>

                <div className="input__group">
                    <input onChange={this.inputChangedHandler} value={this.state.passwor} type="password" name="password" required placeholder="Password" className="input__text" />
                    <label htmlFor="password" className="input__label">Password</label>
                </div>

                <button className="btn btn--transparent">Login</button>
            </form> 
        )

        if(this.state.loading) {
            form = <Spinner />
        }

        if(this.state.userId) {
            admin = (
                <Route path={this.props.match.path + "/guest-list"} component={GuestList} />
            )
        }else {
            admin = (
                <main className="admin">
                    <figure className="admin__logo-box">
                        <img src={logo} alt="Logo" className="admin__logo"/>
                    </figure>

                    <section className="guestList__section guestList__section--1">
                        <div className="guestList__container guestList__container--1">
                            <h1 className="heading--2 center" data-aos="fade-right">Guest List</h1>
                            <p className="center" data-aos="fade-left">Login to continue.</p>
                            {form}
                        </div>
                    </section>
                    <span className="admin__name">Seun + Nathan</span>
                </main>
            )
        }

        return (
            [admin]
        )
    }
}

export default Admin