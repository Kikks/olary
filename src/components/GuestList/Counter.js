import React from 'react'

const Counter = (props) => (
    <div className="counter">
        <div onClick={(pending) => {
        pending = 'Pending'
        props.clicked(pending)
        }} className="counter__box counter__pending">
            <span className="counter__number">
                {props.pendingNo}
            </span>
            <p className="counter__group">pending</p>
        </div>

        <div onClick={(approved) => {
        approved = 'Approved'
        props.clicked(approved)
        }} className="counter__box counter__approved">
            <span className="counter__number">
                {props.approvedNo}
            </span>
            <p className="counter__group">approved</p>
        </div>

        <div onClick={(disapproved) => {
        disapproved = 'Disapproved'
        props.clicked(disapproved)}} className="counter__box counter__disapproved">
            <span className="counter__number">
                {props.disapprovedNo}
            </span>
            <p className="counter__group">disapproved</p>
        </div>
    </div>
)

export default Counter