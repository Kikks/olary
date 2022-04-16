import React, { Component } from 'react'
import axios from 'axios'
import Counter from '../../../components/GuestList/Counter'
import Svg from '../../../components/UI/Svg'

class GuestList extends Component {
    state = {
        pending: [],
        approved: [],
        disapproved: [],
        status: "Pending",
        token: null,
        approvedGuests: null
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo = () => {
        const  x = setInterval(() => {
            let token = null

            if(localStorage.getItem('token')) {
                this.setState({
                    token: localStorage.getItem('token')
                })
            }
            axios.get('https://olary20-wedding.firebaseio.com/guestList.json?auth=' + this.state.token + '&orderBy="status"&equalTo="unattended"')
            .then(response => {
                const pending = [];
                for(let key in response.data){
                    pending.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({
                    pending: pending
                })
            })
            .catch(error => {
                console.log(error);
            })

            axios.get('https://olary20-wedding.firebaseio.com/guestList.json?auth=' + this.state.token + '&orderBy="status"&equalTo="approved"')
            .then(response => {
                const approved = [];
                for(let key in response.data){
                    approved.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({
                    approved: approved
                })
            })
            .catch(error => {
                console.log(error);
            })

            axios.get('https://olary20-wedding.firebaseio.com/guestList.json?auth=' + this.state.token + '&orderBy="status"&equalTo="disapproved"')
            .then(response => {
                const disapproved = [];
                for(let key in response.data){
                    disapproved.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({
                    disapproved: disapproved
                })
            })
            .catch(error => {
                console.log(error);
            })

            if(token !== null) {
                clearInterval(x)
            }
        }, 1000);
    }

    logout = () => {
        this.setState({
            token: null
        })
        localStorage.removeItem('token')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('userId')
        window.location.href = window.location.href.split('/')[0] + "/" + window.location.href.split('/')[1] + "/" + window.location.href.split('/')[2] + "/admin"
    }

    onCounterClicked = (type) => {
        if(type === 'Pending') {
            this.setState({status: type})
        } else if (type === 'Approved') {
            this.setState({status: type})
        } else if (type === 'Disapproved') {
            this.setState({status: type})
        }
    }

    onApproved = (id) => {
        const details = {
            status: 'approved'
        }

        axios.patch('https://olary20-wedding.firebaseio.com/guestList/' + id + '.json', details)
        .catch(error => {
            alert(error)
        })
    }


    onDisapproved = (id) => {
        const details = {
            status: 'disapproved'
        }

        axios.patch('https://olary20-wedding.firebaseio.com/guestList/' + id + '.json', details)
        .catch(error => {
            alert(error)
        })
    }

    onFetchApprovedGuests = () => {
        axios.get('https://olary20-wedding.firebaseio.com/guestList.json?auth=' + this.state.token + '&orderBy="status"&equalTo="approved"')
        .then(response => {
            console.log(response.data);
            this.setState({
                approvedGuests: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })   
    }

    onPostApprovedGuests = () => {
        axios.patch('https://olary20-wedding.firebaseio.com/approvedGuests.json', this.state.approvedGuests)
        .catch(error => {
            alert(error)
        })
    }

    render() {
        let status = null

        if(this.state.status === "Pending") {
            status = (
                <ul className="guest__list">
                    {this.state.pending.length === 0 ? <p className="center">There are no pending requests.</p>: ""}
                    {this.state.pending.map(guest => {
                        const approved = () => {
                            this.onApproved(guest.id)
                        }
                        
                        const disapproved = () => {
                            this.onDisapproved(guest.id)
                        }
                                
                        return (
                            <li className="guest__list-item" key = {guest.id}>
                                <div className="guest__data">
                                    <span className="guest__name">{guest.firstName + " " + guest.lastName}</span>
                                    <div className="guest__email">{guest.email}</div>
                                </div>
    
                                <div className="guest__options">
                                    <Svg src="check" class="guest__approved" clicked = {approved} />
                                    <Svg src="cross" class="guest__disapproved" clicked = {disapproved} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        } else if(this.state.status === "Approved") {
            status = (
                <ul className="guest__list">
                    {this.state.approved.length === 0 ? <p className="center">There are no approved requests.</p>: ""}
                    {this.state.approved.map(guest => {
                        const disapproved = () => {
                            this.onDisapproved(guest.id)
                        }
                                
                        return (
                            <li className="guest__list-item" key = {guest.id}>
                                <div className="guest__data">
                                    <span className="guest__name">{guest.firstName + " " + guest.lastName}</span>
                                    <div className="guest__email">{guest.email}</div>
                                </div>
    
                                <div className="guest__options">
                                    <Svg src="cross" class="guest__disapproved" clicked = {disapproved} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        } else if(this.state.status === "Disapproved") {
            status = (
                <ul className="guest__list">
                    {this.state.disapproved.length === 0 ? <p className="center">There are no disapproved requests.</p>: ""}
                    {this.state.disapproved.map(guest => {
                        const approved = () => {
                            this.onApproved(guest.id)
                        }
                                
                        return (
                            <li className="guest__list-item" key = {guest.id}>
                                <div className="guest__data">
                                    <span className="guest__name">{guest.firstName + " " + guest.lastName}</span>
                                    <div className="guest__email">{guest.email}</div>
                                </div>
    
                                <div className="guest__options">
                                    <Svg src="check" class="guest__approved" clicked = {approved} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        }

        return (
            <main className="main guestList__main">
                <nav className="guestList__nav">
                    <div className="guestList__nav-container">
                        <span className="admin__name">Seun + Nathan</span>
                    </div>
                </nav>
                <section className="guestList__section">
                    <div className="guestList__container">
                        <Counter
                        pendingNo={this.state.pending.length}
                        approvedNo={this.state.approved.length}
                        disapprovedNo={this.state.disapproved.length}
                        clicked = {this.onCounterClicked}
                        />
                    </div>
                </section>

                <section className="guestList__section">
                    <div className="guestList__container">
                        <h1 className="heading--1 center">{this.state.status + " Requests"}</h1>
                        {status}
                    </div>
                </section>

                <section className="guestList__section">
                    <div className="guestList__container">
                        <div className="guestList__logout" onClick={this.logout}>
                            <Svg src="log-out" class="guestList__logout-svg" />
                            <span>Logout</span>
                        </div>
                        <button className="btn btn--transparent" onClick={this.onFetchApprovedGuests}>Fetch Approved Guests</button>
                        <button className="btn btn--transparent" onClick={this.onPostApprovedGuests}>Post Approved Guests</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default GuestList