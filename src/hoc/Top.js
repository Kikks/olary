import { Component } from 'react'

class Top extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render() {
        return this.props.children
    }
}

export default Top