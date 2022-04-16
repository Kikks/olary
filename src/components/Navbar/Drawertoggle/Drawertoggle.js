import React from 'react';

const Drawertoggle = (props) => {
    let classes = ["drawertoggle__bar"];

    if(props.sidebarShown){
        classes = ["drawertoggle__bar", "drawertoggle__bar--x"]
    }

    return (
        <div className = {"drawertoggle " + props.class} onClick = {props.clicked}>
            <div className={classes.join(' ')}></div>
        </div>
    );
};

export default Drawertoggle;