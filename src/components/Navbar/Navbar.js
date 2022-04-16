import React, { Component } from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import Drawertoggle from './Drawertoggle/Drawertoggle';
import Auxiliary from '../../hoc/Auxiliary';
import Sidebar from './Sidebar/Sidebar';

class Toolbar extends Component {
    state = {
        sidebarShown: false,
        activeClass: "nav",
        toggleClass: ""
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                this.setState({
                    activeClass: "nav sticky",
                    toggleClass: "stickyToggle"
                });
            }else{
                this.setState({
                    activeClass: "nav",
                    toggleClass: ""
                })
            }
        })
    }

    onClickHandler = () => {
        this.setState(prevState => {
            return{
                sidebarShown: !prevState.sidebarShown
            };
        });
    }

    render() {
        return (
            <Auxiliary>
                <Sidebar sidebarShown = {this.state.sidebarShown} linkClicked = {this.onClickHandler}/>
                <NavigationItems class={this.state.activeClass} />
                <Drawertoggle class = {this.state.toggleClass} clicked = {this.onClickHandler} sidebarShown = {this.state.sidebarShown}/>
            </Auxiliary>
        );
    }
}

export default Toolbar;