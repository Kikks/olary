import React, { Component } from 'react'

class Timer extends Component {
    state = {
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    }

    componentDidMount() {
        this.onStartTimer()
    }

    onStartTimer = () => {
        const countDownTime = new Date("Aug 22, 2020 09:00:00").getTime()
        const x = setInterval(() => {
            const currentTime = new Date().getTime()

            const distance = countDownTime - currentTime

            const days = Math.floor(distance / (1000 * 60 * 60 *24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / (1000))
        
            if(distance < 0) {
                clearInterval(x)
            }
            
            function pad(number) {
                if(number < 10) {
                    return "0" + number
                }else return number
            }

            this.setState({
                days: pad(days),
                hours: pad(hours),
                minutes: pad(minutes),
                seconds: pad(seconds)
            })
        }, 1000)
    }
    render() {
        return (
            <div className="timer" data-aos="zoom-in">
                <div className="timer__component">
                    <h1 className="timer__value">{this.state.days}</h1>
                    <span className="timer__name">day(s)</span>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">:</h1>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">{this.state.hours}</h1>
                    <span className="timer__name">hour(s)</span>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">:</h1>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">{this.state.minutes}</h1>
                    <span className="timer__name">minute(s)</span>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">:</h1>
                </div>
                <div className="timer__component">
                    <h1 className="timer__value">{this.state.seconds}</h1>
                    <span className="timer__name">second(s)</span>
                </div>
            </div>
        )
    }
}

export default Timer