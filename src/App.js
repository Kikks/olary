import React, { Component } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Auxiliary from './hoc/Auxiliary'
import Navbar from './components/Navbar/Navbar'
import { Switch, Route, Redirect } from 'react-router'
import Home from './containers/Home/Home'
import Gallery from './containers/Gallery/Gallery'
import Story from './containers/Story/Story'
import RSVP from './containers/RSVP/RSVP'
import Registry from './containers/Registry/Registry'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Admin from './containers/Admin/Admin'

class App extends Component {
  state = {
    loaded: false
  }

    componentDidMount() {
      AOS.init({
        duration: 800
      })

      setTimeout(() => {
        this.setState({loaded: true})
      }, 3000);

    }

    render() {
      let app = (
          <Preloader />
      )

      if(this.state.loaded) {
        if (window.location.href === window.location.href.split('/')[0] + "/" + window.location.href.split('/')[1] + "/" + window.location.href.split('/')[2] + "/admin") {
          app = (
            <Route path ="/admin" component={Admin} />
          )
        } else {
          app = (
            <Auxiliary>
                  <Navbar />
                  <Switch>
                    <Route path ="/" exact component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/story" component={Story} />
                    <Route path="/rsvp" component={RSVP} />
                    <Route path="/registry" component={Registry} />
                    <Redirect to="/" />
                  </Switch>
                  <Footer />
              </Auxiliary>
          )
        }
      }

      return (
        [app]
      )
    }
}

export default App
