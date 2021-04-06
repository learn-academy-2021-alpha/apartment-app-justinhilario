import React from "react"
import PropTypes from "prop-types"
import mockApartments from './MockApartments.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartmentindex" component={ CatIndex } />
          <Route path="/apartmentshow/:id" component={ CatShow } />
          <Route component={ NotFound }/>
        </Switch>
        <React.Fragment>
           { logged_in &&
             <div>
               <a href={sign_out_route }>Sign Out</a>
             </div>
           }
           { !logged_in &&
             <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
            }
        </React.Fragment>
      </Router>
      
    )
  }
}


export default App
