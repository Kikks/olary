import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const Backdrop = (props) => {
    let backdrop = <div></div>;
    if(props.show){
        backdrop = <div className = "backdrop" onClick = {props.clicked}></div>
    }

    return(
        <Auxiliary>
            {backdrop}
        </Auxiliary>
    );
}

export default Backdrop;